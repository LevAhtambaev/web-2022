import {Link} from "react-router-dom";
import {ICar, ICart} from "../models";
import {Cart} from "./Cart";
import {GetCart} from "../requests/GetCart";
import React, {createContext} from "react";
import {cart_context} from "../context/context";
import {Car} from "./Car";
import {GetCars} from "../requests/GetCars";

export const MyContext = createContext(cart_context);

export function CartPage() {
    return (

    <div className="bg-gray-100 min-h-screen">
        <div className=" flex flex-col gap-4 container">
            <p className="ml-4 text-2xl font-normal text-black">
                Cars
            </p>

            {GetCart().map((cart: ICart) => {
                return (
                    <MyContext.Provider value={cart}>
                        <Cart/>
                    </MyContext.Provider>
                )
            })}
        </div>
    </div>
    )
}
