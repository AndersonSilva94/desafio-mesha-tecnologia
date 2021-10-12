import React from 'react';
import List from '../List';
import { Button, Container, Title } from './styles';

function Playlist() {
  return (
    <Container>
      <Title>Here's a playlist for you</Title>
      <List/>
      <Button>Save</Button>
    </Container>
  );
}

export default Playlist;