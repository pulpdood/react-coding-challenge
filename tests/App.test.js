import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../src/App';

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


describe('<App />', () => {
    let container;

    beforeEach(() => {
        container = render(<App />).container;
    });

    it('should render App', () => {
        expect(screen.getAllByText(/DEMO STREAMING/i)[0]).toBeInTheDocument();
    });

    it('should open series', async () => {
        const seriesLink = screen.getByText(/Popular Series/i);

        await act(async () => await userEvent.click(seriesLink));

        expect(screen.getAllByText(/^Series$/i)[0]).toBeInTheDocument();
        expect(screen.getByText(new RegExp(mockData[0].title))).toBeInTheDocument();
        expect(screen.getByAltText('tileImage').src).toBe(mockData[0].images['Poster Art'].url);
    });
});
