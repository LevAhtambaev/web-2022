package main

import (
	"log"
	"web-2022/internal/api"
)

func main() {
	log.Println("app start")
	api.StartServer()
	log.Println("app terminated")
}
