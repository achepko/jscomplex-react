import {FC, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carActions} from "../redux";

interface IProps {

}

const CarForm: FC<IProps> = () => {
    const {reset, register, handleSubmit,setValue} = useForm<ICar>();
    const dispatch = useAppDispatch();
    const {carForUpdate} = useAppSelector(state => state.carReducer);

    useEffect(() => {
        if (carForUpdate){
            setValue('brand',carForUpdate.brand)
            setValue('price',carForUpdate.price)
            setValue('year',carForUpdate.year)
        }
            }, [carForUpdate])

    const save: SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.create({car}))
        reset()
    };
    const update:SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.update({car,id:carForUpdate.id}));
        dispatch(carActions.setCarForUpdate(null))
        reset()
    };
    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text" placeholder={'brand'} {...register('brand')} />
            <input type="text" placeholder={'price'} {...register('price')} />
            <input type="text" placeholder={'year'} {...register('year')} />
            <button>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};