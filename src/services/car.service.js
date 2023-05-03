import {axiosService} from "./axios.service";
import {urls} from "../constants";


const carService={
    getAll:()=>axiosService.get(urls.cars),
    getById:(id)=>axiosService.get(`${urls.cars}/${id}`),
    createCar:(car)=>axiosService.post(urls.cars,car),
    updateCarById:(id,car)=>axiosService.put(`${urls.cars}/${id}`,car),
    deleteCarById:(id)=>axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}