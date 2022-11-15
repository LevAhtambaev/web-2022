package ds

import (
	"github.com/google/uuid"
)

type Car struct {
	UUID         uuid.UUID `db:"uuid" gorm:"type:uuid;default:uuid_generate_v4();primary_key"`
	Name         string    `db:"name" example:"Subaru WRX I Рестайлинг"`
	SalePrice    uint64    `db:"sale_price" example:"3500000"`
	Year         uint64    `db:"year" example:"2017"`
	BodyType     string    `db:"body_type" example:"Седан"`
	EngineType   string    `db:"engine_type" example:"V8"`
	EngineVolume float64   `db:"engine_volume" example:"2.0"`
	Power        uint64    `db:"power" example:"268"`
	Gearbox      string    `db:"gearbox" example:"Механика"`
	TypeOfDrive  string    `db:"type_of_drive" example:"Полный"`
	Color        string    `db:"color" example:"Синий"`
	Mileage      uint64    `db:"mileage" example:"27000"`
	Wheel        string    `db:"wheel" example:"Левый руль"`
	Description  string    `db:"description" example:"Продаю машину!"`
	Image        string    `db:"image" example:"https://res.cloudinary.com/dl0tawm7w/image/upload/v1667667247/CarsImages/chrome_YoXkkSgQS3_zsbaep.png"`
}

type CarPrice struct {
	SalePrice uint64 `example:"1200000"`
}
