const jsonPhAPI = 'https://jsonplaceholder.typicode.com'
const carAPI = 'http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars'
const urls = {
    users:'/users',
    comments:'/comments',
    cars: {
        cars,
        byId:(id)=>`${cars}/${id}`
    }
}

export {
    jsonPhAPI,
    carAPI,
    urls
}