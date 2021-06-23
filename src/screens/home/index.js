import React from 'react';

import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';

import Tile from '../../components/Tile';

function Home(props) {
    return (
        <>
            <Header />
            <SubHeader programType="Popular Titles" />
            <div className="content tiles">
                <Tile overlayText="SERIES" title="Popular Series" to="/series" />
                <Tile overlayText="MOVIES" title="Popular Movies" to="/movies" />
            </div>
        </>
    );
}

export default Home;
