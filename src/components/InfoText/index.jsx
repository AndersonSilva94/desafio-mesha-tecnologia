import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import { DivText, Text } from './styles';

function InfoText() {
  const { climate, loadingWeather } = useSelector((state) => state.climate);
  const { playlist, loadingPlaylist } = useSelector((state) => state.playlist)

  return (
    <>
      {loadingWeather || loadingPlaylist ? <Loading /> : (
        <DivText>
          {playlist.songs
            ? <Text>Current temperature in {climate.name}: {climate.temperature}°C</Text> 
            : <Text>Search a city</Text>
          }  
        </DivText>  
      )}
    </>
  );
}

export default InfoText;