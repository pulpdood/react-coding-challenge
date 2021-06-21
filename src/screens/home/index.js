import React from 'react';

import Header from '../../components/header';

function Home(props) {
  const [shows, setShows] = React.useState([]);
  return (
    <>
      <Header />
      <h1>{shows}</h1>
    </>
  );
}

export default Home;
