const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api';

export default axios.create({
    baseURL: URL
});