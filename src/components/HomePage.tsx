//import {Cars} from "../repository/car";
import {Car} from "./Car";
import {getJson} from "../modules";
import {useEffect, useState} from "react";
import React from "react";
import {ICar} from "../models";

export function HomePage() {

const [Cars, setCar] = useState<ICar[]>([])
const getAllCars = async () => {
    const result = await getJson("cars")
    await setCar(result)
}

useEffect(() => {getAllCars()}, [])
    return (
        <div className="bg-gray-100 min-h-screen">
        <div className=" flex flex-col gap-4 container">
            <p className="ml-4 text-2xl font-normal text-black">
                Cars
            </p>

            {Cars.map((car, key) => {
                return <Car car={car} key={key}/>
            })}
        </div>
        </div>

    )
}