import React from 'react';
import { useSelector } from 'react-redux';
import { Td, Tbody, Tr } from './styles';
import { resolveAppleImageUrl } from '../../utils/convertImageUrl';

function ListBody() {
  const { playlist } = useSelector((state) => state.playlist);

  return (
    <Tbody>
      {playlist?.songs && playlist.songs.data.map((track) => (
        <Tr key={ track?.id }>
          <Td>{ track?.attributes.name }</Td>
          <Td>{ track?.attributes.artistName }</Td>
          <Td>
            <img
              src={resolveAppleImageUrl(track?.attributes.artwork.url, 100, 100)}
              alt={track?.attributes.albumName} />
          </Td>
        </Tr> 
      ))} 
    </Tbody>
  );
}

export default ListBody;
