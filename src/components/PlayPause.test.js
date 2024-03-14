import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import PlayPause from "./PlayPause";

describe('PlayPause', () => {

    it('when isPlaying is true should render pause icon', () => {
        render(<PlayPause isPlaying={true} setIsPlaying={() =>{}}/>)
        expect(screen.getByTestId("pause-icon")).toBeInTheDocument()
    });

    it('when isPlaying is false should render play icon', () => {
        render(<PlayPause isPlaying={false} setIsPlaying={() =>{}}/>)
        expect(screen.getByTestId("play-icon")).toBeInTheDocument()
    });

});