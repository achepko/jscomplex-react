import {IRes} from "../types/axios.Res.type";
import {IComment} from "../interfaces/comment.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";
import exp from "constants";


const commentService ={
    getAll:():IRes<IComment[]>=>axiosService.get(urls.comments)
}

export {
    commentService
}