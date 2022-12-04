import {IOrder} from "../models";
import React, {createContext} from "react";
import {orders_context} from "../context/context";
import {Navbar} from "./Navbar";
import {GetOrders} from "../requests/GetOrders";
import {Order} from "./Order";


export const MyContext = createContext(orders_context);

export function OrderPage() {
    let orders = GetOrders()
    let showOrders = true
    if (orders.length === 0) {
        showOrders = false
    }
    return (
        <>
            <Navbar/>

            <div className="bg-gray-100 min-h-screen">
                <div className="px-2 sm:px-0 pt-5 flex flex-col gap-4 mx-auto container">
                    {showOrders &&  orders.map((order: IOrder, key: any) => {
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