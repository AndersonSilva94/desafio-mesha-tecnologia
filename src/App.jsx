import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Playlists from './pages/Playlists';
import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/playlists" component={ Playlists } />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
