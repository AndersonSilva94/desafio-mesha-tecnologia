import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { getApiWeather } from '../../services/getApiWeather';
import { ButtonSearch, Container, InputSearch } from './styles';

import { setWeather } from '../../redux/actions/climate';
import { getDate } from '../../utils/getDate';

function Search() {
  const dispatch = useDispatch();
  const [local, setLocal] = useState('');

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      if (local) {
        const date = getDate();
        const fetchLocal = await getApiWeather(local);
        dispatch(setWeather({ ...fetchLocal, date }));
      }
    }
  }

  const handleClick = async () => {
    if (local) {
      const date = getDate();
      const fetchLocal = await getApiWeather(local);
      dispatch(setWeather({ ...fetchLocal, date }));
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
