import React from 'react';
import { useSelector } from 'react-redux';
import { Td, Tbody, Tr } from './styles';

function ListBody() {
  const { playlist } = useSelector((state) => state.playlist);

  return (
    <Tbody>
      {playlist.tracks && playlist.tracks.hits.map(({ track }) => (
        <Tr key={ track.key }>
          <Td>{ track.title }</Td>
          <Td>{ track.subtitle }</Td>
          <Td><img src={track.share.image} alt={track.share.subject} /></Td>
        </Tr> 
      ))} 
    </Tbody>
  );
}

export default ListBody;
