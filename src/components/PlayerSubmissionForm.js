import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

// The adjective noun adverb verb the adjective noun
const PlayerSubmissionForm = (props) => {

  const [poem, setPoem] = useState({
    adjective: '',
    noun: '',
    adverb: '',
    verb: '',
    adjective2: '',
    noun2: ''
  });
  
  const onAdjectiveChange = (event) => {
    setPoem({
      ...poem,
      adjective: event.target.value
    })
  };

  const onNounChange = (event) => {
    setPoem({
      ...poem,
      noun: event.target.value
    })
  };

  const onAdverbChange = (event) => {
    setPoem({
      ...poem,
      adverb: event.target.value
    })
  };

  const onVerbChange = (event) => {
    setPoem({
      ...poem,
      verb: event.target.value
    })
  };

  const onAdjective2Change = (event) => {
    setPoem({
      ...poem,
      adjective2: event.target.value
    })
  };

  const onNoun2Change = (event) => {
    setPoem({
      ...poem,
      noun2: event.target.value
    })
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          The
          <input
            
            onChange={onAdjectiveChange}
            value={poem.adjective}
            placeholder="adjective"
            type="text"
          />

          <input
            onChange={onNounChange}
            value={poem.noun}
            placeholder="noun"
            type="text"
          />

          <input
            onChange={onAdverbChange}
            value={poem.adverb}
            placeholder="adverb"
            type="text"
          />

          <input
            onChange={onVerbChange}
            value={poem.verb}
            placeholder="verb"
            type="text"
          />  
          the
          <input
            onChange={onAdjective2Change}
            value={poem.adjective2}
            placeholder="adjective2"
            type="text"
          />  

        <input
            onChange={onNoun2Change}
            value={poem.noun2}
            placeholder="noun2"
            type="text"
          />
          .
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
