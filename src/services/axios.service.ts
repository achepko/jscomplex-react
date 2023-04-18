import axios from "axios";
import {carsBaseURL, placeBaseURL} from "../constants/urls";

let placeAxiosService = axios.create({baseURL:placeBaseURL});
let carsAxiosService = axios.create({baseURL:carsBaseURL})

export {
    placeAxiosService,
    carsAxiosService
}