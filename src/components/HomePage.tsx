import {Car} from "./Car";
import {createContext, useState} from "react";
import React from "react";
import {ICar} from "../models";
import {GetCars} from "../requests/GetCars";
import {car_context} from "../context/context";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {Navbar} from "./Navbar";

export const MyContext = createContext(car_context);


export function HomePage() {
    const cars = GetCars()

    const [name, setName] = useState('')

    const filteredCars = cars.filter((car: { Name: string }) => {
        return car.Name.toLowerCase().includes(name.toLowerCase())
    })

    const [price, setPrice] = React.useState<number[]>([0,10000000]);

    const minDistance = 500000;

    const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
        } else {
            setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
        }
    };

    const marks = [
        {
            value: 0,
            label: '0 Р',
        },
        {
            value: 2000000,
            label: '2 млн Р',
        },
        {
            value: 5000000,
            label: '5 млн Р',
        },
        {
            value: 10000000,
            label: '10 млн Р',
        },
    ];

    function valuetext(price: number) {
        return `${price} Р`;
    }


    return (
        <div>
            <Navbar/>
            <div className="bg-gray-100 min-h-screen ">
                <div className="flex pt-5 place-content-center">
                    <form>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 text-gray-500 text-2xl bg-white border rounded-full focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Поиск..."
                            onChange={(event) => setName(event.target.value)}
                        />
                    </form>
                </div>
                <div className="flex pt-5 place-content-center">
                    <Box sx={{ width: 300 }}>
                        <Slider
                            getAriaLabel={() => 'Price filter'}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            value={price}
                            marks={marks}
                            onChange={handleChange}
                            disableSwap
                            step={100000}
                            min={0}
                            max={10000000}
                        />
                    </Box>
                </div>
                <div className="pt-5 flex flex-col gap-4 mx-auto container">
                    {filteredCars.filter((car: { SalePrice: number; }) => car.SalePrice >= price[0] && car.SalePrice <= price[1]).map((car: ICar, key: any) => {
                        return (
                            <MyContext.Provider value={car} key={key}>
                                <Car/>
                            </MyContext.Provider>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}