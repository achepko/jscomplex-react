const Launch = ({foo}) => {
    return (
        <div>
            <div>flight_number:{foo.flight_number}</div>
            <div>mission_name:{foo.mission_name}</div>
            <div>launch_year:{foo.launch_year}</div>
            <div>mission_patch_small:{foo.links.mission_patch_small}</div>
            <hr/>
        </div>
    );
};

export default Launch;