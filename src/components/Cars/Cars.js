import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";

const Cars = () => {
    let [cars, setCars] = useState([]);
    let [allCars, setAllCars] = useState(null);
    let [carForUpdate, setCatForUpdate] = useState(null);

    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[allCars])
    return (
        <div>
            {<CarForm setAllCars={setAllCars} carForUpdate={carForUpdate} setCatForUpdate={setCatForUpdate} />}
            <hr/>
            {cars.map(car=><Car key={car.id} car={car} setCatForUpdate={setCatForUpdate} />)}
        </div>
    );
};

export default Cars;