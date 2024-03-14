import React from 'react';
import Song from "./Song";
import Podcast from "./Podcast";

const Playlist = ({ audioData, onSelection }) => {

    const isSong = (ad) => 'artist' in ad

    return (
        <div data-testid="playlist" className="playlist">
            <h1>My Playlist</h1>
            {audioData.map((item, index) =>
                isSong(item) ? <Song key={index} index={index} {...item} onSelection={onSelection}/>
                    : <Podcast key={index} index={index}{...item} onSelection={onSelection}/>)}
        </div>
    );
};

export default Playlist;
