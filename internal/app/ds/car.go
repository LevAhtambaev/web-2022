package ds

import (
	"github.com/google/uuid"
)

type Car struct {
	UUID         uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primary_key;"` //default:uuid_generate_v4()
	Name         string
	SalePrice    uint64
	Year         uint64
	BodyType     string
	EngineType   string
	EngineVolume float64
	Power        uint64
	Gearbox      string
	TypeOfDrive  string
	Color        string
	Mileage      uint64
	Wheel        string
	Description  string
	Image        string
}
