package repository

import (
	"context"
	"github.com/google/uuid"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"web-2022/internal/app/ds"
	"web-2022/internal/app/dsn"
)

type Repository struct {
	db *gorm.DB
}

func New(ctx context.Context) (*Repository, error) {
	db, err := gorm.Open(postgres.Open(dsn.FromEnv()), &gorm.Config{})
	if err != nil {
		return nil, err
	}

	return &Repository{
		db: db,
	}, nil
}

func (r *Repository) GetCarsList() ([]ds.Car, error) {

	var cars []ds.Car
	result := r.db.Find(&cars)
	if result.Error != nil {
		return cars, result.Error
	}
	return cars, nil

}

func (r *Repository) AddCar(car ds.Car) error {
	err := r.db.Create(&car).Error
	if err != nil {
		return err
	}
	return nil
}

func (r *Repository) GetCarPrice(uuid string) (uint64, error) {
	var car ds.Car
	result := r.db.First(&car, "uuid = ?", uuid)
	if result.Error != nil {
		return 0, result.Error
	}
	return car.SalePrice, nil
}

func (r *Repository) ChangePrice(uuid uuid.UUID, price uint64) error {
	var car ds.Car
	car.UUID = uuid
	err := r.db.First(&car, "uuid = ?", uuid).Error
	if err != nil {
		return err
	}
	err = r.db.Model(&car).Update("SalePrice", price).Error
	//if errors.Is(err, gorm.ErrRecordNotFound)
	if err != nil {
		return err
	}
	return nil
}

func (r *Repository) DeleteCar(uuid string) error {
	var car ds.Car
	result := r.db.Delete(&car, "uuid = ?", uuid)
	if result.Error != nil {
		return result.Error
	}
	return nil
}

//func (r *Repository) GetProductByID(id uint) (*ds.Product, error) {
//	product := &ds.Product{}
//
//	err := r.db.First(product, "id = ?", "1").Error // find product with code D42
//	if err != nil {
//		return nil, err
//	}
//
//	return product, nil
//}
//
//func (r *Repository) NewRandRecord() error {
//	min := 100
//	max := 9000
//	newRecord := ds.Product{
//		Code:  "rand",
//		Price: uint(rand.Intn(max-min+1) + min),
//	}
//	err := r.db.Create(&newRecord).Error // find product with code D42
//	if err != nil {
//		return err
//	}
//	return nil
//}
//
//func (r *Repository) CreateProduct(product ds.Product) error {
//	return r.db.Create(product).Error
//}
