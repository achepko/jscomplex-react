import {FC, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../interfaces/car.interface";
import {carService} from "../services/car.service";
import {IUseState} from "../types/useState.type";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/car.validator";
import {object} from "joi";

interface IProps {
    setOnChange: IUseState<boolean>;
    carForUpdate:ICar|null;
    setCarForUpdate:IUseState<ICar|null>

}

const CarForm: FC<IProps> = ({setOnChange,carForUpdate,setCarForUpdate}) => {

    const {register, handleSubmit, reset, formState: {isValid, errors}, setValue} = useForm<ICar>({mode: 'all', resolver:joiResolver(carValidator)});

    useEffect(()=>{
        if (carForUpdate){
            Object.entries(carForUpdate).forEach(([key,value]) =>{
                if (key!=='id'){
                    setValue(key as keyof ICar,value,{shouldValidate:true})
                }
            } )
        }
    },[carForUpdate])


    const save: SubmitHandler<ICar> = async (car) => {
        const {data} = await carService.create(car);
        setOnChange(prev => !prev)
        console.log(data)
        reset()

    };
    const update:SubmitHandler<ICar> = async (car) => {
        const {data} = await carService.update(carForUpdate!.id,car);
        setOnChange(prev=>!prev);
        console.log(data);
        reset()
        setCarForUpdate(null);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate?update:save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button disabled={!isValid}>{carForUpdate?'Update':'Save'}</button>
            </form>
            <div>
                {errors.brand && <div>{errors.brand.message}</div>}
                {errors.price && <div>{errors.price.message}</div>}
                {errors.year && <div>{errors.year.message}</div>}
            </div>
        </div>
    );
};

export default CarForm;