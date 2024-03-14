import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import React from "react";
const Prev = ({handlePrevious}) => {
    return (  <SkipPreviousIcon data-testid="prev" onClick={() => handlePrevious()}/>)
}

export default Prev