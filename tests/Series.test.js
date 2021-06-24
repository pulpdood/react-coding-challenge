import React from 'react';
import 'regenerator-runtime/runtime';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, act } from '@testing-library/react';

import Series from '../src/screens/Series';

const mockData = [
    {
        title: 'Wolf Creek',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        programType: 'series',
        images: {
            'Poster Art': {
                url: 'https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg',
                width: 1000,
                height: 1500,
            },
        },
        releaseYear: 2016,
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

describe('<Series />', () => {
    it('should render Series', async () => {
        await act(async () =>
            render(
                <Router>
                    <Series />
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
                    <Series />
                </Router>
            )
        );

        expect(await screen.findAllByText(/Oops, something went wrong.../i)).toBeTruthy();
    });
});
