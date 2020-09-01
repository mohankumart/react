import axios from 'axios';

const KEY = 'AIzaSyDUpbuVkCrpbK3hMqQyW4MRccF03f_HcQ4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    },
});
