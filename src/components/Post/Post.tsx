import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IPost} from "../../interfaces/post.interface";
import {postService} from "../../services/post.service";

interface IProps {

}
const Post: FC<IProps> = () => {

    const {postId} = useParams();

    const [post,setPost] = useState<IPost>(null);

    useEffect(()=>{
        postService.getById(`${postId}`).then(value => value.data).then(value => setPost(value))
    },[postId])

    return (
        <div>
            {post && (
                <div>
                    <div>id:{post.id}</div>
                    <div>title:{post.title}</div>
                    <div>body:{post.body}</div>
                    <hr/>
                    <hr/>
                </div>
            )}
        </div>
    );
};

export default Post;