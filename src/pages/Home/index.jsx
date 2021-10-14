import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import InfoText from '../../components/InfoText';
import Playlist from '../../components/Playlist';
import Search from '../../components/Search';
import Switch from 'react-switch';
import { Container, LinkSaved, Toggle, Wrapper } from './styles';

function Home({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Container>
        <Toggle>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            offColor={colors.offColor}
            onColor={colors.primary}
          />
        </Toggle>
        <Search />
        <InfoText />
        <Playlist />
        <LinkSaved to="/playlists">See saved playlists</LinkSaved>
      </Container>
    </Wrapper>
  );
}

export default Home;