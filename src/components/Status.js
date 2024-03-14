import React from "react";

const Status = ({audioData, currentlyPlayingIndex, isPlaying}) => {
    const isSong = (ad) => 'artist' in ad

    const currentlyPlayingAudio = audioData[currentlyPlayingIndex]

    const currentlyPlayingTitle = () => isSong(currentlyPlayingAudio) ? currentlyPlayingAudio.title : currentlyPlayingAudio.episodeTitle


    return (
        <div>
            <div data-testid="currently-playing">{`Currently ${isPlaying ? 'playing' : 'paused'}`}</div>
            <div  data-testid="currently-playing-title" className="currentlyPlayingTitle">{currentlyPlayingTitle()}</div>
        </div>
    )
};
export default Status