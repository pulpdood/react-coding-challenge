import React, { useEffect } from 'react';

import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import Tile from '../../components/Tile';

import '../../styles.css';
import { getFeed } from '../../api';

function Series(props) {
    const [shows, setShows] = React.useState([]);

    useEffect(() => {
        setShows(getFeed());
    }, []);

    return (
        <>
            <Header />
            <SubHeader programType="Series" />

            <div className="content tiles">
                {shows
                    .filter((show) => show.programType === 'series')
                    .map((show) => (
                        <Tile image={show.images['Poster Art'].url} title={show.title} />
                    ))}
            </div>
        </>
    );
}

export default Series;
