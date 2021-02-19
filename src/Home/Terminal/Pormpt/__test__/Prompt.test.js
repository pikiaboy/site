import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent, {specialChars} from '@testing-library/user-event';
import Prompt from '../Prompt';

describe('Prompt testing suite', () => {
    let onCommandMock;

    beforeEach(() => {
        onCommandMock = jest.fn();
        render(
            <Prompt onCommand={onCommandMock} />
        );
    })

    test(`should call onCommand on 'enter' keypress`, () => {
        const input = screen.getByRole('textbox');
        
        userEvent.type(input, 'aCoolCommand');
        expect(onCommandMock).not.toHaveBeenCalled();
        
        userEvent.type(input, `${specialChars.enter}`);
        expect(onCommandMock).toHaveBeenCalled(); 
    })

    test(`should disable the input after 'enter' keypress`, () => {
        const input = screen.getByRole('textbox');
        userEvent.type(input, specialChars.enter);
        expect(input).toBeDisabled();
    })

})