import {Link} from "react-router-dom"
import {useLocation} from "react-router-dom"
import {Navbar} from "./Navbar";
import React from "react";

export function Payment() {
    return (
        <><Navbar/>
        <div className = "bg-gray-100 min-h-screen">
            <p className="ml-4 text-2xl font-normal text-black">
                Cars / {useLocation().state.name}
            </p>

            <p className="text-6xl text-center">
                Приобрести машину
            </p>

            <p className="mt-8  text-4xl  text-center">
                Машина:
                <p className="italic text-4xl ">
                    {useLocation().state.name}
                </p>
                <p className=" italic text-4xl ">
                    Цена: {useLocation().state.sell_price}
                </p>
            </p>

            <p className="my-8 text-center">
                <Link to="/cars"
                      className="border-4 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white py-1 px-3 rounded-full text-2xl font-bold"
                >
                    Обратно на главную
                </Link>
            </p>

            {/*<img src="/resourses/Payment.jpg" width="23%" className="mx-auto" alt="Payment"/>*/}
        </div>
        </>
    )
}