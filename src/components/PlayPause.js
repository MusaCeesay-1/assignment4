import React from "react";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const PlayPause = ({isPlaying, setIsPlaying}) => {
    if (isPlaying) {
        return <PauseCircleOutlineIcon data-testid="pause-icon" onClick={() => setIsPlaying(!isPlaying)}/>
    }
    return <PlayCircleOutlineIcon data-testid="play-icon" onClick={() => setIsPlaying(!isPlaying)}/>

}

export default PlayPause