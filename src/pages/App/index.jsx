import InfoText from '../../components/InfoText';
import Playlist from '../../components/Playlist';
import Search from '../../components/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Search />
      <InfoText />
      <Playlist />
    </div>
  );
}

export default App;
