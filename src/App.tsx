import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {Navbar} from "./components/Navbar";
import {HomePage} from "./components/HomePage";
import {Payment} from "./components/Payment"
import {Info} from "./components/Info";
import {CartPage} from "./components/CartPage";
import {Login} from "./components/LoginPage";
import {Registration} from "./components/RegisterPage";

export const ENDPOINT = "http://localhost:8080"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/cars" element={<HomePage/>}/>
                <Route path="/info" element={<Info/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;