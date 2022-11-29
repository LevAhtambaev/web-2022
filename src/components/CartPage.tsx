import {ICart} from "../models";
import {Cart} from "./Cart";
import {GetCart} from "../requests/GetCart";
import React, {createContext} from "react";
import {cart_context} from "../context/context";
import {Navbar} from "./Navbar";


export const MyContext = createContext(cart_context);

export function CartPage() {
    return (
        <>
            <Navbar/>
        <div className="bg-gray-100 min-h-screen">
            <div className="pt-5 flex flex-col gap-4 mx-auto container">
                {GetCart().map((cart: ICart, key: any) => {
                    return (
                        <MyContext.Provider value={cart} key={key}>
                            <Cart/>
                        </MyContext.Provider>
                    )
                })}
            </div>
        </div>
        </>
    )
}