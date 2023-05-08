

const baseURLJson = 'https://jsonplaceholder.typicode.com'

const baseURLCars = 'http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars'

const urls ={

    users:'/users',
    posts:'/posts',

    cars:{
        cars,
        byId:(id:number):string=>`${cars}/${id}`
    }
}

export {
    baseURLCars,
    baseURLJson,
    urls
}