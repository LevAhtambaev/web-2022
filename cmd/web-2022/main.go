package main

import (
	"context"
	"fmt"
	log "github.com/sirupsen/logrus"
	"os"
	"web-2022/internal/app/config"
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
	cfg, err := config.NewConfig(ctx)
	if err != nil {
		log.WithContext(ctx).WithError(err).Error("cant init config")

		os.Exit(2)
	}

	ctx = config.WrapContext(ctx, cfg)

	fmt.Println(cfg)
	application, err := app.New(ctx)
	if err != nil {
		log.WithContext(ctx).WithError(err).Error("can`t create application")

		os.Exit(2)
	}

	err = application.Run(ctx)
	if err != nil {
		log.WithContext(ctx).WithError(err).Error("can`t run application")

		os.Exit(2)
	}
	log.Println("app terminated")
}
