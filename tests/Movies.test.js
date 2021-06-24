import React from 'react';
import 'regenerator-runtime/runtime';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, act } from '@testing-library/react';

import Movies from '../src/screens/Movies';
const mockData = [
    {
        title: 'U2: Live in Paris',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        programType: 'movie',
        images: {
            'Poster Art': {
                url: 'https://streamcoimg-a.akamaihd.net/000/963/194/963194-PosterArt-9d1f4f28bb94e5e0f06e83d1216a8e30.jpg',
                width: 559,
                height: 828,
            },
        },
        releaseYear: 2015,
    },
];

beforeAll(() => {
    global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(mockData),
        })
    );
});

afterAll(() => {
    global.fetch.mockClear();
    delete global.fetch;
});

describe('<Movies />', () => {
    it('should render Movies', async () => {
        await act(async () =>
            render(
                <Router>
                    <Movies />
                </Router>
            )
        );

        expect(screen.getByText(new RegExp(mockData[0].title))).toBeInTheDocument;
        expect(screen.getByAltText('tileImage').src).toBe(mockData[0].images['Poster Art'].url);
    });

    it('should render error', async () => {
        global.fetch = jest.fn().mockImplementation(() => {
            throw new Error('Not Found');
        });

        await act(async () =>
            render(
                <Router>
                    <Movies />
                </Router>
            )
        );

        expect(await screen.findAllByText(/Oops, something went wrong.../i)).toBeTruthy();
    });
});
