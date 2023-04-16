import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {joiResolver} from '@hookform/resolvers/joi'
import {carValidator} from "../../validators/car.validator";

const CarForm = ({setAllCars,carForUpdate,carForDelete}) => {
    let {register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm({mode:'all',resolver:joiResolver(carValidator)});

    useEffect(()=>{
        if (carForUpdate){
            setValue('brand',carForUpdate.brand,{shouldValidate:true})
            setValue('price',carForUpdate.price,{shouldValidate:true})
            setValue('year',carForUpdate.year,{shouldValidate:true})
        }
    },[carForUpdate])

    useEffect(()=>{
        if (carForDelete){
            setValue('brand',carForDelete.brand,{shouldValidate:true})
            setValue('price',carForDelete.price,{shouldValidate:true})
            setValue('year',carForDelete.year,{shouldValidate:true})
        }
    },[carForDelete])

    const save = async (car) => {
        const {data} = await carService.create(car);
        setAllCars(prev=>!prev);
        reset()
    }
    const update = async (id,car) => {
    console.log(car);
    console.log(id);
        const {data} =await carService.updateById(id,car)

        setAllCars(prev=>!prev);
    }
    const deleteCar = async (id) => {
        console.log(id)
      const {data} = await carService.deleteById(id);
        setAllCars(prev=>!prev);

    }
    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price&&<span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year&&<span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate?'Update':'Save'}</button>
            <button disabled={!isValid} onClick={deleteCar}>Delete</button>
        </form>
    );
};

export default CarForm;

// <form onSubmit={handleSubmit(carForUpdate?update:save)}>
//     <input type="text"
//            placeholder={'brand'} {...register('brand', {
//         pattern: {
//             value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
//             message: 'Brand name min 1 max 20'
//         },
//         required:{value:true,message:'required'}
//     })}/> {errors.brand && <span>{errors.brand.message}</span>}
//     <input type="text" placeholder={'price'} {...register('price',{
//         valueAsNumber: true,
//         min: {value:0,message:'Min value 0'},
//         max: {value:1000000, message:'Max value 1000000'},
//         required:{value:true,message:'required'}
//     })}/>
//     {errors.price&&<span>{errors.price.message}</span>}
//     <input type="text" placeholder={'year'} {...register('year',{
//         valueAsNumber:true,
//         min:{value:1990,message:'Min year 1990'},
//         max:{value:new Date().getFullYear(),message:'Max year - current'},
//         required:{value:true,message:'required'}
//     })}/>
//     {errors.year&&<span>{errors.year.message}</span>}
//     <button disabled={!isValid}>{carForUpdate?'Update':'Save'}</button>
// </form>