import {deleteCar} from "../modules";


export function DeleteCar(uuid: string) {

    const url = `cars`

    function Delete() {
        deleteCar(url, uuid)
    }


    return (
        <form>
            <button onClick={() => Delete()}>Удалить машину</button>
        </form>
    );

}