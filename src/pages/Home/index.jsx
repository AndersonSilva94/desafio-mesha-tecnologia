import React from 'react';
import InfoText from '../../components/InfoText';
import Playlist from '../../components/Playlist';
import Search from '../../components/Search';
import { Container, LinkSaved } from './styles';

function Home() {
  return (
    <Container>
      <Search />
      <InfoText />
      <Playlist />
      <LinkSaved to="/playlists">See saved playlists</LinkSaved>
    </Container>
  );
}

export default Home;