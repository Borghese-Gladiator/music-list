import React, { useState } from "react";

import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SongList from "./components/SongList";

function App() {
  const [songList, setSongList] = useState([
    {},
    {},
    {}
  ]);
  return (
    <div>
      <Navbar />
      {
        songList.map((val, idx) => {
          return (
            <div>
              <SongList />
            </div>
          );
        })
      }
      <Footer />
    </div>
  );
}

export default App;