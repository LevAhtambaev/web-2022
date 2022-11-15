import {ICar} from "../models";
import {ICart} from "../models";

export let car_context: ICar = {
    UUID: "",
    Name: "",
    SalePrice: 0,
    Year: 0,
    BodyType: "",
    EngineType: "",
    EngineVolume: 0,
    Power: 0,
    Gearbox: "",
    TypeOfDrive: "",
    Color: "",
    Mileage: 0,
    Wheel: "",
    Description: "",
    Image: "",
}
export let cart_context: ICart = {
    UUID: "",
    Car: "",
}