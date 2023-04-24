import {FC} from "react";
import {IComment} from "../../interfaces/comment.interface";
import {useNavigate} from "react-router-dom";

interface IProps {
comment:IComment
}

const Comment: FC<IProps> = ({comment}) => {

    const navigate = useNavigate();

    const {postId,id,name,email,body} = comment;

    return (
        <div>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <button onClick={()=>navigate(`${postId}`,{state:{postId}})}>Post</button>
            <hr/>

        </div>
    );
};

export default Comment;