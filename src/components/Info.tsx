import React from "react"
import {Navbar} from "./Navbar";

export function Info() {
    return(
        <>
            <Navbar/>
        <div className="bg-gray-100 min-h-screen">

            <p className="font-light leading-relaxed mt-0 mb-4 ml-5 text-2xl">
                Автосалон машин японского отечественного рынка (JDM)
            </p>
        </div>
        </>
    )
}