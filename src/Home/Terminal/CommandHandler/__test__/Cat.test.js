import React from 'react'; 
import { render, screen } from '@testing-library/react';

import Cat from '../Cat';

describe('Cat command testing suite', () => {
    test('must include arguements', () => {
        const { container } = render(<Cat arguements={[]} />);
        expect(container.textContent).toBe('');
    })

    test('can only cat an existing file', () => {
        render(<Cat arguements={['im_a_l33t_file']} />);
        screen.getByText(/does not exist/);
    })
})