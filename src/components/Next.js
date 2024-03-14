import React from "react";
import SkipNextIcon from "@mui/icons-material/SkipNext";


const Next = ({handleNext}) => {
    return (  <SkipNextIcon data-testid="next" onClick={() => handleNext()}/>)
}

export default Next