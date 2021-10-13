import React from 'react';
import { Link } from 'react-router-dom';
import InfoText from '../../components/InfoText';
import Playlist from '../../components/Playlist';
import Search from '../../components/Search';

function Home() {
  return (
    <div>
      <Search />
      <InfoText />
      <Playlist />
      <Link to="/playlists" >See saved playlists</Link>
    </div>
  );
}

export default Home;