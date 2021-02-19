import React, { useState } from "react";

import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SongListWrapper from './components/SongListWrapper';

import { BsPlusCircle } from 'react-icons/bs';

function App() {
  const [listSongLists, setListSongLists] = useState([
    {},
    {},
    {}
  ]);
  
  const removeSongList = index => {
    const newTodos = [...listSongLists];
    newTodos.splice(index, 1);
    setListSongLists(newTodos);
  };

  const addSongList = () => {
    setListSongLists(oldArray => [...oldArray, {}]);
  }

  return (
    <div className="app">
      <Navbar />
      <div className="song-list-container">
        {
          listSongLists.map((val, idx) => {
            return (
              <SongListWrapper
                key={idx}
                index={idx}
                removeSongList={removeSongList}
              />
            );
          })
        }
        <div className="add-btn" onClick={addSongList}>
          <BsPlusCircle />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;