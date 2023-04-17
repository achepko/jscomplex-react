import React from 'react';
import {useForm} from "react-hook-form";
import userService from "../../services/user.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/user.validator";

const UserForm = () => {

    const {register,handleSubmit,formState:{errors,isValid},reset} = useForm({mode:'all',resolver:joiResolver(userValidator)});

    const onSubmitUser = async (user)=> {
        const {data} = await userService.createUser(user)
        console.log("New user created:", data);

        const newUser = {
            name: user.name,
            username: user.username,
            email: user.email,
            address: {
                street:user.street,
                suite: user.suite,
                city: user.city,
                zipcode: user.zipcode,
                geo: {
                    lat: user.lat,
                    lng: user.lng,
                },
            },
            phone: user.phone,
            website: user.website,
            company: {
                name: user.companyName,
                catchPhrase: user.catchPhrase,
                bs: user.bs,
            }
        }
        console.log(newUser);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmitUser)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'username'} {...register('username')}/>
            {errors.username && <span>{errors.username.message}</span>}
            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
            <input type="text" placeholder={'street'} {...register('street')}/>
            {errors.street && <span>{errors.street.message}</span>}
            <input type="text" placeholder={'suite'} {...register('suite')}/>
            {errors.suite && <span>{errors.suite.message}</span>}
            <input type="text" placeholder={'city'} {...register('city')}/>
            {errors.city && <span>{errors.city.message}</span>}
            <input type="text" placeholder={'zipcode'} {...register('zipcode')}/>
            {errors.zipcode && <span>{errors.zipcode.message}</span>}
            <input type="text" placeholder={'lat'} {...register('lat')}/>
            {errors.lat && <span>{errors.lat.message}</span>}
            <input type="text" placeholder={'lng'} {...register('lng')}/>
            {errors.lng && <span>{errors.lng.message}</span>}
            <input type="text" placeholder={'phone'} {...register('phone')}/>
            {errors.phone && <span>{errors.phone.message}</span>}
            <input type="text" placeholder={'website'} {...register('website')}/>
            {errors.website && <span>{errors.website.message}</span>}
            <input type="text" placeholder={'companyName'} {...register('companyName')}/>
            {errors.companyName && <span>{errors.companyName.message}</span>}
            <input type="text" placeholder={'catchPhrase'} {...register('catchPhrase')}/>
            {errors.catchPhrase && <span>{errors.catchPhrase.message}</span>}
            <input type="text" placeholder={'bs'} {...register('bs')}/>
            {errors.bs && <span>{errors.bs.message}</span>}
            <button disabled={!isValid}>Add new user</button>
        </form>
    );
};

export default UserForm;




