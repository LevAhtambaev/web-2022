import {useEffect, useReducer} from "react";
import {getJsonCars} from "../modules";

const initialState = {cars: []}
const success = "Success"

function reducer(state: any, action: { type: any; cars: any; }) {
    switch (action.type) {
        case success:
            return {
                cars: action.cars
            }
        default:
            return state
    }
}

export function GetCars() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const url = `cars`

    useEffect(() => {
        getJsonCars(url).then((result) => {
            dispatch({type: success, cars: result})
        })
    }, [url])

    return state.cars
}