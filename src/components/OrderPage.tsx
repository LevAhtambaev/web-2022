import {IOrder} from "../models";
import React, {createContext, useEffect, useReducer, useState} from "react";
import {orders_context} from "../context/context";
import {Navbar} from "./Navbar";
import {Order} from "./Order";
import {getToken} from "../modules";
import axios from "axios";
import {ENDPOINT} from "../App";
import {reducer} from "../requests/GetOrders";


export const MyContext = createContext(orders_context);


const initialState = {order: []}
const success = "Success"



export function OrderPage() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const url = `orders`
    let access_token = getToken()

    const [orderBy, setOrderBy] = useState("date");

    useEffect(() => {
        axios.get(`${ENDPOINT}/${url}/${orderBy}`, {withCredentials: true, headers: {
                "Authorization": `Bearer ${access_token}`
            }}).then(r => r.data).then((result) => {
            dispatch({type: success, payload: result})
        })
    }, [])


    let showOrders = true
    if (state.order.length === 0) {
        showOrders = false
    }

    const [doubleTapDate, setDoubleTapDate] = useState(false);
    const [doubleTapStatus, setDoubleTapStatus] = useState(false);
    const [dateOrder, setDate] = useState("date");
    const [statusOrder, setStatus] = useState("status");

    useEffect(() => {
        if (doubleTapDate) {
            setDate("date");
        } else {
            setDate("date desc");
        }
        axios.get(`${ENDPOINT}/${url}/${dateOrder}`, {withCredentials: true, headers: {
                "Authorization": `Bearer ${access_token}`
            }}).then(r => r.data).then((result) => {
            dispatch({type: success, payload: result})
        })
    }, [doubleTapDate])

    useEffect(() => {
        if (doubleTapStatus) {
            setStatus("status");
        } else {
            setStatus("status desc");
        }
        axios.get(`${ENDPOINT}/${url}/${statusOrder}`, {withCredentials: true, headers: {
                "Authorization": `Bearer ${access_token}`
            }}).then(r => r.data).then((result) => {
            dispatch({type: success, payload: result})
        })
    }, [doubleTapStatus])

    return (
        <>
            <Navbar/>

            <div className="bg-gray-100 min-h-screen">

                <div className="px-2 sm:px-0 pt-5 flex flex-col gap-0 mx-auto container">
                    <div className="border-2 border-slate-300 -mb-1 rounded py-2  grid grid-cols-4">
                        <p className="place-self-center text-lg font-bold">
                            Машины
                        </p>
                        <p className="place-self-center text-lg font-bold">
                            Покупатель
                        </p>

                        <div className="place-self-center text-lg font-bold">
                            <p className="place-self-center text-lg font-bold">
                                Дата
                            </p>
                            <button onClick={() => {setDoubleTapDate(!doubleTapDate)}}>По дате</button>
                        </div>

                        <div className="place-self-center text-lg font-bold">
                            <p className="place-self-center text-lg font-bold">
                                Статус
                            </p>
                            <button onClick={() => {setDoubleTapStatus(!doubleTapStatus)}}>По статусу</button>
                        </div>
                    </div>
                    {showOrders &&  state.order.map((order: IOrder, key: any) => {
                        return (
                            <MyContext.Provider value={order} key={key}>
                                <Order/>
                            </MyContext.Provider>
                        )
                    })}
                    {!showOrders && <h1 className="text-2xl text-center">Заказов нет!</h1>}
                </div>
            </div>
        </>
    )
}