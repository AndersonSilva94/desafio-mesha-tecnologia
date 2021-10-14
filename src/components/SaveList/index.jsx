import React from 'react';
import SaveBody from '../SaveBody';
import SaveHead from '../SaveHead';
import { Container } from './styles';

function SaveList() {
  return (
    <Container>
      <SaveHead />
      <SaveBody />
    </Container>
  );
}

export default SaveList;