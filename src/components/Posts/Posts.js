import {useEffect, useState} from 'react';
import Post from "../Post/Post";
const Posts = () => {

    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);
    const lift = (obj) => {
        setPost({...obj})
    }


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=>response.json())
            .then(allPosts => {
                setPosts([...allPosts])
            });
    },[]);

    return (
        <div>
            {post&&
                <div>
                    <div>id: {post.id}</div>
                    <div>userId:{post.userId}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </div>
            }
    {
        posts.map(value => <Post value={value} key={value.id} lift={lift}/>)
    }
        </div>
    );
};

export default Posts;