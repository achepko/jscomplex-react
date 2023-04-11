import Simpson from "../simpson/Simpson";

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