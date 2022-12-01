package repository

import (
	"errors"
	"github.com/google/uuid"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"web-2022/internal/app/ds"
)

type Repository struct {
	db *gorm.DB
}

func New(dsn string) (*Repository, error) {
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
	}

	return &Repository{
		db: db,
	}, nil
}

func (r *Repository) GetCarsList() ([]ds.Car, error) {

	var cars []ds.Car
	result := r.db.Order("sale_price desc").Find(&cars)
	if result.Error != nil {
		return cars, result.Error
	}
	return cars, nil

}

func (r *Repository) GetCar(uuid uuid.UUID) (ds.Car, error) {
	var car ds.Car
	err := r.db.First(&car, uuid).Error
	return car, err
}

func (r *Repository) AddCar(car ds.Car) error {
	err := r.db.Create(&car).Error
	if err != nil {
		return err
	}
	return nil
}

func (r *Repository) GetCarPrice(uuid uuid.UUID) (uint64, error) {
	var car ds.Car
	err := r.db.First(&car, "uuid = ?", uuid).Error
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return 404, err
		}
		return 500, err
	}
	return car.SalePrice, nil
}

func (r *Repository) ChangePrice(uuid uuid.UUID, price uint64) (int, error) {
	var car ds.Car
	err := r.db.First(&car, "uuid = ?", uuid).Error
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return 404, err
		}
		return 500, err
	}
	err = r.db.Model(&car).Update("SalePrice", price).Error
	//if errors.Is(err, gorm.ErrRecordNotFound)
	if err != nil {
		return 500, err
	}
	return 0, nil
}

func (r *Repository) DeleteCar(uuid uuid.UUID) (int, error) {
	var car ds.Car
	err := r.db.First(&car, uuid).Error
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return 404, err
		}
		return 500, err
	}
	err = r.db.Delete(&car, uuid).Error
	if err != nil {
		return 500, err
	}
	return 0, nil
}

func (r *Repository) GetCart(userUUID uuid.UUID) ([]ds.Cart, error) {
	var cart []ds.Cart
	err := r.db.Find(&cart).Where("userUUID = ?", userUUID).Error
	return cart, err
}

func (r *Repository) AddToCart(cart ds.Cart, userUUID uuid.UUID) error {
	cart.UserUUID = userUUID
	err := r.db.Create(&cart).Error
	if err != nil {
		return err
	}
	return nil
}

func (r *Repository) DeleteFromCart(car uuid.UUID, userUUID uuid.UUID) (int, error) {
	var cart ds.Cart
	err := r.db.Where("car = ? AND user_uuid = ?", car, userUUID).Delete(&cart).Error
	if err != nil {
		return 500, err
	}
	return 0, nil
}

func (r *Repository) Register(user *ds.User) error {
	return r.db.Create(user).Error
}

func (r *Repository) GetUserByLogin(login string) (*ds.User, error) {
	user := &ds.User{}

	err := r.db.First(&user, "name = ?", login).Error
	if err != nil {
		return nil, err
	}

	return user, nil
}
