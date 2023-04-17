import Joi from "joi";

const userValidator = Joi.object({
    name:Joi.string().required(),
    username:Joi.string().required(),
    email:Joi.string().required(),
    street:Joi.string().required(),
    suite:Joi.string().required(),
    city:Joi.string().required(),
    zipcode: Joi.string().required(),
    lat: Joi.string().required(),
    lng: Joi.string().required(),
    phone: Joi.string().required(),
    website: Joi.string().required(),
    companyName:Joi.string().required(),
    catchPhrase: Joi.string().required(),
    bs: Joi.string().required()
})

export {
    userValidator
}