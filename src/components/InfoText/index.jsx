import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DivText, Text } from './styles';

function InfoText() {
  const [temperature, setTemperature] = useState('');
  const { climate } = useSelector((state) => state.climate);

  useEffect(() => {
    if(climate.main){
      setTemperature(climate.main.temp)
    }
  }, [climate])

  return (
    <>
      <DivText>
        {temperature 
          ? <Text>{Math.round(temperature - 272.15)}°C</Text> 
          : <Text>Digite uma cidade</Text>
        }  
      </DivText>  
    </>
  );
}

export default InfoText;