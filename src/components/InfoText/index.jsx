import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DivText, Text } from './styles';

function InfoText() {
  const [temp, setTemp] = useState('');
  const { climate } = useSelector((state) => state.climate);

  useEffect(() => {
    if(climate.temperature){
      setTemp(climate.temperature)
    }
  }, [climate])

  return (
    <>
      <DivText>
        {temp 
          ? <Text>{temp}°C</Text> 
          : <Text>Digite uma cidade</Text>
        }  
      </DivText>  
    </>
  );
}

export default InfoText;