import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY ='AIzaSyBh4aXInbCnNlGW01Xz4zlo4xPMjdu1Z2g';

class App extends React.Component{
    state = {videos : [], selectedVideo: null};

    onTermSubmit = async term => {
        const response = await youtube.get('/search',{
        params: {
            part :'snippet',
            type: 'video',
            maxResults: 5,
            key: KEY,
            q: term
        }});
        console.log(response);
        this.setState({videos : response.data.items})
    };

    onVideoSelect = (video) => {
        // console.log('From the app', video)
        this.setState({selectedVideo: video});
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                {/* I have {this.state.videos.length} Videos. */}
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        );
    }
};

export default App;
