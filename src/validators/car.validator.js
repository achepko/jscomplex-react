import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().
    regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/)
    .required()
    .messages({'string.pattern.base': 'Brand name min 1 max 20',
    'string.required':'This field is required'}),
    price:Joi.number().min(0).max(1000000).required(),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
})

export {
    carValidator
}