
const Character = ({element}) => {
    return (
        <div>
            <div><h2>id{element.id}-{element.name} ({element.status})</h2></div>
            <div>{element.species} {element.gender}</div>
            <img src={element.image} alt=""/>

        </div>
    );
};

export default Character;