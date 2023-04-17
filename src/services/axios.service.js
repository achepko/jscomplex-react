import axios from "axios";
import {baseURL} from "../configs/urls";
import {baseURL2} from "../configs/urls";

let axiosService = axios.create({baseURL});
let axiosService2 = axios.create({baseURL:baseURL2})

export {
    axiosService,
    axiosService2
}