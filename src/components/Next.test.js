import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import Next from "./Next";

describe('Next', () => {

    it('should execute handleNext on click', () => {
        const mockHandleNext = jest.fn();
        render(<Next handleNext={mockHandleNext}/>)
        fireEvent.click(screen.getByTestId("next"))
        expect(mockHandleNext).toHaveBeenCalled()
    });


});