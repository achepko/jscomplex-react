
const User = ({value,setUserId}) => {
    return (
    <div>
    <div>id:{value.id}</div>
    <div>name:{value.name}</div>
    <div>username:{value.username}</div>
    <button onClick={()=> setUserId(value.id)
    }>Get Posts</button>
    <hr/>
</div>
    );
};

export default User;