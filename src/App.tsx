import React from 'react';
import {Cars} from "./repository/car";
import {Car} from "./components/Car";


function App() {
  return (
      <div className="container mx-auto flex flex-row gap-4 pt-5">
        {Cars.map((car, key) => {
          return <Car car={car} key={key}/>
        })}
      </div>
  )
}

export default App;