import React from 'react';
import { useSelector } from 'react-redux';
import { DivText, Text } from './styles';

function InfoText() {
  const { climate } = useSelector((state) => state.climate);
  const { playlist } = useSelector((state) => state.playlist)

  return (
    <>
      <DivText>
        {playlist.tracks
          ? <Text>Current temperature in {climate.name}: {climate.temperature}°C</Text> 
          : <Text>Search a city</Text>
        }  
      </DivText>  
    </>
  );
}

export default InfoText;