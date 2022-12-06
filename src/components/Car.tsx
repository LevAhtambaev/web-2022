import {Link} from "react-router-dom"
import React, {useContext, useState} from "react";
import {MyContext} from "./HomePage";
import {AddToCart} from "../requests/AddToCart";
import {getRole, getToken} from "../modules";
import {DeleteCar} from "../requests/DeleteCar";
import {ChangeCar} from "./ChangeCar";



export function Car() {
    const ctx = useContext(MyContext)
    let access_token = getToken()
    let showAddCartButton = true
    if (access_token == "") {
        showAddCartButton = false
    }
    const [roles, setRole] = useState()
    const role = getRole(access_token)
    role.then((result) => {
        setRole(result)
    })
    let showManagerButton = false
    if (roles === 1) {
        showManagerButton = true
    }
    return (
        <div className="sm:ml-16 border-2 border-slate-300 hover:border-slate-500 sm:hover:scale-105 sm:hover:-translate-y-2 rounded mb-2 grid grid-rows-11 grid-cols-2 sm:grid-rows-4 sm:grid-cols-6">

            <p className="sm:hidden col-span-2 sm:col-span-1 place-self-center text-2xl font-bold">{ ctx.Name }</p>
            <p className="sm:hidden col-span-2 sm:col-span-1 place-self-center font-bold text-lg">{ctx.SalePrice} рублей</p>

            <img src={ctx.Image} className="col-span-2 sm:col-span-1 row-span-4 place-self-start  sm:h-44 sm:w-96 pt-2 pl-2 pb-2 px-2 sm:px-1 rounded-3xl" alt={ctx.Name}/>
            <p className="mob:hidden col-span-2 place-self-center text-2xl font-bold">{ ctx.Name }</p>
            <p className="mob:hidden place-self-center font-bold text-lg">{ctx.SalePrice} рублей</p>
            <p className="mob:hidden place-self-center text-lg">{ctx.Year}</p>
            <p className="place-self-center text-lg">{ctx.Mileage} км</p>
            <p className="place-self-center text-lg">{ctx.EngineVolume}л/{ctx.Power}л.с.</p>
            <p className="place-self-center text-lg">{ctx.TypeOfDrive}</p>
            <Link to="/payment"
                className="mob:hidden place-self-center sm:row-span-2 sm:col-span-3 rounded-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  state={{name: ctx.Name, sell_price: ctx.SalePrice}}
            >
                Приобрести
            </Link>

            <p className="place-self-center text-lg">{ctx.Gearbox}</p>
            <p className="place-self-center text-lg">{ctx.Color}</p>
            <p className="place-self-center text-lg">Купе</p>
            <p className="mob:hidden place-self-center text-lg">{ctx.Wheel}</p>

            {showAddCartButton && <p className="place-self-center  sm:col-span-1  rounded-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                {AddToCart(ctx.UUID)}
            </p>}

            {showManagerButton && <p className="place-self-center sm:col-span-1 mob:hidden rounded-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                {DeleteCar(ctx.UUID)}
            </p>}

            {showManagerButton && <Link to="/change" className="place-self-center sm:col-span-1 mob:hidden rounded-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    state={{UUID: ctx.UUID, Name: ctx.Name, Sale_Price: ctx.SalePrice, Year: ctx.Year, BodyType: ctx.BodyType, EngineType: ctx.EngineType, EngineVolume: ctx.EngineVolume, Power: ctx.Power, Gearbox: ctx.Gearbox,TypeOfDrive: ctx.TypeOfDrive, Color: ctx.Color, Mileage: ctx.Mileage, Wheel: ctx.Wheel, Description: ctx.Description, Image: ctx.Image}}
                >
                Изменить
            </Link>}

            <Link to="/payment"
                  className="sm:hidden place-self-center sm:row-span-2 sm:col-span-3 rounded-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  state={{name: ctx.Name, sell_price: ctx.SalePrice}}
            >
                Приобрести
            </Link>

        </div>

    )
}