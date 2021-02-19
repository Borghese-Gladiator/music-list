import React from 'react';

import SongList from './SongList';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function SongListWrapper(props) {
  const { index, removeSongList } = props;
  return (
    <div className="song-list-wrapper">
      <div className="close-btn" onClick={() => removeSongList(index)}>
        <AiOutlineCloseCircle className="close-btn-icon" />
      </div>
      <SongList />
    </div>
  )
}