import {useEffect, useState} from "react";
import UserPost from "../UserPost/UserPost";

const UserPosts = ({userId}) => {
    let [posts , setPosts] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response=>response.json())
            .then(allUserPosts=>setPosts([...allUserPosts]))
    },[])


    return (
        <div>
            {
                posts.map(post=> <UserPost key={post.id} post={post}/>)

            }
        </div>
    );
};

export default UserPosts;