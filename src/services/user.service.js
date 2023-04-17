import React from 'react';
import {axiosService2} from "./axios.service";
import {urls_User} from "../configs/urls";
import {urls_Comment} from "../configs/urls";

const userService = {
    createUser:(user)=>axiosService2.post(urls_User.user,user),
    createComment:(comment)=>axiosService2.post(urls_Comment.comment,comment)
}

export default userService;