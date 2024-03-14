import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'


import Podcast from "./Podcast";

describe('Podcast', () => {
    it('should show episode when season is missing', () => {
        render(
            <Podcast
                season={undefined}
                episode="1"
                episodeTitle="this is an episode"
                onSelection={() => {}}
                index={0}/>
        )
        const podcastTitle = screen.getByTestId("podcast-title");
        expect(podcastTitle).toHaveTextContent("Episode 1")
    });

    it('should show season and episode when season exists', () => {
        render(
            <Podcast
                season="2"
                episode="1"
                episodeTitle="this is an episode"
                onSelection={() => {}}
                index={0}/>
        )
        const podcastTitle = screen.getByTestId("podcast-title");
        expect(podcastTitle).toHaveTextContent("Season 2 Episode 1")
    });

    it('on double click should execute', () => {
        const mockOnSelection = jest.fn();

        render(
            <Podcast
                season="2"
                episode="1"
                episodeTitle="this is an episode"
                onSelection={mockOnSelection}
                index={0}/>
        )

        fireEvent.doubleClick(screen.getByTestId("podcast"))
        expect(mockOnSelection).toHaveBeenCalled()
    });

});