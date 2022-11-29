import React from "react";

export function Registration() {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700">
                    Регистрация
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="login"
                            className="block text-sm font-semibold text-indigo-800"
                        >
                            Login
                        </label>
                        <input
                            type="login"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-indigo-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            Зарегестрироваться
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xl font-light text-center text-indigo-700">
                    {" "}
                    Уже есть аккаунт?{" "}
                    <a
                        href="/login"
                        className="font-medium text-indigo-600 text-xl hover:underline"
                    >
                        Войти
                    </a>
                </p>
            </div>
        </div>
    );
}