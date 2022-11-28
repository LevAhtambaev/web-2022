package main

import (
	"context"
	log "github.com/sirupsen/logrus"
	"os"
	"web-2022/internal/pkg/app"
)

// @title CarShowroom
// @version 1.0
// @description Showroom for japanese domestic market (JDM)

// @contact.name API Support
// @contact.url https://vk.com/hopply_time
// @contact.email hopply@mail.ru

// @license.name AS IS (NO WARRANTY)

// @host 127.0.0.1:8080
// @schemes  http https
// @BasePath /

func main() {
	ctx := context.Background()
	log.Println("app start")

	application, err := app.New(ctx)
	if err != nil {
		log.Printf("cant create application: %s", err)

		os.Exit(2)
	}

	err = application.Run()
	if err != nil {
		log.Printf("can`t run application: %s", err)
		os.Exit(2)
	}
	log.Println("app terminated")
}
