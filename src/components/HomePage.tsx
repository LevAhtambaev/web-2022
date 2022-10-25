import {Cars} from "../repository/car";
import {Car} from "./Car";
import React from "react";

export function HomePage() {
    return (
        <div className="container mx-auto flex flex-col gap-4 pt-5">
            {Cars.map((car, key) => {
                return <Car car={car} key={key}/>
            })}
        </div>
    )
}