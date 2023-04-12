const FullPost = ({item}) => {
    return (
        <div>
            {
                Object.keys(item).map(property => (
                    <div key={property}>
                        {`${property}: ${item[property]}`}
                    </div>
                ))
            }
        </div>
    );
};

export default FullPost;