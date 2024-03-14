import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'

import Song from "./Song";

describe('Song', () => {
    it('should not render year when string is passed', () => {
        render(<Song year="something else" title="Billie Jean" artist="Michael Jackson" index={0} onSelection={() => {}} />)
        expect(screen.getByTestId("song")).not.toHaveTextContent("Year")
    });

    it('should render year when integer is passed', () => {
        render(<Song year={1993} title="Billie Jean" artist="Michael Jackson" index={0} onSelection={() => {}} />)
        expect(screen.getByTestId("song")).toHaveTextContent("Year:1993")
    });

    it('should not render title when integer is passed', () => {
        render(<Song year={1994} title={1} artist="Michael Jackson" index={0} onSelection={() => {}} />)
        expect(screen.getByTestId("song")).not.toHaveTextContent("Title")
    });

    it('should render title when string is passed', () => {
        render(<Song year={1994} title="Billie Jean"  artist="Michael Jackson" index={0} onSelection={() => {}} />)
        expect(screen.getByTestId("song")).toHaveTextContent("Title:Billie Jean")
    });

    it('should not render artist when integer is passed', () => {
        render(<Song year={1994} title="Billie Jean" artist={1} index={0} onSelection={() => {}} />)
        expect(screen.getByTestId("song")).not.toHaveTextContent("Artist")
    });

    it('should not render artist when artist is null', () => {
        render(<Song year={1994} title="Billie Jean" artist={null} index={0} onSelection={() => {}} />)
        expect(screen.getByTestId("song")).not.toHaveTextContent("Artist")
    });

    it('should render artist when string is passed', () => {
        render(<Song year={1994} title="Billie Jean"  artist="Michael Jackson" index={0} onSelection={() => {}} />)
        expect(screen.getByTestId("song")).toHaveTextContent("Artist:Michael Jackson")
    });

    it('should execute onSelection on double click', () => {
        const mockOnSelection = jest.fn();
        render(<Song year={1994} title="Billie Jean"  artist="Michael Jackson" index={0} onSelection={mockOnSelection} />)
        fireEvent.doubleClick(screen.getByTestId("song"))
        expect(mockOnSelection).toHaveBeenCalled()
    });
});