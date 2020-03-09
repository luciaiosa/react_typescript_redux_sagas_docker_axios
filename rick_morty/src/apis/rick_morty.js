import axios from 'axios';

const URL = 'https://rickandmortyapi.com/api';

export default axios.create({
    baseURL: URL
});