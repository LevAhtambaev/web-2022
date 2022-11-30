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

export function createUser (url: string, name: string, pass: string)  {
    const body = { name: name, pass: pass }
    return  axios.post(`${ENDPOINT}/${url}`, body).then(function (response) {
        console.log(response);
    })

}

export function loginUser (url: string, name: string, pass: string)  {
    const body = { login: name, password: pass }

    return  axios.post(`${ENDPOINT}/${url}`, body, { withCredentials: true }).then(function (response) {
        window.location.replace('/cars')
    }).catch(error => {
        window.location.replace('/login')
    })

}

export function logoutUser (url: string) {
    let access_token = document.cookie.replace("access_token=", "")
    return axios.get(`${ENDPOINT}/${url}`, {headers: {
        "Authorization": `Bearer ${access_token}`
    }}).then(r => r.data)
}