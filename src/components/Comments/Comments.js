import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {commentService} from "../../services";
import {commentActions} from "../../redux";
import {Comment} from "./Comment";

const Comments = () => {
    const dispatch = useDispatch();
    const {comments} = useSelector(state => state.comments);
    console.log('test');
    useEffect(()=>{
        commentService.getAll().then(value => value.data).then(value => dispatch(commentActions.setAll(value)))
    },[dispatch])
    console.log('test2');
    return (
        <div>
            {comments.map(comment=> <Comment key={comment.id} commment={comment}/>)}
        </div>
    );
};

export {Comments};

