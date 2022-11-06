// Package docs GENERATED BY SWAG; DO NOT EDIT
// This file was generated by swaggo/swag
package docs

import "github.com/swaggo/swag"

const docTemplate = `{
    "schemes": {{ marshal .Schemes }},
    "swagger": "2.0",
    "info": {
        "description": "{{escape .Description}}",
        "title": "{{.Title}}",
        "contact": {
            "name": "API Support",
            "url": "https://vk.com/hopply_time",
            "email": "hopply@mail.ru"
        },
        "license": {
            "name": "AS IS (NO WARRANTY)"
        },
        "version": "{{.Version}}"
    },
    "host": "{{.Host}}",
    "basePath": "{{.BasePath}}",
    "paths": {
        "/cars": {
            "get": {
                "description": "Get a list of all cars",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Info"
                ],
                "summary": "Get all records",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/ds.Car"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/models.ModelError"
                        }
                    }
                }
            },
            "post": {
                "description": "Adding a new car to database",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Add"
                ],
                "summary": "Add a new car",
                "parameters": [
                    {
                        "type": "string",
                        "description": "Название машины",
                        "name": "Name",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "Цена машины",
                        "name": "SalePrice",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "Год производства",
                        "name": "Year",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "Тип двигателя",
                        "name": "EngineType",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "number",
                        "description": "Объем двигателя",
                        "name": "EngineVolume",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "Кол-во л.с.",
                        "name": "Power",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "Тип коробки передач",
                        "name": "Gearbox",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "Привод",
                        "name": "TypeOfDrive",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "Цвет",
                        "name": "Color",
                        "in": "query"
                    },
                    {
                        "type": "integer",
                        "description": "Пробег",
                        "name": "Mileage",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "Расположение руля",
                        "name": "Wheel",
                        "in": "query"
                    },
                    {
                        "type": "string",
                        "description": "Описание",
                        "name": "Description",
                        "in": "query"
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Created",
                        "schema": {
                            "$ref": "#/definitions/models.ModelCarCreated"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/models.ModelError"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/models.ModelError"
                        }
                    }
                }
            }
        },
        "/cars/:uuid": {
            "get": {
                "description": "Get a price via uuid of a car",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Info"
                ],
                "summary": "Get price for a car",
                "parameters": [
                    {
                        "type": "string",
                        "description": "UUID машины",
                        "name": "UUID",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.ModelCarPrice"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/models.ModelError"
                        }
                    },
                    "404": {
                        "description": "Not Found",
                        "schema": {
                            "$ref": "#/definitions/models.ModelError"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/models.ModelError"
                        }
                    }
                }
            },
            "put": {
                "description": "Change a price for a car via its uuid",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Change"
                ],
                "summary": "Change car price",
                "parameters": [
                    {
                        "type": "string",
                        "description": "UUID машины",
                        "name": "UUID",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "Новая цена",
                        "name": "Price",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.ModelPriceChanged"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/models.ModelError"
                        }
                    },
                    "404": {
                        "description": "Not Found",
                        "schema": {
                            "$ref": "#/definitions/models.ModelError"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/models.ModelError"
                        }
                    }
                }
            },
            "delete": {
                "description": "Delete a car via its uuid",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Change"
                ],
                "summary": "Delete a car",
                "parameters": [
                    {
                        "type": "string",
                        "description": "UUID машины",
                        "name": "UUID",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.ModelCarDeleted"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/models.ModelError"
                        }
                    },
                    "404": {
                        "description": "Not Found",
                        "schema": {
                            "$ref": "#/definitions/models.ModelError"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/models.ModelError"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "ds.Car": {
            "type": "object",
            "properties": {
                "bodyType": {
                    "type": "string"
                },
                "color": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "engineType": {
                    "type": "string"
                },
                "engineVolume": {
                    "type": "number"
                },
                "gearbox": {
                    "type": "string"
                },
                "image": {
                    "type": "string"
                },
                "mileage": {
                    "type": "integer"
                },
                "name": {
                    "type": "string"
                },
                "power": {
                    "type": "integer"
                },
                "salePrice": {
                    "type": "integer"
                },
                "typeOfDrive": {
                    "type": "string"
                },
                "uuid": {
                    "type": "string"
                },
                "wheel": {
                    "type": "string"
                },
                "year": {
                    "type": "integer"
                }
            }
        },
        "models.ModelCarCreated": {
            "type": "object",
            "properties": {
                "created": {
                    "description": "success",
                    "type": "boolean"
                }
            }
        },
        "models.ModelCarDeleted": {
            "type": "object",
            "properties": {
                "deleted": {
                    "type": "boolean"
                }
            }
        },
        "models.ModelCarPrice": {
            "type": "object",
            "properties": {
                "price": {
                    "type": "integer"
                }
            }
        },
        "models.ModelError": {
            "type": "object",
            "properties": {
                "description": {
                    "description": "description",
                    "type": "string"
                },
                "error": {
                    "description": "error",
                    "type": "string"
                },
                "type": {
                    "description": "type",
                    "type": "string"
                }
            }
        },
        "models.ModelPriceChanged": {
            "type": "object",
            "properties": {
                "changed": {
                    "type": "boolean"
                }
            }
        }
    }
}`

// SwaggerInfo holds exported Swagger Info so clients can modify it
var SwaggerInfo = &swag.Spec{
	Version:          "1.0",
	Host:             "127.0.0.1:8080",
	BasePath:         "/",
	Schemes:          []string{"https", "http"},
	Title:            "CarShowroom",
	Description:      "Showroom for japanese domestic market (JDM)",
	InfoInstanceName: "swagger",
	SwaggerTemplate:  docTemplate,
}

func init() {
	swag.Register(SwaggerInfo.InstanceName(), SwaggerInfo)
}