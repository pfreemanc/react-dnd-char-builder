import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../API';

function CharRaceModal({ endpoint }) {
  const getRaceInfo = async () => {
    axios
      .get(`${BASE_URL}/races/${endpoint}`)
      .then((response) => setRaceData(response.data));
  };

  const [raceData, setRaceData] = useState({});

  useEffect(() => {
    getRaceInfo();
  });
  return (
    <div>
      <p>{endpoint}</p>
    </div>
  );
}

export default CharRaceModal;
