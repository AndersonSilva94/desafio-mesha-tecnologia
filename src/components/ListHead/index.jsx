import React from 'react';
import { Th, Thead, Tr } from './styles';

function ListHead() {
  return (
    <Thead>
      <Tr>
        <Th>Title</Th>
        <Th>Artist</Th>
        <Th>Cover Image</Th>
      </Tr>  
    </Thead>
  );
}

export default ListHead;
