import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";

const Cars = () => {
    let [cars, setCars] = useState([]);
    let [allCars, setAllCars] = useState(null);
    let [carForUpdate, setCatForUpdate] = useState(null);
    let [carForDelete, setCarForDelete] = useState(null);
    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[allCars])
    return (
        <div>
            {<CarForm setAllCars={setAllCars} carForUpdate={carForUpdate} carForDelete={carForDelete}/>}
            {cars.map(car=><Car key={car.id} car={car} setCatForUpdate={setCatForUpdate} setCarForDelete={setCarForDelete}/>)}
        </div>
    );
};

export default Cars;