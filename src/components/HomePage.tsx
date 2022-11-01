import {Cars} from "../repository/car";
import {Car} from "./Car";
import React from "react";

export function HomePage() {
    return (
        <div className="container  flex flex-col gap-4">
            <p className="ml-4 text-2xl font-normal text-black">
                Cars
            </p>

            {Cars.map((car, key) => {
                return <Car car={car} key={key}/>
            })}
        </div>
    )
}