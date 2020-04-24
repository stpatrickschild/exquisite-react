import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {

  const [poem, setpoem] = useState([])
  const[currentPlayer, setCurrentPlayer] = useState(1)

  const updatePoem = (sentence) => {
    // we have a new poem submitted from the form
    // save it to a data structure owned by Game
    // maybe render it on the page?
    const newPoem = [...poem];

    newPoem.push(sentence);

    // setting the state to the new poem
    setpoem(newPoem);
    setCurrentPlayer(currentPlayer + 1);
    console.log('hahu')
  }



  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission poem={poem}/>

      <PlayerSubmissionForm currentPlayer={currentPlayer} updatePoemCallback={updatePoem} />

      <FinalPoem  />

    </div>
  );
}


const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
