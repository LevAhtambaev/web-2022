import {ICar} from '../models'
import {Link} from "react-router-dom"

interface CarProps {
    car: ICar
}

export function Car(props: CarProps) {

    return (
        <div
            //"border py-4 px-4 rounded flex flex-col items-center mb-2 row-span-1 col-span-1"
            className="ml-16 border border-slate-300 py-0 px-0 rounded mb-2 grid grid-rows-4 grid-cols-6"
        >
            <img src={process.env.PUBLIC_URL + props.car.Image} className="row-span-4 place-self-start object-cover h-50 w-96 pt-2 pl-2 pb-2 rounded-3xl" alt={props.car.Name}/>
            <p className="col-span-2 place-self-center text-2xl font-bold">{ props.car.Name }</p>
            <p className="place-self-center font-bold text-lg">{props.car.SalePrice} рублей</p>
            <p className="place-self-center text-lg">{props.car.Year}</p>
            <p className="place-self-center text-lg">{props.car.Mileage} км</p>
            <p className="place-self-center text-lg">{props.car.EngineVolume}л/{props.car.Power}л.с.</p>
            <p className="place-self-center text-lg">{props.car.TypeOfDrive}</p>
            <Link to="/payment"
                className="place-self-center row-span-2 col-span-3 rounded-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  state={{name: props.car.Name, sell_price: props.car.SalePrice}}
            >
                Приобрести
            </Link>

            <p className="place-self-center text-lg">{props.car.Gearbox}</p>
            <p className="place-self-center text-lg">{props.car.Color}</p>
            <p className="place-self-center text-lg">Купе</p>
            <p className="place-self-center text-lg">{props.car.Wheel}</p>



        </div>
    )
}