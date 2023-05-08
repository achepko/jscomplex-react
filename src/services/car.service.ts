import {IRes} from "../types";
import {ICar} from "../interfaces/car.interface";
import {axiosCarService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll:():IRes<ICar>=>axiosCarService.get(urls.cars.cars),
    getById:(id:number):IRes<ICar>=>axiosCarService.get(urls.cars.byId(id)),
    createCar:(car:ICar):IRes<ICar>=>axiosCarService.post(urls.cars.cars,car),
    updateById:(car:ICar,id:number):IRes<ICar>=>axiosCarService.put(urls.cars.byId(id),car),
    deleteById:(id:number):IRes<void>=>axiosCarService.delete(urls.cars.byId(id))
}

export {
    carService
}