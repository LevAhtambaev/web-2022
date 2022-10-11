package app

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"web-2022/internal/app/ds"
	"web-2022/swagger/models"
)

func (a *Application) StartServer() {
	log.Println("Server start up")

	r := gin.Default()

	r.GET("/cars", a.GetList)

	r.POST("/cars/create", a.AddCar)

	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")

	log.Println("Server down")
}

type inter struct {
	Status string `json:"status"`
}

// GetList godoc
// @Summary      Get all records
// @Description  Get a list of all cars
// @Tags         Info
// @Produce      json
// @Success      200  {object}  ds.Car
// @Failure 500 {object} models.ModelError
// @Router       /cars [get]
func (a *Application) GetList(gCtx *gin.Context) {
	resp, err := a.repo.GetCarsList()
	if err != nil {
		gCtx.JSON(
			http.StatusInternalServerError,
			&models.ModelError{
				Description: "can`t get a list",
				Error:       "db error",
				Type:        "internal",
			})
		return
	}
	gCtx.JSON(http.StatusOK, resp)

}

// AddCar godoc
// @Summary      Add a new car
// @Description  Adding a new car to database
// @Tags         Add
// @Produce      json
// @Success      200  {object}  ds.Car
// @Failure 500 {object} models.ModelError
// @Router       /cars [get]
func (a *Application) AddCar(gCtx *gin.Context) {
	car := &ds.Car{
		Name:         "",
		SalePrice:    0,
		Year:         0,
		EngineType:   "",
		EngineVolume: 0,
		Power:        0,
		Gearbox:      "",
		TypeOfDrive:  "",
		Color:        "",
		Mileage:      0,
		Wheel:        "",
		Description:  "",
	}

}
