import React, { useState } from 'react';
// custom components
import InlineEdit from './InlineEdit';
import DropdownMenu from './DropdownMenu';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Todo({ songListIdx, todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="song"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div style={{margin: '5px'}}>
        <button onClick={() => removeTodo(songListIdx, index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default function SongListWrapper(props) {
  const { storedHeading, setStoredHeading, completeTodo, removeTodo, addTodo, songs, songListIdx, removeSongList } = props;

  // const options = ["Mangoes", "Apples", "Oranges"];
  const options = [
    {
      text: "Delete",
      execFunc: () => {
        return (
          removeSongList(songListIdx)
        )
      }
    },
    {
      text: "BLAH",
      execFunc: () => {
        console.log("BLAH");
      }
    }
  ]
// onClick={() => removeSongList(index)}
// <AiOutlineCloseCircle className="close-btn-icon" />
  return (
    <div className="song-list-wrapper">
      <div className="close-btn" >
        <DropdownMenu options={options} />
      </div>
      <h3>
        <InlineEdit
          text={storedHeading}
          onSetText={text => setStoredHeading(songListIdx, text)}
        />
      </h3>
      <div className="song-list">
        {songs.map((todo, index) => (
          <Todo
            key={index}
            songListIdx={songListIdx}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}