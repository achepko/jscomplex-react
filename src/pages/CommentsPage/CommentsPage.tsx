import {FC} from "react";
import {Outlet} from "react-router-dom";
import Comments from "../../components/Comments/Comments";

interface IProps {

}

const CommentsPage: FC<IProps> = () => {
    return (
        <div>
            <Outlet/>
            <Comments/>
        </div>
    );
};

export default CommentsPage;