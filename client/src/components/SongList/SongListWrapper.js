import React, { useState } from 'react';

import SongList from './SongList';
import InlineEdit from "./InlineEdit";
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function SongListWrapper(props) {
  const { title, index, removeSongList } = props;
  const [storedHeading, setStoredHeading] = useState(
    title
  );

  return (
    <div className="song-list-wrapper">
      <div className="close-btn" onClick={() => removeSongList(index)}>
        <AiOutlineCloseCircle className="close-btn-icon" />
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