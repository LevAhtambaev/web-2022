package app

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	log "github.com/sirupsen/logrus"
	"net/http"
	"web-2022/internal/app/ds"
	"web-2022/swagger/models"
)

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
// @Param UUID path string true "UUID машины"
// @Success      	200 {object} models.ModelCarPrice
// @Failure 	 	400 {object} models.ModelError
// @Failure 	 	404 {object} models.ModelError
// @Failure 	 	500 {object} models.ModelError
// @Router       /cars/{UUID} [get]
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

// ChangeCar      godoc
// @Summary         Change car price
// @Description     Change a price for a car via its uuid
// @Tags            Change
// @Accept       	json
// @Produce         json
// @Param 		    UUID path string true "UUID машины"
// @Param 			SalePrice body ds.CarPrice  true "Новая цена"
// @Success      	200 {object} models.ModelPriceChanged
// @Failure 		400 {object} models.ModelError
// @Failure 		404 {object} models.ModelError
// @Failure 	 	500 {object} models.ModelError
// @Router          /cars/{UUID} [put]
func (a *Application) ChangeCar(gCtx *gin.Context) {
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
	log.Println(car)
	resp, err := a.repo.ChangeCar(UUID, car)
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
// @Param 			UUID path string true "UUID машины"
// @Success      	200 {object} models.ModelCarDeleted
// @Failure 		400 {object} models.ModelError
// @Failure 		404 {object} models.ModelError
// @Failure 	 	500 {object} models.ModelError
// @Router          /cars/{UUID} [delete]
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
// @Accept       	json
// @Produce     	json
// @Param 			Car body ds.Car true "Машина"
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

func (a *Application) GetCar(gCtx *gin.Context) {
	UUID, err := uuid.Parse(gCtx.Param("uuid"))
	resp, err := a.repo.GetCar(UUID)
	if err != nil {
		gCtx.JSON(
			http.StatusInternalServerError,
			&models.ModelError{
				Description: "Can't get a car",
				Error:       models.Err500,
				Type:        models.TypeInternalReq,
			})
		return
	}

	gCtx.JSON(http.StatusOK, resp)
}
