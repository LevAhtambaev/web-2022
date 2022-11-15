import {useEffect, useReducer} from "react";
import {getJsonCar} from "../modules";

const initialState = {car: ""}
const success = "Success"

function reducer(state: any, action: { type: any; car: any; }) {
    switch (action.type) {
        case success:
            return {
                car: action.car
            }
        default:
            return state
    }
}

export function GetCar(uuid: string) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const url = `cars/${uuid}`

    useEffect(() => {
        getJsonCar(url).then((result) => {
            dispatch({type: success, car: result})
        })
    }, [url])

    return state.car
}