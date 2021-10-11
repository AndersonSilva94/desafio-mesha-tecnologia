import React from 'react';
import { ButtonSearch, Container, InputSearch } from './styles';

function Search(props) {
  return (
    <Container>
      <InputSearch />
      <ButtonSearch>Search</ButtonSearch>
    </Container>
  );
}

export default Search;
