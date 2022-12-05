package app

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"net/http"
	"web-2022/internal/app/ds"
	"web-2022/swagger/models"
)

func (a *Application) AddOrder(gCtx *gin.Context) {
	jwtStr := gCtx.GetHeader("Authorization")
	userUUID := a.GetUserByToken(jwtStr)
	order := ds.Order{}
	order.UserUUID = userUUID
	err := gCtx.BindJSON(&order)
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
	err = a.repo.AddOrder(order)
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

func (a *Application) GetOrders(gCtx *gin.Context) {
	orderBy := gCtx.Param("order_by")
	resp, err := a.repo.GetOrders(orderBy)
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

func (a *Application) ChangeStatus(gCtx *gin.Context) {
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
	order := ds.Order{}
	err = gCtx.BindJSON(&order)
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
	resp, err := a.repo.ChangeStatus(UUID, order.Status)
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
