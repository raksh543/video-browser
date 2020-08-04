import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'

const KEY ='AIzaSyBh4aXInbCnNlGW01Xz4zlo4xPMjdu1Z2g';

class App extends React.Component{
    onTermSubmit = (term) => {
        youtube.get('/search',{
        params: {
            part :'snippet',
            type: 'video',
            maxResults: 5,
            key: KEY,
            q: term
        }});
    };

    render(){
        return(
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
            </div>
        );
    }
};

export default App;
