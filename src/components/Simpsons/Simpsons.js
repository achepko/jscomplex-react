import Simpson from "../Simpson/Simpson";

function Simpsons({xxx:simpsons}) {
    return(
        <div>
            {
                simpsons.map(value => (<Simpson item={value}/>))
            }
        </div>
    );
}
export default Simpsons;