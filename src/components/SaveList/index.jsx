import React, { useEffect, useState } from 'react';
import SaveBody from '../SaveBody';
import SaveHead from '../SaveHead';
import { Container, NoPlaylists } from './styles';

function SaveList() {
  const [isThereMusic, setIsThereMusic] = useState(false);
  
  useEffect(() => {
    const verifyIfHaveMusic = () => {
      const playlists = JSON.parse(localStorage.getItem('playlists') || '[]');
      if(playlists.length > 0) {
        setIsThereMusic(true);
      } else {
        setIsThereMusic(false);
      }
    }
    verifyIfHaveMusic();
  }, [])

  return (
    <>
      {isThereMusic ? (
        <Container>
          <SaveHead />
          <SaveBody />
        </Container>
      ) : (
        <NoPlaylists>
          There are no playlists to show you!
        </NoPlaylists>
      )}
    </>
  );
}

export default SaveList;