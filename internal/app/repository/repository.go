package repository

import (
	"context"
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
	return cars, result.Error

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
