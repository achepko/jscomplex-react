import {FC, useEffect, useState} from "react";
import {commentService} from "../../services/comment.service";
import {IComment} from "../../interfaces/comment.interface";
import Comment from "../Comment/Comment";

const Comments: FC = () => {

    const [comments,setComments] = useState<IComment[]>([]);

    useEffect(()=>{
        commentService.getAll().then(value => value.data).then(value => setComments(value));
    },[])

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment} />)
            }
        </div>
    );
};

export default Comments;