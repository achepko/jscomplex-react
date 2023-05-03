import axios from "axios";
import {carAPI, jsonPhAPI} from "../constants";

const axiosPhAPIService = axios.create({baseURL:jsonPhAPI})
const axiosCarAPIService = axios.create({baseURL:carAPI})



export{
    axiosPhAPIService,
    axiosCarAPIService
}