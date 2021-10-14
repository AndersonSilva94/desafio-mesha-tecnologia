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
          ? <Text>{climate.temperature}°C</Text> 
          : <Text>Digite uma cidade</Text>
        }  
      </DivText>  
    </>
  );
}

export default InfoText;