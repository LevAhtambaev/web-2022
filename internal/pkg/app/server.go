package app

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"log"
	"net/http"
	"strconv"
	"web-2022/internal/app/ds"
	"web-2022/swagger/models"
)

func (a *Application) StartServer() {
	log.Println("Server start up")

	r := gin.Default()

	r.GET("/cars", a.GetList)
	r.GET("/cars/price", a.GetCarPrice)

	r.POST("/cars/create", a.AddCar)

	r.PUT("/cars/price/change", a.ChangePrice)

	r.DELETE("/cars/delete", a.DeleteCar)

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

// GetCarPrice  godoc
// @Summary      Get price for a car
// @Description  Get a price via uuid of a car
// @Tags         Info
// @Produce      json
// @Param UUID query string true "UUID машины"
// @Success      200  {object}  models.ModelCarPrice
// @Failure 	 500 {object} models.ModelError
// @Router       /cars/price [get]
func (a *Application) GetCarPrice(gCtx *gin.Context) {
	uuid := gCtx.Query("UUID")
	resp, err := a.repo.GetCarPrice(uuid)
	if err != nil {
		gCtx.JSON(
			http.StatusInternalServerError,
			&models.ModelError{
				Description: "can`t get a price",
				Error:       "db error",
				Type:        "internal",
			})
		return
	}
	gCtx.JSON(
		http.StatusOK,
		&models.ModelCarPrice{
			Price: strconv.FormatUint(resp, 10),
		})

}

// ChangePrice   godoc
// @Summary      Change car price
// @Description  Change a price for a car via its uuid
// @Tags         Change
// @Produce      json
// @Param UUID query string true "UUID машины"
// @Param Price query int true "Новая цена"
// @Success      200  {object}  models.ModelPriceChanged
// @Failure 	 500 {object} models.ModelError
// @Router       /cars/price/change [put]
func (a *Application) ChangePrice(gCtx *gin.Context) {
	inputUuid, _ := uuid.Parse(gCtx.Query("UUID"))
	newPrice, _ := strconv.ParseUint(gCtx.Query("Price"), 10, 64)
	err := a.repo.ChangePrice(inputUuid, newPrice)
	if err != nil {
		gCtx.JSON(
			http.StatusInternalServerError,
			&models.ModelError{
				Description: "update failed",
				Error:       "db error",
				Type:        "internal",
			})
		return
	}
	gCtx.JSON(
		http.StatusOK,
		&models.ModelPriceChanged{
			Success: true,
		})

}

// DeleteCar   godoc
// @Summary      Delete a car
// @Description  Delete a car via its uuid
// @Tags         Change
// @Produce      json
// @Param UUID query string true "UUID машины"
// @Success      200  {object}  models.ModelCarDeleted
// @Failure 	 500 {object} models.ModelError
// @Router       /cars/delete [delete]
func (a *Application) DeleteCar(gCtx *gin.Context) {
	uuid := gCtx.Query("UUID")
	err := a.repo.DeleteCar(uuid)
	if err != nil {
		gCtx.JSON(
			http.StatusInternalServerError,
			&models.ModelError{
				Description: "delete failed",
				Error:       "db error",
				Type:        "internal",
			})
		return
	}
	gCtx.JSON(
		http.StatusOK,
		&models.ModelCarDeleted{
			Success: true,
		})

}

// AddCar godoc
// @Summary      Add a new car
// @Description  Adding a new car to database
// @Tags         Add
// @Produce      json
// @Param Name query string true "Название машины"
// @Param SalePrice query uint64 true "Цена машины"
// @Param Year query uint64 true "Год производства"
// @Param EngineType query string true "Тип двигателя"
// @Param EngineVolume query float64 true "Объем двигателя"
// @Param Power query uint64 true "Кол-во л.с."
// @Param Gearbox query string true "Тип коробки передач"
// @Param TypeOfDrive query string true "Привод"
// @Param Color query string false "Цвет"
// @Param Mileage query uint64 true "Пробег"
// @Param Wheel query string false "Расположение руля"
// @Param Description query string false "Описание"
// @Success      201  {object}  models.ModelCarCreated
// @Failure 500 {object} models.ModelError
// @Router       /cars/create [Post]
func (a *Application) AddCar(gCtx *gin.Context) {
	salePrice, _ := strconv.ParseUint(gCtx.Query("SalePrice"), 10, 64)
	year, _ := strconv.ParseUint(gCtx.Query("Year"), 10, 64)
	engineVolume, _ := strconv.ParseFloat(gCtx.Query("EngineVolume"), 64)
	power, _ := strconv.ParseUint(gCtx.Query("Power"), 10, 64)
	mileage, _ := strconv.ParseUint(gCtx.Query("Mileage"), 10, 64)

	car := ds.Car{
		Name:         gCtx.Query("Name"),
		SalePrice:    salePrice,
		Year:         year,
		EngineType:   gCtx.Query("EngineType"),
		EngineVolume: engineVolume,
		Power:        power,
		Gearbox:      gCtx.Query("Gearbox"),
		TypeOfDrive:  gCtx.Query("TypeOfDrive"),
		Color:        gCtx.Query("Color"),
		Mileage:      mileage,
		Wheel:        gCtx.Query("Wheel"),
		Description:  gCtx.Query("Description"),
	}

	err := a.repo.AddCar(car)
	if err != nil {
		gCtx.JSON(
			http.StatusInternalServerError,
			&models.ModelError{
				Description: "adding failed",
				Error:       "db error",
				Type:        "internal",
			})
		return
	}
	gCtx.JSON(
		http.StatusOK,
		&models.ModelCarCreated{
			Success: true,
		})

}
