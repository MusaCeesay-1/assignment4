import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import Shuffle from "./Shuffle";

describe('Shuffle', () => {

    it('should execute handleShuffle on click', () => {
        const mockHandleShuffle = jest.fn();
        render(<Shuffle handleShuffle={mockHandleShuffle}/>)
        fireEvent.click(screen.getByTestId("shuffle"))
        expect(mockHandleShuffle).toHaveBeenCalled()
    });


});