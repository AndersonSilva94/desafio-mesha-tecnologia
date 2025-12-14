import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setPlaylistThunk } from '../../redux/actions/playlist';
import List from '../List';
import { Button, Title } from './styles';

function Playlist() {
  const dispatch = useDispatch()
  const { climate } = useSelector((state) => state.climate);
  const { playlist } = useSelector((state) => state.playlist);
  const { temperature, cod } = climate;

  useEffect(() => {
    if (cod === 200) {
      dispatch(setPlaylistThunk(temperature))
    }
  }, [temperature, cod, dispatch])

  const savePlaylist = () => {
    if (playlist) {
      const { name, date, temperature } = climate;
      const { tracks, genre } = playlist
      const playlists = JSON.parse(localStorage.getItem('playlists') || '[]');
      const id = playlists.length > 0 ? playlists[playlists.length - 1].id + 1 : 1;
      playlists.push({ name, date, temperature, tracks, genre, id });
      localStorage.setItem('playlists', JSON.stringify(playlists));
    }
  }

  const renderPlaylist = () => (
    <>
      <Title>Here's a playlist for you</Title>
      <List/>
      <Button onClick={savePlaylist} >Save</Button>
    </>
  );

  return (
    <>
      {playlist.songs && renderPlaylist()}
    </>
  );
}

export default Playlist;