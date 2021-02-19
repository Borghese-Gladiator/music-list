import React from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="song"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div style={{margin: '5px'}}>
        <button onClick={() => removeTodo(index)}>x</button>
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

function SongList() {
  const [songs, setSongs] = React.useState([
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
  ]);

  const addTodo = text => {
    const newSongs = [...songs, { text }];
    setSongs(newSongs);
  };

  const completeTodo = index => {
    const newSongs = [...songs];
    newSongs[index].isCompleted = true;
    setSongs(newSongs);
  };

  const removeTodo = index => {
    const newSongs = [...songs];
    newSongs.splice(index, 1);
    setSongs(newSongs);
  };

  return (
    <div className="song-list">
      {songs.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default SongList;