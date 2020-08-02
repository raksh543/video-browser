import axios from 'axios';

const KEY ='AIzaSyBh4aXInbCnNlGW01Xz4zlo4xPMjdu1Z2g';

export default axios.create({
    baseURL: ' https://www.googleapis.com/youtube/v3',
    params: {
        part :'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});