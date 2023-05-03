import {axiosCarAPIService} from "./axios.service";
import {urls} from "../constants";


const carService={
    getAll:()=>axiosCarAPIService.get(urls.cars.cars),
    createCar:(car)=>axiosCarAPIService.post(urls.cars.cars,car),
    updateCarById:(id,car)=>axiosCarAPIService.put(urls.cars.byId(id),car),
    deleteCarById:(id)=>axiosCarAPIService.delete(urls.cars.byId(id))
}

export {
    carService
}