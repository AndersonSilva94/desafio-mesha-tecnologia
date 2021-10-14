import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SaveList from '../../components/SaveList';
import { setWeather } from '../../redux/actions/climate';
import { setPlaylist } from '../../redux/actions/playlist';

function Playlists() {
  const dispatch = useDispatch();

  const clearWeatherState = async () => {
    await dispatch(setWeather({}));
    await dispatch(setPlaylist({}));
  }

  return (
    <div>
      <SaveList />
      <Link to="/" onClick={ clearWeatherState }>Go to home</Link>
    </div>
  );
}

export default Playlists;