import React from 'react';
import ListHead from '../ListHead';
import ListBody from '../ListBody';
import { Container } from './styles';
import { useSelector } from 'react-redux';

function List() {
  const { playlist } = useSelector((state) => state.playlist);

  const renderTable = () => (
    <Container>
      <ListHead/>
      <ListBody/>
    </Container>
  );
  
  return (
    <>
      { playlist.songs && renderTable() }
    </>
  );
}

export default List;