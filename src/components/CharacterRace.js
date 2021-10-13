import axios from 'axios';
import { BASE_URL } from '../API';
import React, { Component } from 'react';
import CharRaceCard from './CharRaceCard';
import ReactModal from 'react-modal';
import CharRaceModal from './CharRaceModal';

export default class CharacterRace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      races: [],
      isModalOpen: false,
      selectedRaceIndex: '',
    };
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/races`).then((response) => {
      this.setState({ races: response.data?.results });
    });
  }

  handleClick(raceIndex) {
    console.log(raceIndex);
    // this.setState({
    //   selectedRaceIndex: raceIndex,
    // });
  }

  render() {
    return (
      <div className="character-race">
        <h2>Race Selector Thing</h2>

        <ul className="character-race__container">
          {this.state.races.map((race) => (
            <li onClick={() => this.handleClick(race.index)}>
              <CharRaceCard race={race} key={race.index} />
            </li>
          ))}
        </ul>

        {/* <ReactModal isOpen={this.isModalOpen}> */}
        {/* <CharRaceModal endpoint={this.selectedRaceIndex} /> */}
        {/* </ReactModal> */}
      </div>
    );
  }
}
