package app

import (
	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
	"log"
	_ "web-2022/docs"
	"web-2022/internal/app/role"
)

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, UPDATE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")

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

	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	r.GET("/cars", a.GetList)
	r.GET("/cars/:uuid", a.GetCar)

	r.GET("/cars/price/:uuid", a.GetCarPrice)

	r.POST("/cart", a.AddToCart)
	r.POST("/orders", a.AddOrder)
	r.POST("/login", a.Login)
	r.POST("/sign_up", a.Register)
	r.GET("/logout", a.Logout)
	r.GET("/role", a.Role)

	r.PUT("/cars/:uuid", a.ChangePrice)

	r.DELETE("/cart/:uuid", a.DeleteFromCart)

	r.Use(a.WithAuthCheck(role.Buyer, role.Manager, role.Admin)).GET("/cart", a.GetCart)
	r.Use(a.WithAuthCheck(role.Manager)).POST("/cars", a.AddCar)
	r.Use(a.WithAuthCheck(role.Manager)).GET("/orders/:order_by", a.GetOrders)
	r.Use(a.WithAuthCheck(role.Manager)).GET("/user/:uuid", a.GetUser)
	r.Use(a.WithAuthCheck(role.Manager)).PUT("/orders/:uuid", a.ChangeStatus)
	r.Use(a.WithAuthCheck(role.Manager)).DELETE("/cars/:uuid", a.DeleteCar)

	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")

	log.Println("Server down")
}
