import React, { useState } from "react";

import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SongList from "./components/SongList";

import { BsPlusCircle } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function App() {
  const [songList, setSongList] = useState([
    {},
    {},
    {}
  ]);

  const handleAdd = () => {
    setSongList(oldArray => [...oldArray, {}]);
  }

  return (
    <div className="app">
      <Navbar />
      <div className="song-list-container">
        {
          songList.map((val, idx) => {
            return (
              <div className="song-list-wrapper">
                <div className="close-btn" onClick={handleAdd}>
                  <AiOutlineCloseCircle className="close-btn-icon" />
                </div>
                <SongList />
              </div>
            );
          })
        }
        <div className="add-btn" onClick={handleAdd}>
          <BsPlusCircle />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;