export interface ICar {
    UUID: string
    Name: string
    SalePrice: number
    Year: number
    BodyType: string
    EngineType: string
    EngineVolume: number
    Power: number
    Gearbox: string
    TypeOfDrive: string
    Color: string
    Mileage: number
    Wheel: string
    Description: string
    Image: string
}

export interface ICart {
    UUID: string
    Car: string
}


export interface IOrder {
    UUID: string
    Cars: string[]
    UserUUID: string
    Date: string
    Status: string
}