import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setPlaylistThunk } from '../../redux/actions/playlist';
import { Td, Tbody, Tr } from './styles';

function ListBody() {
  const dispatch = useDispatch();
  const { playlist } = useSelector((state) => state.playlist);
  const { climate } = useSelector((state) => state.climate);
  const { temperature } = climate;

  useEffect(() => {
    if (temperature) {
      dispatch(setPlaylistThunk(temperature))
    }
  }, [temperature])

  return (
    <Tbody>
      {playlist.tracks && playlist.tracks.hits.map(({ track }) => (
        <Tr key={ track.key }>
          <Td>{ track.title }</Td>
          <Td>{ track.subtitle }</Td>
          {/* <Td>
            {console.log(track.hub.actions[1].uri)}
            <audio controls>
              <source src={track.hub.options[0].actions[1].uri} type='audio/m4a' />
            </audio>
          </Td> */}
          <Td><img src={track.share.image} alt={track.share.subject} /></Td>
        </Tr> 
      ))} 
    </Tbody>
  );
}

export default ListBody;
