import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import Playlist from "./Playlist";

describe('Playlist', () => {

    it('should render song when song is passed', () => {
        render(<Playlist audioData={[{artist: "Adele", title: "Hello", year: 2012}]} onSelection={() => {}}/>)
        expect(screen.getByTestId("playlist")).toHaveTextContent("Title:Hello")
    });

    it('should render podcast when podcast is passed', () => {
        render(<Playlist audioData={[{episode: 5, season: 1, episodeTitle: "Stories of the prophets"}]} onSelection={() => {}}/>)
        expect(screen.getByTestId("playlist")).toHaveTextContent("Episode Title:Stories of the prophets")
    });

});