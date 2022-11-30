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
    let tokens = document.cookie.split(' ')
    let access_token = ''
    for (var i = 0; i < tokens.length; i++) {
        if (tokens[i].startsWith("access_token=")) {
            access_token = tokens[i].replace("access_token=", "")
        }
    }
    access_token = access_token.replace(";", "")
    return axios.get(`${ENDPOINT}/${url}`, {withCredentials: true, headers: {
        "Authorization": `Bearer ${access_token}`
    }}).then(function (response) {
        window.location.replace('/login')
    })
}