const Simpson = ({item}) => {
    return (
        <div>
            <div><h3>{item.name} {item.surname} - {item.age} y.o.</h3></div>
            <div>
                <img src={item.photo} alt=""/>
                {item.info}
            </div>
            <hr/>

        </div>
    );
};

export default Simpson;