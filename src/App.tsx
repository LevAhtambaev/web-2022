import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {Navbar} from "./components/Navbar";
import {ShoppingCart} from "./components/ShoppingCart";
import {HomePage} from "./components/HomePage";
import {Payment} from "./components/Payment"
import {Info} from "./components/Info";

export const ENDPOINT = "http://localhost:8080"

function App() {
    return (
        <BrowserRouter>
            <Navbar>
            <Routes>
                <Route path="/cars" element={<HomePage/>}/>
                <Route path="/info" element={<Info/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/cart" element={<ShoppingCart/>}/>
            </Routes>
            </Navbar>
        </BrowserRouter>
    )
}

export default App;