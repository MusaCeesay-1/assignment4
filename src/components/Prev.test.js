import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import Prev from "./Prev";

describe('Prev', () => {

    it('should execute handlePrev on click', () => {
        const mockHandlePrev = jest.fn();
        render(<Prev handlePrevious={mockHandlePrev}/>)
        fireEvent.click(screen.getByTestId("prev"))
        expect(mockHandlePrev).toHaveBeenCalled()
    });


});