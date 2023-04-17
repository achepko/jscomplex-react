import React from 'react';
import {useForm} from "react-hook-form";
import userService from "../../services/user.service";

const UserComment = () => {

    const {register,handleSubmit,reset} = useForm();

    const onSubmitComment = async (comment)=>{
        const {data} = await userService.createComment(comment);
        console.log("New comment created:", data);
        reset()
    }


    return (
        <form onSubmit={handleSubmit(onSubmitComment)}>
            <input type="text" placeholder={'name'} {...register('name', { required: true})} />
            <input type="text" placeholder={'email'} {...register('email', {required: true})}/>
            <input type="text" placeholder={'body'} {...register('body', {required: true})}/>
            <button>Add new comment</button>
        </form>
    );
};

export default UserComment;