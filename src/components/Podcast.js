import React from 'react';
import TextComponent from './TextComponent';

const Podcast = (props) => {
    const {season, episode, episodeTitle, onSelection, index} = props
    const shouldDisplaySeason = season !== undefined  && `Season ${season} Episode ${episode}`
    const shouldDisplayEpisode = episode !== undefined && `Episode ${episode}`;

    return (
        <div data-testid="podcast" className="podcast" onDoubleClick={() => onSelection(index)}>
            <div className="text-components">
                <div data-testid="podcast-title">{shouldDisplaySeason || shouldDisplayEpisode}</div>
            </div>
            <TextComponent label="Episode Title" value={episodeTitle}/>
        </div>
    );
};

export default Podcast;
