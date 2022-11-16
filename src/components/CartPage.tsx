import {ICart} from "../models";
import {Cart} from "./Cart";
import {GetCart} from "../requests/GetCart";
import React, {createContext} from "react";
import {cart_context} from "../context/context";


export const MyContext = createContext(cart_context);

export function CartPage() {
    return (

    <div className="bg-gray-100 min-h-screen">
        <div className=" flex flex-col gap-4 container">

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
