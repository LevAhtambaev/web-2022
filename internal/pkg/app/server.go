package app

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"strconv"
)

type Present struct {
	Name  string
	Price int
}
type BirthdayPresents struct {
	Person   string
	Presents []Present
}

func (a *Application) StartServer() {
	log.Println("Server start up")

	list := BirthdayPresents{
		Person: "Lev",
		Presents: []Present{
			{"Toy helicopter", 2000},
			{"Headphones", 1500},
			{"Pizza", 600},
		},
	}

	r := gin.Default()

	r.GET("/ping", func(c *gin.Context) {
		id := c.Query("id") // получаем из запроса query string
		create := c.Query("create")
		if create != "" {
			log.Printf("create recived %s\n", create)
			createBool, err := strconv.ParseBool(create) // пытаемся привести это к чиселке
			if err != nil {                              // если не получилось
				log.Printf("cant convert create %v", err)
				c.Error(err)
				return
			}

			if createBool {
				a.repo.NewRandRecord()
				c.JSON(http.StatusOK, gin.H{
					"status": "ok",
				})
				return
			}
			c.JSON(http.StatusOK, gin.H{
				"status": "create not true",
			})

			return
		}
		if id != "" {
			log.Printf("id recived %s\n", id)
			intID, err := strconv.Atoi(id) // пытаемся привести это к чиселке
			if err != nil {                // если не получилось
				log.Printf("cant convert id %v", err)
				c.Error(err)
				return
			}

			product, err := a.repo.GetProductByID(uint(intID))
			if err != nil { // если не получилось
				log.Printf("cant get product by id %v", err)
				c.Error(err)
				return
			}

			c.JSON(http.StatusOK, gin.H{
				"product_price": product.Price,
			})
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	r.LoadHTMLGlob("templates/*")

	r.GET("/home", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.tmpl", gin.H{
			"title": "Main website",
		})
	})

	r.GET("/presents", func(c *gin.Context) {
		c.HTML(http.StatusOK, "presents.tmpl", gin.H{
			"Person":   list.Person,
			"Presents": list.Presents,
		})
	})

	r.Static("/image", "./resources")

	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")

	log.Println("Server down")
}
