package repository

import (
	"github.com/google/uuid"
	"web-2022/internal/app/ds"
)

func (r *Repository) GetCart(userUUID uuid.UUID) ([]ds.Cart, error) {
	var cart []ds.Cart
	err := r.db.Where("user_uuid = ?", userUUID).Find(&cart).Error
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

func (r *Repository) DeleteByUser(userUUID uuid.UUID) error {
	var cart ds.Cart
	err := r.db.Where("user_uuid = ?", userUUID).Delete(&cart).Error
	if err != nil {
		return err
	}
	return nil
}
