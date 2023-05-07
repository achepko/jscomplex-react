import {FC} from "react";
import {CarForm, Cars} from "../components";
import {useAppSelector} from "../hooks";

interface IProps {

}

const CarPage: FC<IProps> = () => {
    const {errors} = useAppSelector(state => state.carReducer);

    return (
        <div>
            <CarForm/>
            <hr/>
            <h4>
                {errors?.detail&&<h4>{errors.detail}</h4>}
                {errors?.brand&&<h4>{errors.brand}</h4>}
                {errors?.price&&<h4>{errors.price}</h4>}
                {errors?.year&&<h4>{errors.year}</h4>}
            </h4>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarPage};