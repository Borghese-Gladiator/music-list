import React, { useState } from "react";

import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SongList from './components/SongList';

import { BsPlusCircle } from 'react-icons/bs';

function App() {
  const [listSongLists, setListSongLists] = useState([
    {
      title: 'Favorite Songs',
      songList: [
        {
          text: "Learn about React",
          isCompleted: false
        },
        {
          text: "Meet friend for lunch",
          isCompleted: false
        },
        {
          text: "Build really cool todo app; Build really cool todo app; Build really cool todo app; Build really cool todo app; Build really cool todo app",
          isCompleted: false
        }
      ]
    },
    {
      title: 'Favorite Songs',
      songList: [
        {
          text: "Learn about React",
          isCompleted: false
        },
        {
          text: "Meet friend for lunch",
          isCompleted: false
        },
        {
          text: "Build really cool todo app; Build really cool todo app; Build really cool todo app; Build really cool todo app; Build really cool todo app",
          isCompleted: false
        }
      ]
    },
    {
      title: 'Favorite Songs',
      songList: [
        {
          text: "Learn about React",
          isCompleted: false
        },
        {
          text: "Meet friend for lunch",
          isCompleted: false
        },
        {
          text: "Build really cool todo app; Build really cool todo app; Build really cool todo app; Build really cool todo app; Build really cool todo app",
          isCompleted: false
        }
      ]
    },
  ]);
  
  // apply functions on individual song lists
  const addSongListItem = (songListIdx, text) => {
    const newArr = [...listSongLists]; // copy array
    const oldSongs = newArr[songListIdx].songList; 
    const newSongs = [...oldSongs, { text }]; // operation on SongListItem
    newArr[songListIdx] = {
      title: newArr[songListIdx].title,
      songList: newSongs
    };
    setListSongLists(newArr);
  };

  const completeSongListItem = (songListIdx, songItemIdx) => {
    const newArr = [...listSongLists]; // copy array
    const oldSongs = newArr[songListIdx].songList;
    const newSongs = [...oldSongs];
    newSongs[songItemIdx].isCompleted = true; // operation on SongListItem
    newArr[songListIdx] = {
      title: newArr[songListIdx].title,
      songList: newSongs
    };
    setListSongLists(newArr);
  };

  const removeSongListItem = (songListIdx, songItemIdx) => {
    const newArr = [...listSongLists]; // copy array
    const oldSongs = newArr[songListIdx].songList; 
    const newSongs = [...oldSongs];
    newSongs.splice(songItemIdx, 1); // operation on SongListItem
    newArr[songListIdx] = {
      title: newArr[songListIdx].title,
      songList: newSongs
    };
    setListSongLists(newArr);
  };
  
  // apply functions on list of song lists
  const removeListSongList = index => {
    const newTodos = [...listSongLists];
    newTodos.splice(index, 1);
    setListSongLists(newTodos);
  };

  const addSongList = () => {
    setListSongLists(oldArray => [...oldArray, {}]);
  }

  return (
    <div id="app">
      <Navbar />
      <div id="content">
        <h1>Song Lists</h1>
        <div className="song-list-container">
          {
            listSongLists.map((val, idx) => {
              const { songList } = val;
              return (
                <SongList
                  key={idx}
                  songListIdx={idx}
                  title={"Favorite Songs"}
                  removeSongList={removeListSongList}
                  completeTodo={completeSongListItem}
                  removeTodo={removeSongListItem}
                  addTodo={addSongListItem}
                  songs={songList}
                />
              );
            })
          }
          <div className="add-btn" onClick={addSongList}>
            <BsPlusCircle />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;