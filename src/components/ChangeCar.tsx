import React, {useState} from "react"
import {Navbar} from "./Navbar";
import {ChangingCar} from "../requests/ChangeCar";
import {useLocation} from "react-router-dom";

export function ChangeCar() {
    const [name, setName] = useState(useLocation().state.Name);
    const handleChangeName = (event: { target: { value: any; }; }) => {
        setName(event.target.value);
    };

    const [sale_price, setPrice] = useState(useLocation().state.Sale_Price);
    const handleChangePrice = (event: { target: { value: any; }; }) => {
        setPrice(Number(event.target.value));
    };

    const [year, setYear] = useState(useLocation().state.Year);
    const handleChangeYear = (event: { target: { value: any; }; }) => {
        setYear(Number(event.target.value));
    };

    const [body_type, setBody] = useState(useLocation().state.BodyType);
    const handleChangeBody = (event: { target: { value: any; }; }) => {
        setBody(event.target.value);
    };

    const [engine_type, setEngineType] = useState(useLocation().state.EngineType);
    const handleChangeEngineType = (event: { target: { value: any; }; }) => {
        setEngineType(event.target.value);
    };

    const [engine_volume, setEngineVolume] = useState(useLocation().state.EngineVolume);
    const handleChangeEngineVolume = (event: { target: { value: any; }; }) => {
        setEngineVolume(Number(event.target.value));
    };

    const [power, setPower] = useState(useLocation().state.Power);
    const handleChangePower = (event: { target: { value: any; }; }) => {
        setPower(Number(event.target.value));
    };

    const [gearbox, setGearbox] = useState(useLocation().state.Gearbox);
    const handleChangeGearbox = (event: { target: { value: any; }; }) => {
        setGearbox(event.target.value);
    };

    const [type_of_drive, setTypeOfDrive] = useState(useLocation().state.TypeOfDrive);
    const handleChangeTypeOfDrive = (event: { target: { value: any; }; }) => {
        setTypeOfDrive(event.target.value);
    };

    const [color, setColor] = useState(useLocation().state.Color);
    const handleChangeColor = (event: { target: { value: any; }; }) => {
        setColor(event.target.value);
    };

    const [mileage, setMileage] = useState(useLocation().state.Mileage);
    const handleChangeMileage = (event: { target: { value: any; }; }) => {
        setMileage(Number(event.target.value));
    };

    const [wheel, setWheel] = useState(useLocation().state.Wheel);
    const handleChangeWheel = (event: { target: { value: any; }; }) => {
        setWheel(event.target.value);
    };

    const [description, setDescription] = useState(useLocation().state.Description);
    const handleChangeDescription = (event: { target: { value: any; }; }) => {
        setDescription(event.target.value);
    };

    const [image, setImage] = useState(useLocation().state.Image);
    const handleChangeImage = (event: { target: { value: any; }; }) => {
        setImage(event.target.value);
    };

    return(
        <>
            <Navbar/>

            <div className="mt-10 sm:mt-0">
                <div className="md:gap-6">
                    <div className="px-4 ">
                        <h3 className="text-3xl mt-2 text-center font-medium leading-6 text-gray-900">Изменение машины</h3>
                    </div>
                    <div className="mt-5  md:mt-0">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-5 grid-rows-4 gap-6">
                                        <div className="col-span-2">
                                            <label htmlFor="first-name" className="block text-base font-medium text-gray-700">
                                                Название
                                            </label>
                                            <input
                                                type="text"
                                                onChange={handleChangeName}
                                                value={name}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                                            />
                                        </div>

                                        <div className="">
                                            <label htmlFor="first-name" className="block text-base font-medium text-gray-700">
                                                Цена
                                            </label>
                                            <input
                                                type="number"
                                                onChange={handleChangePrice}
                                                value={sale_price}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                                            />
                                        </div>

                                        <div className="">
                                            <label htmlFor="first-name" className="block text-base font-medium text-gray-700">
                                                Год
                                            </label>
                                            <input
                                                type="number"
                                                max="2022"
                                                onChange={handleChangeYear}
                                                value={year}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                                            />
                                        </div>

                                        <div className="">
                                            <label htmlFor="first-name" className="block text-base font-medium text-gray-700">
                                                Пробег
                                            </label>
                                            <input
                                                type="number"
                                                onChange={handleChangeMileage}
                                                value={mileage}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                                            />
                                        </div>

                                        <div className="">
                                            <label htmlFor="first-name" className="block text-base font-medium text-gray-700">
                                                Тип кузова
                                            </label>
                                            <select
                                                onChange={handleChangeBody}
                                                value={body_type}
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-base"
                                            >
                                                <option>Седан</option>
                                                <option>Купе</option>
                                                <option>Хэтчбек</option>
                                            </select>
                                        </div>

                                        <div className="">
                                            <label htmlFor="first-name" className="block text-base font-medium text-gray-700">
                                                Тип двигателя
                                            </label>
                                            <select
                                                onChange={handleChangeEngineType}
                                                value={engine_type}
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-base"
                                            >
                                                <option>V8</option>
                                                <option>V6</option>
                                                <option>V4</option>
                                            </select>
                                        </div>

                                        <div className="">
                                            <label htmlFor="first-name" className="block text-base font-medium text-gray-700">
                                                Мощность двигателя
                                            </label>
                                            <input
                                                type="number"
                                                onChange={handleChangePower}
                                                value={power}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                                            />
                                        </div>

                                        <div className="">
                                            <label htmlFor="first-name" className="block text-base font-medium text-gray-700">
                                                Объем двигателя
                                            </label>
                                            <input
                                                type="number"
                                                step="0.1"
                                                onChange={handleChangeEngineVolume}
                                                value={engine_volume}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                                            />
                                        </div>

                                        <div className="">
                                            <label htmlFor="first-name" className="block text-base font-medium text-gray-700">
                                                Тип руля
                                            </label>
                                            <select
                                                onChange={handleChangeWheel}
                                                value={wheel}
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-base"
                                            >
                                                <option>Правый руль</option>
                                                <option>Левый руль</option>
                                            </select>
                                        </div>

                                        <div className="">
                                            <label htmlFor="first-name" className="block text-base font-medium text-gray-700">
                                                Тип коробки передач
                                            </label>
                                            <select
                                                onChange={handleChangeGearbox}
                                                value={gearbox}
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-base"
                                            >
                                                <option>Механика</option>
                                                <option>Автомат</option>
                                            </select>
                                        </div>

                                        <div className="">
                                            <label htmlFor="first-name" className="block text-base font-medium text-gray-700">
                                                Привод
                                            </label>
                                            <select
                                                onChange={handleChangeTypeOfDrive}
                                                value={type_of_drive}
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-base"
                                            >
                                                <option>Полный</option>
                                                <option>Передний</option>
                                                <option>Задний</option>
                                            </select>
                                        </div>

                                        <div className="">
                                            <label htmlFor="first-name" className="block text-base font-medium text-gray-700">
                                                Цвет
                                            </label>
                                            <input
                                                type="text"
                                                onChange={handleChangeColor}
                                                value={color}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <label htmlFor="first-name" className="block text-base font-medium text-gray-700">
                                                Ссылка на изображение
                                            </label>
                                            <input
                                                type="text"
                                                onChange={handleChangeImage}
                                                value={image}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                                            />
                                        </div>

                                        <div className="col-span-5">
                                            <label htmlFor="first-name" className="block text-base font-medium text-gray-700">
                                                Описание
                                            </label>
                                            <input
                                                type="text"
                                                onChange={handleChangeDescription}
                                                value={description}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                                            />
                                        </div>




                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                                    {ChangingCar(useLocation().state.UUID, name, sale_price, year, body_type, engine_type, engine_volume, power, gearbox, type_of_drive, color, mileage, wheel, description, image)}
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}