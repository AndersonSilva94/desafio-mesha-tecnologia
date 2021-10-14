import React from 'react';
import { Th, Thead, Tr } from './styles';

function SaveHead() {
  return (
    <Thead>
      <Tr>
        <Th>Date</Th>
        <Th>Temperature</Th>
        <Th>City</Th>
        <Th>Playlist genre</Th>
        <Th>Playlist</Th>
        <Th>Delete</Th>
      </Tr>  
    </Thead>
  );
}

export default SaveHead;
