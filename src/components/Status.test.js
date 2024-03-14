import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import Status from "./Status";

describe('Status', () => {
    it('should render playing when isPlaying is true ', () => {
        render(<Status isPlaying={true} currentlyPlayingIndex={0}
                       audioData={[{artist: "Adele", title: "Hello", year: 2012}]}/>)
        expect(screen.getByTestId("currently-playing")).toHaveTextContent("Currently playing")
    });

    it('should render paused when isPlaying is false ', () => {
        render(<Status isPlaying={false} currentlyPlayingIndex={0}
                       audioData={[{artist: "Adele", title: "Hello", year: 2012}]}/>)
        expect(screen.getByTestId("currently-playing")).toHaveTextContent("Currently paused")
    });

    it('should render title when song is passed', () => {
        render(<Status isPlaying={false} currentlyPlayingIndex={0}
                       audioData={[{artist: "Adele", title: "Hello", year: 2012}]}/>)
        expect(screen.getByTestId("currently-playing-title")).toHaveTextContent("Hello")
    });

    it('should render episodeTitle when podcast is passed', () => {
        render(<Status isPlaying={false} currentlyPlayingIndex={0}
                       audioData={[{episode: 5, season: 1, episodeTitle: "Stories of the prophets"}]}/>)
        expect(screen.getByTestId("currently-playing-title")).toHaveTextContent("Stories of the prophets")
    });
});