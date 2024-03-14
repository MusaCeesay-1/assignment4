import React from 'react';
import TextComponent from './TextComponent';

const Song = ({title, artist, year, onSelection, index}) => {

    return (
        <div data-testid="song" className="song" onDoubleClick={() => onSelection(index)}>
            {typeof title === 'string' && <TextComponent label="Title" value={title}/>}
            {typeof artist === 'string' && <TextComponent label="Artist" value={artist}/>}
            {typeof year === 'number' && <TextComponent label="Year" value={year}/>}
        </div>
    );
};

export default Song;
