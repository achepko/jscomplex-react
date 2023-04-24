import {IRes} from "../types/axios.Res.type";
import {IPost} from "../interfaces/post.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";


const postService = {
    getById:(id:string):IRes<IPost>=>axiosService.get(urls.posts.getById(id))
}

export {
    postService
}