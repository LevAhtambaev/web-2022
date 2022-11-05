import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {Navbar} from "./components/Navbar";
import {HomePage} from "./components/HomePage";
import {Payment} from "./components/Payment"
import {Info} from "./components/Info";

export const ENDPOINT = "http://localhost:8080"

function App() {
    return (
        <BrowserRouter basename="/">
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/info" element={<Info/>}/>
                <Route path="/payment" element={<Payment/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;