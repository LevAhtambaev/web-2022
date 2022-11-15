import {Link} from "react-router-dom"
import {useContext} from "react";
import {MyContext} from "./HomePage";



export function Car() {
    const ctx = useContext(MyContext)
    return (
        <div
            //"border py-4 px-4 rounded flex flex-col items-center mb-2 row-span-1 col-span-1"
            className="ml-16 border border-slate-300 py-0 px-0 rounded mb-2 grid grid-rows-4 grid-cols-6"
        >
            <img src={ctx.Image} className="row-span-4 place-self-start  h-44 w-96 pt-2 pl-2 pb-2 rounded-3xl" alt={ctx.Name}/>
            <p className="col-span-2 place-self-center text-2xl font-bold">{ ctx.Name }</p>
            <p className="place-self-center font-bold text-lg">{ctx.SalePrice} рублей</p>
            <p className="place-self-center text-lg">{ctx.Year}</p>
            <p className="place-self-center text-lg">{ctx.Mileage} км</p>
            <p className="place-self-center text-lg">{ctx.EngineVolume}л/{ctx.Power}л.с.</p>
            <p className="place-self-center text-lg">{ctx.TypeOfDrive}</p>
            <Link to="/payment"
                className="place-self-center row-span-2 col-span-3 rounded-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  state={{name: ctx.Name, sell_price: ctx.SalePrice}}
            >
                Приобрести
            </Link>

            <p className="place-self-center text-lg">{ctx.Gearbox}</p>
            <p className="place-self-center text-lg">{ctx.Color}</p>
            <p className="place-self-center text-lg">Купе</p>
            <p className="place-self-center text-lg">{ctx.Wheel}</p>



        </div>

    )
}