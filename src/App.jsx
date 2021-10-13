import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Playlists from './pages/Playlists';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/playlists" component={ Playlists } />
    </Switch>
  );
}

export default App;
