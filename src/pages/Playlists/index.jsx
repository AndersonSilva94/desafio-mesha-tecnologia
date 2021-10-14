import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useDispatch } from 'react-redux';
import Switch from 'react-switch';
import SaveList from '../../components/SaveList';
import { setWeather } from '../../redux/actions/climate';
import { setPlaylist } from '../../redux/actions/playlist';
import { Container, LinkBack, Text,  Toggle, Wrapper } from './styles';

function Playlists({ toggleTheme }) {
  const dispatch = useDispatch();
  const { colors, title } = useContext(ThemeContext);

  const clearWeatherState = async () => {
    await dispatch(setWeather({}));
    await dispatch(setPlaylist({}));
  }

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
        <Text>Saved Playlists</Text>
        <SaveList />
        <LinkBack to="/" onClick={ clearWeatherState }>Go to home</LinkBack>
      </Container>
    </Wrapper>
  );
}

export default Playlists;