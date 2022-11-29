import {loginUser} from "../modules";
import React from "react";
import {Link} from "react-router-dom";

export function LoginUser(name: string, pass: string) {

    const url = `login`

    function Login() {
        loginUser(url, name, pass)
        console.log(name)
        console.log(pass)
    }


    return (
        <>
            <Link to="/cars"
                  className="block w-full text-center px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                  onClick={() => Login()}
            >
                Войти
            </Link>
        </>
    );

}