import React, { useState } from 'react';
import ReactModal from 'react-modal';
import CharRaceModal from './CharRaceModal';

function CharRaceCard({ race }) {
  return (
    <div className="character-race__card">
      <h3>{race.name}</h3>
    </div>
  );
}

export default CharRaceCard;
