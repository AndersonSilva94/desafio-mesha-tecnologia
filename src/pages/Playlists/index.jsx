import React from 'react';
import { Link } from 'react-router-dom';
import SaveList from '../../components/SaveList';

function Playlists() {
  return (
    <div>
      <SaveList />
      <Link to="/">Go to home</Link>
    </div>
  );
}

export default Playlists;