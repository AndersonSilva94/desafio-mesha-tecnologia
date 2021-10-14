import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { ButtonSearch, Container, InputSearch } from './styles';

import { setWeatherThunk } from '../../redux/actions/climate';

function Search() {
  const dispatch = useDispatch();
  const [local, setLocal] = useState('');

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      if (local) {
        await dispatch(setWeatherThunk(local));
        setLocal('');
      }
    }
  }

  const handleClick = async () => {
    if (local) {
      await dispatch(setWeatherThunk(local));
      setLocal('');
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
