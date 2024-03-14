import React, {useCallback, useEffect, useRef, useState} from 'react';

import Playlist from "./components/Playlist";
import './style.css';
import axios from "axios";
import Prev from "./components/Prev";
import Status from "./components/Status";
import PlayPause from "./components/PlayPause";
import Next from "./components/Next";
import Shuffle from "./components/Shuffle";

const App = () => {

    const [audioData, setAudioData] = useState([]);
    const [currentlyPlayingIndex, setCurrentlyPlayingIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const ref = useRef(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3002/audio');
                setAudioData(response.data);

            } catch (error) {
                console.error('Error fetching audio data:', error);
            }
        };

        fetchData();
    }, []);

    const handlePrevious = () => {
        setIsPlaying(true)
        if (currentlyPlayingIndex === 0) {
            setCurrentlyPlayingIndex(audioData.length - 1)
        } else {
            setCurrentlyPlayingIndex(currentlyPlayingIndex - 1)
        }
    }
    const handleNext = () => {
        setIsPlaying(true)
        if (currentlyPlayingIndex === audioData.length - 1) {
            setCurrentlyPlayingIndex(0)
        } else {
            setCurrentlyPlayingIndex(currentlyPlayingIndex + 1)
        }
    }
    const handleShuffle = useCallback(() => {
        const shuffled = audioData.sort(() => Math.random() - 0.5);
        setAudioData([...shuffled])
    }, [audioData])

    const onSelection = (index) => {
        setCurrentlyPlayingIndex(index)
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className="app">
            <div className="tiles-background">
                {currentlyPlayingIndex !== null &&
                    <div ref={ref} className="status">
                        <Status audioData={audioData} currentlyPlayingIndex={currentlyPlayingIndex}
                                isPlaying={isPlaying}/>
                        <div className="icons">
                            <Prev handlePrevious={handlePrevious}/>
                            <PlayPause isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
                            <Next handleNext={handleNext}/>
                            <Shuffle handleShuffle={handleShuffle}/>
                        </div>
                    </div>
                }
                <Playlist audioData={audioData} onSelection={onSelection}/>
            </div>
        </div>
    );
};

export default App;
