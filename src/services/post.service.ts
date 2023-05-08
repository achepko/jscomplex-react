import {axiosJsonService} from "./axios.service";
import {urls} from "../constants";
import {IRes} from "../types";
import {IPost} from "../interfaces";


const postService ={
    getAllPosts:():IRes<IPost[]>=>axiosJsonService.get(urls.posts),
    createPost:(post:IPost):IRes<IPost>=>axiosJsonService.post(urls.posts,post)
}

export {
    postService
}