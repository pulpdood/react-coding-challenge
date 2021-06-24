import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import SubHeader from '../src/components/SubHeader';

describe('<SubHeader />', () => {
    let programType;

    beforeAll(() => {
        programType = 'Series';
        render(<SubHeader programType={programType} />);
    });

    it('should render sub header', () => {
        expect(screen.getByText(new RegExp(programType, 'i'))).toBeInTheDocument();
    });
});
