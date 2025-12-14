import React from 'react';
import { Route, Routes } from 'react-router';
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
      <Routes>
        <Route exact path="/" element={<Home toggleTheme={toggleTheme} />} />
        <Route exact path="/playlists" element={<Playlists toggleTheme={toggleTheme} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
