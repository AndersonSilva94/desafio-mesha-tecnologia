import React, { useEffect, useState } from 'react';
import { Td, Tbody, Tr } from './styles';

function SaveBody() {
  const [arrPlaylist, setArrPlaylist] = useState();
  
  useEffect(() => {
    const getPlaylist = () => {
      const playlists = JSON.parse(localStorage.getItem('playlists') || '[]');
      setArrPlaylist(playlists);
    }
    getPlaylist();
  }, [arrPlaylist])

  const deletePlaylist = ({ id }) => {
    const favoritePlaylists = JSON.parse(localStorage.getItem('playlists'))
    const filteredPlaylist = favoritePlaylists.filter((el) => el.id !== id);
    localStorage.setItem('playlists', JSON.stringify(filteredPlaylist));
    setArrPlaylist(filteredPlaylist);
  }

  return (
    <Tbody>
      {arrPlaylist && arrPlaylist.map((el) => (
            <Tr key={ el.id }>
              <Td>{ el.date }</Td>
              <Td>{ el.temperature }</Td>
              <Td>{ el.name }</Td>
              <Td>{ el.genre }</Td>
              <Td>
                <ul>
                  { el.tracks.hits.map(({ track }) => (
                    <li key={ track.key }>
                      { track.title } - { track.subtitle }
                    </li>
                  )) }
                </ul>
              </Td>
              <Td>
                <button onClick={() => deletePlaylist(el)}>Delete</button>
              </Td>
            </Tr> 
          ))
      } 
    </Tbody>
  );
}

export default SaveBody;
