import {axiosJsonService} from "./axios.service";
import {urls} from "../constants";
import {IRes} from "../types";
import {IUser} from "../interfaces";


const userService ={
    getAllUsers:():IRes<IUser[]>=>axiosJsonService.get(urls.users),
    createUser:(user:IUser):IRes<IUser>=>axiosJsonService.post(urls.users,user),
}

export {
    userService
}