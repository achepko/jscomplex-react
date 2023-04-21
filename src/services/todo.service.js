import {urls} from "../constants/urls";
import {axiosService} from "./axios.service";

const todoService = {
    getAll:()=>axiosService.get(urls.todos)
}

export {todoService}