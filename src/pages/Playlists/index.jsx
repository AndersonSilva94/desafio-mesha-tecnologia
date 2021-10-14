import React from 'react';
import { useDispatch } from 'react-redux';
import SaveList from '../../components/SaveList';
import { setWeather } from '../../redux/actions/climate';
import { setPlaylist } from '../../redux/actions/playlist';
import { Container, LinkBack, Text } from './styles';

function Playlists() {
  const dispatch = useDispatch();

  const clearWeatherState = async () => {
    await dispatch(setWeather({}));
    await dispatch(setPlaylist({}));
  }

  return (
    <Container>
      <Text>Saved Playlists</Text>
      <SaveList />
      <LinkBack to="/" onClick={ clearWeatherState }>Go to home</LinkBack>
    </Container>
  );
}

export default Playlists;