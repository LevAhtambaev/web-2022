import {ENDPOINT} from "./App";
import axios from "axios";

export function getJson(url: string) {
     return axios.get(`${ENDPOINT}/${url}`).then(r => r.data)
}


export function deleteCart (url: string) {
    return axios.delete(`${ENDPOINT}/${url}`).then(r => r.data)
}


export function addToCart (url: string, uuid: string)  {
    const body = { Car: uuid }
    return  axios.post(`${ENDPOINT}/${url}`, body).then(function (response) {
        console.log(response);
    })

}