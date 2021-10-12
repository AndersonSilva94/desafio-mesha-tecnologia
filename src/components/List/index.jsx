import React from 'react';
import ListHead from '../ListHead';
import ListBody from '../ListBody';
import { Container } from './styles';

function List() {
  return (
    <Container>
      <ListHead/>
      <ListBody/>
    </Container>
  );
}

export default List;