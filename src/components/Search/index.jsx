import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiWeather } from '../../services/getApiWeather';
import { ButtonSearch, Container, InputSearch } from './styles';

import { setWeather } from '../../redux/actions/climate';

function Search() {
  const dispatch = useDispatch();
  const { climate } = useSelector((state) => state.climate);
  const [local, setLocal] = useState('');

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      if (local) {
        const fetchLocal = await getApiWeather(local);
        dispatch(setWeather(fetchLocal));
        console.log(local)
        console.log(climate)
      }
    }
  }

  const handleClick = async () => {
    if (local) {
      const fetchLocal = await getApiWeather(local);
      dispatch(setWeather(fetchLocal));
      console.log(local);
      console.log(climate)
    }
  }

  return (
    <Container>
      <InputSearch
        placeholder='Search your place'
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <ButtonSearch onClick={handleClick}>Search</ButtonSearch>
    </Container>
  );
}

export default Search;
