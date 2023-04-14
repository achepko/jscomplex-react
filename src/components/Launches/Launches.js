import {useEffect, useState} from "react";
import Launch from "../Launch/Launch";

const Launches = () => {

    let [launches, setLaunches] = useState([]);

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(allLaunches => {
                setLaunches([...allLaunches].filter(item=>item.launch_year !== '2020'));
            })
    }, [])

    return (
        <div>
            {
                launches.map((bar,index)=> <Launch  foo={bar} key={index}/>)
            }
        </div>
    );
};

export default Launches;

