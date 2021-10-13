import React from 'react';
import { useSelector } from 'react-redux';
import List from '../List';
import { Button, Container, Title } from './styles';

function Playlist() {
  const { climate } = useSelector((state) => state.climate);
  const { playlist } = useSelector((state) => state.playlist);

  const savePlaylist = () => {
    if (playlist) {
      const { name, date, temperature } = climate;
      const { tracks, genre } = playlist
      const playlists = JSON.parse(localStorage.getItem('playlists') || '[]');
      const id = playlists.length + 1;
      playlists.push({ name, date, temperature, tracks, genre, id });
      localStorage.setItem('playlists', JSON.stringify(playlists));
    }
  }

  return (
    <Container>
      <Title>Here's a playlist for you</Title>
      <List/>
      <Button onClick={savePlaylist} >Save</Button>
    </Container>
  );
}

export default Playlist;