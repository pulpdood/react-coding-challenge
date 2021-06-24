import React from 'react';

import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer';

import Tile from '../../components/Tile';

function Home() {
    return (
        <>
            <Header />
            <SubHeader programType="Popular Titles" />
            <div className="content tiles">
                <Tile overlayText="SERIES" title="Popular Series" to="/series" />
                <Tile overlayText="MOVIES" title="Popular Movies" to="/movies" />
            </div>
            <Footer />
        </>
    );
}

export default Home;
