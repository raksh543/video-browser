import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY ='AIzaSyBh4aXInbCnNlGW01Xz4zlo4xPMjdu1Z2g';

const App =()=>{
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(()=>{
        onTermSubmit('buildings');
    }, []);

    const onTermSubmit = async term => {
        const response = await youtube.get('/search',{
        params: {
            part :'snippet',
            type: 'video',
            maxResults: 5,
            key: KEY,
            q: term
        }});
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }

    const onVideoSelect = (video) => {
       selectedVideo(video);
    }

    return(
        <div className="ui container">
            <SearchBar onTermSubmit={onTermSubmit} />
            {/* I have {this.state.videos.length} Videos. */}
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={onVideoSelect} videos={videos}/>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default App;
