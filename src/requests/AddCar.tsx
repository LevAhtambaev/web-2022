import {addCar} from "../modules";
import React from "react";


export function AddingCar(name: string, sale_price: number, year: number, body_type: string, engine_type: string, engine_volume: number, power: number, gearbox: string, type_of_drive: string, color: string, mileage: number, wheel: string, description: string, image: string) {

    const url = `cars`

    function Add() {
        addCar(url, name, sale_price, year, body_type, engine_type, engine_volume, power, gearbox, type_of_drive, color, mileage, wheel, description, image)
    }


    return (
        <>
            <button
                onClick={() => Add()}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Добавить
            </button>
        </>
    );

}

