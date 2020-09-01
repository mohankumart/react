import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Z9nxmSoDH8TSx1NKh7Pj066ie3gqrquJOaV3JCswctQ',
    },
});
