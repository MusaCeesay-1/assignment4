import ShuffleIcon from "@mui/icons-material/Shuffle";
import React from "react";

const Shuffle = ({handleShuffle}) => {
    return (<ShuffleIcon data-testid="shuffle" onClick={() => handleShuffle()}/>
    )
}

export default Shuffle