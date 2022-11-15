import {Car} from "./Car";
import {getJson} from "../modules";
import {useEffect, useReducer} from "react";
import {createContext} from "react";
import React from "react";
import {ICar} from "../models";


let dv: ICar = {
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

export const MyContext = createContext(dv);
const initialState = {cars: []}
const success = "Success"

function reducer(state: any, action: { type: any; cars: any; }) {
    switch (action.type) {
        case success:
            return {
                cars: action.cars
            }
        default:
            return state
    }
}

export function HomePage() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const url = `cars`

    useEffect(() => {
        getJson(url).then((result) => {
            dispatch({type: success, cars: result})
        })
    }, [url])


    return (
        <div className="bg-gray-100 min-h-screen">
            <div className=" flex flex-col gap-4 container">
                <p className="ml-4 text-2xl font-normal text-black">
                    Cars
                </p>

                {state.cars.map((car: ICar) => {
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