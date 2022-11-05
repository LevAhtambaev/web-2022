import {ENDPOINT} from "./App";
import {ICar} from "./models";


export const getJson = async (url: string) => {
    const res = await fetch(`${ENDPOINT}/${url}`).then((r) => r.json() as Promise<ICar[]>)
    return res
}