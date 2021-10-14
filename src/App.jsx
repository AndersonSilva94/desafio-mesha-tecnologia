import React from 'react';
import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Playlists from './pages/Playlists';
import dark from './themes/dark';
import light from './themes/light';
import useThemeMode from './utils/useThemeMode';

function App() {
  const [theme, setTheme] = useThemeMode('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/"  render={ () => <Home toggleTheme={toggleTheme} /> } />
        <Route exact path="/playlists" render={ () => <Playlists toggleTheme={toggleTheme} /> } />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
