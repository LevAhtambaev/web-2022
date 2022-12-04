
import {GetCar} from "../requests/GetCar";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {MyContext} from "./CartPage";
import {DeleteFromCart} from "../requests/DeleteFromCart";


export function Cart() {
    const ctx = useContext(MyContext)
    let Car = GetCar(ctx.Car)
    return (

        <div className="sm:ml-16 border-2 border-slate-300 hover:border-slate-500 rounded mb-2 grid grid-rows-11 grid-cols-2 sm:grid-rows-4 sm:grid-cols-6">

            <p className="sm:hidden col-span-2 sm:col-span-1 place-self-center text-2xl font-bold">{ Car.Name }</p>
            <p className="sm:hidden col-span-2 sm:col-span-1 place-self-center font-bold text-lg">{ Car.SalePrice} рублей</p>

            <img src={Car.Image} className="col-span-2 sm:col-span-1 row-span-4 place-self-start  sm:h-44 sm:w-96 pt-2 mx-2 pb-2 sm:px-0 rounded-3xl" alt={Car.Name}/>
            <p className="mob:hidden col-span-2 place-self-center text-2xl font-bold">{ Car.Name }</p>
            <p className="mob:hidden place-self-center font-bold text-lg">{Car.SalePrice} рублей</p>
            <p className="mob:hidden place-self-center text-lg">{Car.Year}</p>
            <p className="place-self-center text-lg">{Car.Mileage} км</p>
            <p className="place-self-center text-lg">{Car.EngineVolume}л/{Car.Power}л.с.</p>
            <p className="place-self-center text-lg">{Car.TypeOfDrive}</p>
            <Link to="/payment"
                  className="mob:hidden place-self-center row-span-2 col-span-3 rounded-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  state={{name: Car.Name, sell_price: Car.SalePrice}}
            >
                Приобрести
            </Link>

            <p className="place-self-center text-lg">{Car.Gearbox}</p>
            <p className="place-self-center text-lg">{Car.Color}</p>
            <p className="place-self-center text-lg">Купе</p>
            <p className="mob:hidden place-self-center text-lg">{Car.Wheel}</p>

            <form className="place-self-center sm:col-span-3">
            <p className="rounded-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                {DeleteFromCart(ctx.Car)}
            </p>
            </form>

            <Link to="/payment"
                  className="sm:hidden place-self-center sm:row-span-2 sm:col-span-3 rounded-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  state={{name: Car.Name, sell_price: Car.SalePrice}}
            >
                Приобрести
            </Link>

        </div>
    )
}
