import axios from "axios";
import {baseURLCars, baseURLJson} from "../constants";

const axiosJsonService = axios.create({baseURL:baseURLJson});
const axiosCarService = axios.create({baseURL:baseURLCars});

export {
    axiosJsonService,
    axiosCarService
}