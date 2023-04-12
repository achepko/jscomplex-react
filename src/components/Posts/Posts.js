import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
const Posts = ({lift}) => {

    let [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=>response.json())
            .then(allPosts => {
                setPosts([...allPosts])
            });
    },[]);

    return (
        <div>

            {
                posts.map(value => <Post lift={lift} value={value} key={value.id}/>)

            }

        </div>
    );
};

export default Posts;