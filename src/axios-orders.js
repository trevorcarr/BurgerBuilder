import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-e4529.firebaseio.com/'
});

export default instance; 