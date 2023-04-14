import {useEffect, useState} from "react";
import User from "../User/User";


const Users = ({setUserId}) => {
let [users, setUsers] = useState([]);

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(allUsers => setUsers([...allUsers]))
})
    return (
        <div>
            {
                users.map(value => <User key={value.id} value={value} setUserId={setUserId}/>)

            }
        </div>
    );
};

export default Users;