import React from 'react';

import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';

function Movies(props) {
    const [shows, setShows] = React.useState([]);

    return (
        <>
            <Header />
            <SubHeader programType="Movies" />
            <h1>{shows}</h1>
        </>
    );
}

export default Movies;
