import {ICart} from "../models";
import {Cart} from "./Cart";
import {GetCart} from "../requests/GetCart";
import React, {createContext} from "react";
import {cart_context} from "../context/context";
import {Navbar} from "./Navbar";


export const MyContext = createContext(cart_context);

export function CartPage() {
    let cart = GetCart()
    let showCart = true
    if (cart.length === 0) {
        showCart = false
    }

    return (
        <>
            <Navbar/>
        <div className="bg-gray-100 min-h-screen">
            <div className="px-2 sm:px-0 pt-5 flex flex-col gap-4 mx-auto container">
                {showCart &&  cart.map((cart: ICart, key: any) => {
                    return (
                        <MyContext.Provider value={cart} key={key}>
                            <Cart/>
                        </MyContext.Provider>
                    )
                })}
                {!showCart && <h1 className="text-2xl text-center">Ваша корзина пуста!</h1>}
            </div>
        </div>
        </>
    )
}