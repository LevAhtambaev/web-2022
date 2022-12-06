package repository

import (
	"errors"
	"github.com/google/uuid"
	"gorm.io/gorm"
	"web-2022/internal/app/ds"
)

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

func (r *Repository) GetCarName(uuid string) (string, error) {
	var car ds.Car
	err := r.db.Select("name").First(&car, "uuid = ?", uuid).Error
	return car.Name, err
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

func (r *Repository) ChangeCar(uuid uuid.UUID, car ds.Car) (int, error) {
	car.UUID = uuid
	err := r.db.Model(&car).Updates(ds.Car{Name: car.Name, SalePrice: car.SalePrice, Year: car.Year, BodyType: car.BodyType,
		EngineType: car.EngineType, EngineVolume: car.EngineVolume, Power: car.Power, Gearbox: car.Gearbox,
		TypeOfDrive: car.TypeOfDrive, Color: car.Color, Mileage: car.Mileage, Wheel: car.Wheel, Description: car.Description, Image: car.Image}).Error
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
