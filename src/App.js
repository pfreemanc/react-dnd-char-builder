import './App.css';
import CharacterRace from './components/CharacterRace';

import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <CharacterRace />
    </div>
  );
}

export default App;
