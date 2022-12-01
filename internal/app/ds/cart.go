package ds

import "github.com/google/uuid"

type Cart struct {
	UUID     uuid.UUID `db:"uuid" gorm:"type:uuid;default:uuid_generate_v4();primary_key"`
	Car      uuid.UUID `db:"car"`
	UserUUID uuid.UUID `db:"userUUID"`
}

func (Cart) TableName() string {
	return "cart"
}
