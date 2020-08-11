import { useState, useEffect } from "react";
import youtube from '../apis/youtube';

const KEY ='AIzaSyBh4aXInbCnNlGW01Xz4zlo4xPMjdu1Z2g';

const useVideos = (deafultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        search(deafultSearchTerm);
    }, [deafultSearchTerm]);

    const search = async term => {
        const response = await youtube.get('/search',{
        params: {
            part :'snippet',
            type: 'video',
            maxResults: 5,
            key: KEY,
            q: term
        }});
        setVideos(response.data.items);
    }
    
    return [ videos, search ];
};

export default useVideos;