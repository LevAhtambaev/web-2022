package ds

import (
	"github.com/google/uuid"
)

type Car struct {
	UUID         uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primary_key;" json:"-"` //default:uuid_generate_v4()
	Name         string    `example:"Subaru WRX I Рестайлинг"`
	SalePrice    uint64    `example:"3500000"`
	Year         uint64    `example:"2017"`
	BodyType     string    `example:"Седан"`
	EngineType   string    `example:"V8"`
	EngineVolume float64   `example:"2.0"`
	Power        uint64    `example:"268"`
	Gearbox      string    `example:"Механика"`
	TypeOfDrive  string    `example:"Полный"`
	Color        string    `example:"Синий"`
	Mileage      uint64    `example:"27000"`
	Wheel        string    `example:"Левый руль"`
	Description  string    `example:"Продаю машину!"`
	Image        string    `example:"https://res.cloudinary.com/dl0tawm7w/image/upload/v1667667247/CarsImages/chrome_YoXkkSgQS3_zsbaep.png"`
}

type CarPrice struct {
	SalePrice uint64 `example:"1200000"`
}
