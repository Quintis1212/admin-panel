import axios from 'axios';

const instance = axios.create({
    baseURL:"https://train-39df7.firebaseio.com"
})

export default instance;