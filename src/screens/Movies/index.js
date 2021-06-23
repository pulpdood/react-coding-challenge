import React, { useEffect } from 'react';

import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import Tile from '../../components/Tile';

import '../../styles.css';
import { getMovies } from '../../api';

function Movies(props) {
    const [shows, setShows] = React.useState([]);

    useEffect(async () => {
        setShows(await getMovies());
    }, []);

    return (
        <>
            <Header />
            <SubHeader programType="Movies" />
            <div className="content tiles">
                {shows.map((show, index) => (
                    <Tile image={show.images['Poster Art'].url} title={show.title} key={index} to="/movies" />
                ))}
            </div>
        </>
    );
}

export default Movies;
