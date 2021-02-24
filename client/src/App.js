import React, { useState } from "react";
// custom components
import DefaultLayout from './components/_layouts/DefaultLayout';
import SongList from './components/SongList';
// assets
import { BsPlusCircle } from 'react-icons/bs';
// util function
import newId from './utils/newid';
// styling
import "./App.css";

const defaultSongList = {
  id: newId(),
  title: 'Favorite Songs',
  songList: [
    {
      text: "Tatsuro Yamashita - Ride on Time",
      isCompleted: false
    },
    {
      text: "Gawr Gura Sings Compilation",
      isCompleted: false
    },
    {
      text: "Tatsuro Yamashita - Someday/Itsuka",
      isCompleted: false
    }
  ]
}

function App() {
  const [listSongLists, setListSongLists] = useState(new Array(3).fill(defaultSongList));

  // apply functions on song list title (operation on title of one object in array of objects)
  const setStoredHeading = (songListIdx, text) => {
    const newArr = [...listSongLists]; // copy array
    newArr[songListIdx].title = text
    setListSongLists(newArr);
  }

  // apply functions on individual song lists (operation on the array of objects, songList, inside an array of objects, listSongLists)
  const addSongListItem = (songListIdx, text) => {
    const newArr = [...listSongLists]; // copy array
    const oldSongs = newArr[songListIdx].songList;
    const newSongs = [...oldSongs, {
      id: newId(),
      text: text,
      isCompleted: false
    }]; // operation on SongListItem
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
    setListSongLists(oldArray => [...oldArray, defaultSongList]);
  }

  return (
    <div id="app">
      <DefaultLayout>
        <h1>Song Lists</h1>
        <div className="song-list-container">
          {
            listSongLists.map((val, idx) => {
              const { id, title, songList } = val;
              return (
                <SongList
                  key={id}
                  songListIdx={idx}
                  removeSongList={removeListSongList}
                  completeTodo={completeSongListItem}
                  removeTodo={removeSongListItem}
                  addTodo={addSongListItem}
                  songs={songList}
                  storedHeading={title}
                  setStoredHeading={setStoredHeading}
                />
              );
            })
          }
          <div className="add-btn" onClick={addSongList}>
            <BsPlusCircle />
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}

export default App;