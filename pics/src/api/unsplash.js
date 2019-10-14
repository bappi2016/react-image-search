import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID b1235843a7f1dc4c42280df62abef5b5c1b1a05dedae82fbef8f1fa689f8bed6' 
    }
});