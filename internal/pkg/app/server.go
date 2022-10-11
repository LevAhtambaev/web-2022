package app

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"web-2022/swagger/models"
)

func (a *Application) StartServer() {
	log.Println("Server start up")

	r := gin.Default()

	r.GET("/cars", a.GetList)

	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")

	log.Println("Server down")
}

type inter struct {
	Status string `json:"status"`
}

// GetList godoc
// @Summary      Get all records
// @Description  Get a list of all cars
// @Tags         Tests
// @Produce      json
// @Success      200  {object}  ds.Car
// @Failure 400 {object} models.ModelError
// @Failure 500 {object} models.ModelError
// @Router       /cars [get]
func (a *Application) GetList(gCtx *gin.Context) {
	//resp, _ := a.repo.GetCarsList()
	resp, err := a.repo.GetCarsList()
	if err != nil {
		gCtx.JSON(
			http.StatusInternalServerError,
			&models.ModelError{
				Description: "can`t get a list",
				Error:       "db error",
				Type:        "internal",
			})
	}
	gCtx.JSON(http.StatusOK, resp)

}
