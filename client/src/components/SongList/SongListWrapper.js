import React, { useState } from 'react';
// custom components
import SongList from './SongList';
import InlineEdit from './InlineEdit';
import DropdownMenu from './DropdownMenu';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function SongListWrapper(props) {
  const { title, index, removeSongList } = props;
  const [storedHeading, setStoredHeading] = useState(
    title
  );

  // const options = ["Mangoes", "Apples", "Oranges"];
  const options = [
    {
      text: "Delete",
      execFunc: () => {
        return (
          removeSongList(index)
        )
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
          onSetText={text => setStoredHeading(text)}
        />
      </h3>
      <SongList />
    </div>
  )
}