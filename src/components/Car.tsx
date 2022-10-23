import {ICar} from '../models'
import {useState} from "react";

interface CarProps {
    car: ICar
}

export function Car(props: CarProps) {
    const [ShowDescription, setShowDescription] = useState<boolean>(false)
    return (
        <div
            className="border py-4 px-4 rounded flex flex-col items-center mb-2"
        >
            <img src={process.env.PUBLIC_URL + props.car.Image} className="w-2/5" alt={props.car.Name}/>
            <p>{ props.car.Name }</p>
            <p className="font-bold">{props.car.SalePrice} рублей</p>
            <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => setShowDescription((prevState) => !prevState)}
            >
                {!ShowDescription ? <div>Show Description</div> : <div>Hide Description</div>}
            </button>

            {ShowDescription && <div>
                <p>{props.car.Description}</p>
            </div>}
        </div>
    )
}