import React, { useState } from "react";
import styles from "./App.module.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";


function App () {
  
  const [searchResults, setSearchResults] = useState([
    {
      name: "Example Track Name 1",
      artist: "Example Track Artist 1",
      album: "Example Track Album 1",
      id: 1,
    },
    {
      name: "Example Track Name 2",
      artist: "Example Track Artist 2",
      album: "Example Track Album 2",
      id: 2,
    },
  ]);

  const [playlistName, setPlaylistName] = useState("Example Playlist Name.");
  const [playlistTracks, setPlaylistTracks] = useState ([
    {
      name: "Example Playlist Name 1",
      artist: "Example Playlist Artist 1",
      album: "Example Playlist Album 1",
      id: 1,
    },
    {
      name: "Example Playlist Name 2",
      artist: "Example Playlist Artist 2",
      album: "Example Playlist Album 2",
      id: 2,
    },
    {
      name: "Example Playlist Name 3",
      artist: "Example Playlist Artist 3",
      album: "Example Playlist Album 3",
      id: 3,
    },
  ]);

  function addTrack(track) {
    const existingTrack = playlistTracks.find(t => t.id === track.id)
    const newTrack = playlistTracks.concat(track);
    if (existingTrack) {
      console.log("Track already exists");
    }
  }

    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className={styles.App}>
          {/* <!-- Add a SearchBar component --> */}
          
          <div className={styles["App-playlist"]}>
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults userSearchResults={searchResults} />
            {/* <!-- Add a Playlist component --> */}
            <Playlist 
              playlistName={playlistName} 
              playlistTracks={playlistTracks}
            />
          </div>
        </div>
      </div>
        );
}

export default App;

