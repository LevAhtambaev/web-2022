import React from "react"
import {Navbar} from "./Navbar";

export function Info() {
    return(
        <>
            <Navbar/>
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">О нас</h1>
                        <p className="font-normal text-justify text-xl leading-6 text-gray-600 ">Автосалон предоставляет широкий выбор машин японского отечественного рынка. Доступна регистрация и авторизация пользователей, добавление товаров в корзину.</p>
                    </div>
                    <div className="w-full  lg:w-8/12 ">
                        <img className="w-full h-full rounded-3xl" src="https://res.cloudinary.com/dl0tawm7w/image/upload/v1669999498/CarsImages/nissan-skyline-gt-r-r34-car-jdm-nissan-skyline-wallpaper-preview_krf9ed.jpg" alt="A group of People" />
                    </div>
                </div>
            </div>
        </>
    )
}