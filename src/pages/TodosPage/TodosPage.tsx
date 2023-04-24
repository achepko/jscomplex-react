import {FC} from "react";
import Todos from "../../components/Todos/Todos";

interface IProps {

}

const TodosPage: FC<IProps> = () => {
    return (
        <div>
            <Todos/>
        </div>
    );
};

export default TodosPage;