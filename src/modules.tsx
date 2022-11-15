import {ENDPOINT} from "./App";
import {ICar} from "./models";
import {ICart} from "./models";

export const getJsonCars = async (url: string) => {
     const res = await fetch(`${ENDPOINT}/${url}`).then((r) => r.json() as Promise<ICar[]>)
     return res
}

export const getJsonCar = async (url: string) => {
    const res = await fetch(`${ENDPOINT}/${url}`).then((r) => r.json() as Promise<ICar>)
    return res
}

export const getJsonCart = async (url: string) => {
    const res = await fetch(`${ENDPOINT}/${url}`).then((r) => r.json() as Promise<ICart[]>)
    return res
}

export const deleteCart = async (url: string) => {
    const res = await fetch(`${ENDPOINT}/${url}`, {method: "DELETE"})
    return res
}




export const addToCart = async (url: string, uuid: string) => {
    const res = await fetch(`${ENDPOINT}/${url}` , {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({Car: uuid})
    })
    return res
}