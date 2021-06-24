import React, { useEffect } from 'react';

import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import Tile from '../../components/Tile';
import Footer from '../../components/Footer';

import '../../styles.css';
import { getMovies } from '../../api';

function Movies() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);
    const [shows, setShows] = React.useState([]);

    useEffect(async () => {
        try {
            setShows(await getMovies());
        } catch {
            setIsError(true);
        }

        setIsLoading(false);
    }, []);

    return (
        <>
            <Header />
            <SubHeader programType="Movies" />
            {isError && <p className="content error">Oops, something went wrong...</p>}
            <div className="content tiles">
                {isLoading && <p>Loading...</p>}
                {!isError && shows.map((show, index) => <Tile image={show.images['Poster Art'].url} title={show.title} key={index} to="/movies" />)}
            </div>
            <Footer />
        </>
    );
}

export default Movies;
