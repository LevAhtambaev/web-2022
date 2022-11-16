import {Car} from "./Car";
import {createContext} from "react";
import React from "react";
import {ICar} from "../models";
import {GetCars} from "../requests/GetCars";
import {car_context} from "../context/context";


export const MyContext = createContext(car_context);



export function HomePage() {

    return (

        <div className="bg-gray-100 min-h-screen ">
            <div className="pt-5 flex flex-col gap-4 mx-auto container">

                {GetCars().map((car: ICar) => {
                    return (
                        <MyContext.Provider value={car}>
                            <Car/>
                        </MyContext.Provider>
                    )
                })}
            </div>
        </div>

    )
}