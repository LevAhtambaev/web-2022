import {useContext} from "react";
import {MyContext} from "./OrderPage";
import {GetUser} from "../requests/GetUser";



export function Order() {
    const ctx = useContext(MyContext)
    return (
        <div className="border-2 border-slate-300 rounded mb-2 grid grid-cols-4">
            <p className="pl-2 text-center place-self-center text-lg">
                {ctx.Cars.join(" ")}
            </p>

            <p className="place-self-center text-lg">
                {GetUser(ctx.UserUUID)}
            </p>

            <p className="place-self-center text-lg">
                {ctx.Date.replace("T", " ").split(".")[0]}
            </p>

            <p className="place-self-center text-lg">
                {ctx.Status}
            </p>

        </div>
    )
}
