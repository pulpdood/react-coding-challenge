import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Tile from '../src/components/Tile';

describe('<Tile />', () => {
    let props;

    beforeAll(() => {
        props = {
            to: '/test',
            title: 'Title',
            image: 'http://example.com/image',
            overlayText: 'Overlay Text',
        };
        render(
            <Router>
                <Tile to={props.to} title={props.title} image={props.image} overlayText={props.overlayText} />
            </Router>
        )
    });

    it('should render tile', () => {
        expect(screen.getByText(/Title/i)).toBeInTheDocument();
        expect(screen.getByAltText('tileImage').src).toBe(props.image);
        expect(screen.getByText(/Overlay Text/i)).toBeInTheDocument();
        expect(screen.getByText(new RegExp(props.title)).closest('a').href).toMatch(new RegExp(props.to));
    });
});
