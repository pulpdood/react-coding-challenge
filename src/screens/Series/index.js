import React, { useEffect } from 'react';

import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import Tile from '../../components/Tile';

import '../../styles.css';
import { getSeries } from '../../api';

function Series(props) {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);
    const [shows, setShows] = React.useState([]);

    useEffect(async () => {
        try {
            setShows(await getSeries());
        } catch {
            setIsError(true);
        }

        setIsLoading(false);
    }, []);

    return (
        <>
            <Header />
            <SubHeader programType="Series" />

            {isError && <div className="content">Oops, something went wrong...</div>}
            <div className="content tiles">
                {isLoading && <p>Loading...</p>}
                {!isError && shows.map((show, index) => <Tile image={show.images['Poster Art'].url} title={show.title} key={index} to="/series" />)}
            </div>
        </>
    );
}

export default Series;
