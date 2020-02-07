import React, {useState } from 'react';
import Library from './components/Library';
import Player from './components/Player';

function App() {
  const [currentSong, setCurrentSong] = useState('inTheEnd.mp4');
  return (
    <div>
      <Library setCurrentSong={setCurrentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
