import React, { useState } from "react";

function App() {
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    const res = await fetch("/api/backend/songs");
    const data = await res.json();
    setSongs(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🎵 Song Explorer</h1>

      <button onClick={fetchSongs}>Load Songs</button>

      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;