import {axiosPhAPIService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll: () => axiosPhAPIService.get(urls.users),
    create: (user) => axiosPhAPIService.post(urls.users, user)
}
export {
    userService
}
