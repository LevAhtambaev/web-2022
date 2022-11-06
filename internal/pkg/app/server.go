package app

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"log"
	"net/http"
	"web-2022/internal/app/ds"
	"web-2022/swagger/models"
)

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "*")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func (a *Application) StartServer() {
	log.Println("Server start up")

	r := gin.Default()

	r.Use(CORSMiddleware())

	r.GET("/cars", a.GetList)
	r.GET("/cars/:uuid", a.GetCarPrice)

	r.POST("/cars", a.AddCar)

	r.PUT("/cars/:uuid", a.ChangePrice)

	r.DELETE("/cars/:uuid", a.DeleteCar)

	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")

	log.Println("Server down")
}

// GetList godoc
// @Summary      Get all records
// @Description  Get a list of all cars
// @Tags         Info
// @Produce      json
// @Success      200  {object}  ds.Car
// @Failure 	 500 {object} models.ModelError
// @Router       /cars [get]
func (a *Application) GetList(gCtx *gin.Context) {
	resp, err := a.repo.GetCarsList()
	if err != nil {
		gCtx.JSON(
			http.StatusInternalServerError,
			&models.ModelError{
				Description: "can`t get a list",
				Error:       models.Err500,
				Type:        models.TypeInternalReq,
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
// @Success      	200 {object} models.ModelCarPrice
// @Failure 	 	400 {object} models.ModelError
// @Failure 	 	404 {object} models.ModelError
// @Failure 	 	500 {object} models.ModelError
// @Router       /cars/:uuid [get]
func (a *Application) GetCarPrice(gCtx *gin.Context) {
	uuid, err := uuid.Parse(gCtx.Param("uuid"))
	if err != nil {
		gCtx.JSON(
			http.StatusBadRequest,
			&models.ModelError{
				Description: "Invalid UUID format",
				Error:       models.Err400,
				Type:        models.TypeClientReq,
			})
		return
	}
	resp, err := a.repo.GetCarPrice(uuid)
	if err != nil {
		if resp == 404 {
			gCtx.JSON(
				http.StatusNotFound,
				&models.ModelError{
					Description: "UUID Not Found",
					Error:       models.Err404,
					Type:        models.TypeClientReq,
				})
			return
		} else {
			gCtx.JSON(
				http.StatusInternalServerError,
				&models.ModelError{
					Description: "Get car price failed",
					Error:       models.Err500,
					Type:        models.TypeInternalReq,
				})
			return
		}
	}
	gCtx.JSON(
		http.StatusOK,
		&models.ModelCarPrice{
			Price: resp,
		})

}

// ChangePrice      godoc
// @Summary         Change car price
// @Description     Change a price for a car via its uuid
// @Tags            Change
// @Produce         json
// @Param 		    UUID query string true "UUID машины"
// @Param 			Price query uint64 true "Новая цена"
// @Success      	200 {object} models.ModelPriceChanged
// @Failure 		400 {object} models.ModelError
// @Failure 		404 {object} models.ModelError
// @Failure 	 	500 {object} models.ModelError
// @Router          /cars/:uuid [put]
func (a *Application) ChangePrice(gCtx *gin.Context) {
	UUID, err := uuid.Parse(gCtx.Param("uuid"))
	if err != nil {
		gCtx.JSON(
			http.StatusBadRequest,
			&models.ModelError{
				Description: "Invalid UUID format",
				Error:       models.Err400,
				Type:        models.TypeClientReq,
			})
		return
	}
	car := ds.Car{}
	err = gCtx.BindJSON(&car)
	if err != nil {
		gCtx.JSON(
			http.StatusBadRequest,
			&models.ModelError{
				Description: "The price is negative or not int",
				Error:       models.Err400,
				Type:        models.TypeClientReq,
			})
		return
	}
	resp, err := a.repo.ChangePrice(UUID, car.SalePrice)
	if err != nil {
		if resp == 404 {
			gCtx.JSON(
				http.StatusNotFound,
				&models.ModelError{
					Description: "UUID Not Found",
					Error:       models.Err404,
					Type:        models.TypeClientReq,
				})
			return
		} else {
			gCtx.JSON(
				http.StatusInternalServerError,
				&models.ModelError{
					Description: "Change failed",
					Error:       models.Err500,
					Type:        models.TypeInternalReq,
				})
			return
		}
	}

	gCtx.JSON(
		http.StatusOK,
		&models.ModelPriceChanged{
			Success: true,
		})

}

// DeleteCar        godoc
// @Summary         Delete a car
// @Description     Delete a car via its uuid
// @Tags            Change
// @Produce         json
// @Param 			UUID query string true "UUID машины"
// @Success      	200 {object} models.ModelCarDeleted
// @Failure 		400 {object} models.ModelError
// @Failure 		404 {object} models.ModelError
// @Failure 	 	500 {object} models.ModelError
// @Router          /cars/:uuid [delete]
func (a *Application) DeleteCar(gCtx *gin.Context) {
	UUID, err := uuid.Parse(gCtx.Param("uuid"))
	if err != nil {
		gCtx.JSON(
			http.StatusBadRequest,
			&models.ModelError{
				Description: "Invalid UUID format",
				Error:       models.Err400,
				Type:        models.TypeClientReq,
			})
		return
	}
	resp, err := a.repo.DeleteCar(UUID)
	if err != nil {
		if resp == 404 {
			gCtx.JSON(
				http.StatusNotFound,
				&models.ModelError{
					Description: "UUID Not Found",
					Error:       models.Err404,
					Type:        models.TypeClientReq,
				})
			return
		} else {
			gCtx.JSON(
				http.StatusInternalServerError,
				&models.ModelError{
					Description: "Change failed",
					Error:       models.Err500,
					Type:        models.TypeInternalReq,
				})
			return
		}
	}
	gCtx.JSON(
		http.StatusOK,
		&models.ModelCarDeleted{
			Success: true,
		})

}

// AddCar 			godoc
// @Summary     	Add a new car
// @Description  	Adding a new car to database
// @Tags         	Add
// @Produce     	json
// @Param 			Name query string true "Название машины"
// @Param 			SalePrice query uint64 true "Цена машины"
// @Param 			Year query uint64 true "Год производства"
// @Param 			EngineType query string true "Тип двигателя"
// @Param 			EngineVolume query float64 true "Объем двигателя"
// @Param 			Power query uint64 true "Кол-во л.с."
// @Param 			Gearbox query string true "Тип коробки передач"
// @Param 			TypeOfDrive query string true "Привод"
// @Param 			Color query string false "Цвет"
// @Param 			Mileage query uint64 true "Пробег"
// @Param			Wheel query string false "Расположение руля"
// @Param 			Description query string false "Описание"
// @Success   	    201  {object}  models.ModelCarCreated
// @Failure			400 {object} models.ModelError
// @Failure 		500 {object} models.ModelError
// @Router          /cars [Post]
func (a *Application) AddCar(gCtx *gin.Context) {
	car := ds.Car{}
	err := gCtx.BindJSON(&car)
	if err != nil {
		gCtx.JSON(
			http.StatusBadRequest,
			&models.ModelError{
				Description: "Invalid parameters",
				Error:       models.Err400,
				Type:        models.TypeClientReq,
			})
		return
	}
	err = a.repo.AddCar(car)
	if err != nil {
		gCtx.JSON(
			http.StatusInternalServerError,
			&models.ModelError{
				Description: "Create failed",
				Error:       models.Err500,
				Type:        models.TypeInternalReq,
			})
		return
	}
	gCtx.JSON(
		http.StatusOK,
		&models.ModelCarCreated{
			Success: true,
		})

}
