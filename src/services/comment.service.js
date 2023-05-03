import {axiosPhAPIService} from "./axios.service";
import {urls} from "../constants";


const commentService ={
    getAll:()=> axiosPhAPIService.get(urls.comments),
    create:(comment)=> axiosPhAPIService.post(urls.comments,comment)
}

export {
    commentService
}