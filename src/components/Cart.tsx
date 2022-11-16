
import {GetCar} from "../requests/GetCar";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {MyContext} from "./CartPage";
import {DeleteFromCart} from "../requests/DeleteFromCart";


export function Cart() {
    const ctx = useContext(MyContext)
    let Car = GetCar(ctx.Car)
    return (
        <div
            //"border py-4 px-4 rounded flex flex-col items-center mb-2 row-span-1 col-span-1"
            className="ml-16 border border-slate-300 py-0 px-0 rounded mb-2 grid grid-rows-4 grid-cols-6"
        >
            <img src={Car.Image} className="row-span-4 place-self-start  h-44 w-96 pt-2 pl-2 pb-2 rounded-3xl" alt={Car.Name}/>
            <p className="col-span-2 place-self-center text-2xl font-bold">{ Car.Name }</p>
            <p className="place-self-center font-bold text-lg">{Car.SalePrice} рублей</p>
            <p className="place-self-center text-lg">{Car.Year}</p>
            <p className="place-self-center text-lg">{Car.Mileage} км</p>
            <p className="place-self-center text-lg">{Car.EngineVolume}л/{Car.Power}л.с.</p>
            <p className="place-self-center text-lg">{Car.TypeOfDrive}</p>
            <Link to="/payment"
                  className="place-self-center row-span-2 col-span-3 rounded-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  state={{name: Car.Name, sell_price: Car.SalePrice}}
            >
                Приобрести
            </Link>

            <p className="place-self-center text-lg">{Car.Gearbox}</p>
            <p className="place-self-center text-lg">{Car.Color}</p>
            <p className="place-self-center text-lg">Купе</p>
            <p className="place-self-center text-lg">{Car.Wheel}</p>
            <form className="place-self-center col-span-3">
            <p className="rounded-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                {DeleteFromCart(ctx.Car)}
            </p>
            </form>

        </div>
    )
}
