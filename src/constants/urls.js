const baseURL = 'https://jsonplaceholder.typicode.com';

const posts = '/posts'
const urls = {
    post:{
        getById:(id)=>`${posts}/${id}`
    },
    albums:'/albums',
    comments:'/comments',
    todos:'/todos'
}

export {
    baseURL,
    urls
}