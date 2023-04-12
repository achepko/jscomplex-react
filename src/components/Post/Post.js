const Post = ({value,lift}) => {
    return (
        <div>
            <p>{value.id} - {value.title}</p>
            <button onClick={()=>{
                lift(value);
            }}>
                DETAILS</button>
        </div>
    );
};

export default Post;