import React, { useEffect } from 'react';

import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import Tile from '../../components/Tile';

import '../../styles.css';
import { getSeries } from '../../api';

function Series(props) {
    const [isLoading, setIsLoading] = React.useState(true);
    const [shows, setShows] = React.useState([]);

    useEffect(async () => {
        setShows(await getSeries());

        setIsLoading(false);
    }, []);

    return (
        <>
            <Header />
            <SubHeader programType="Series" />

            <div className="content tiles">
                {isLoading && <p>Loading...</p>}
                {shows.map((show) => (
                    <Tile image={show.images['Poster Art'].url} title={show.title} />
                ))}
            </div>
        </>
    );
}

export default Series;
