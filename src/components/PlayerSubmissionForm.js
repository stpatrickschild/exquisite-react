import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

// add the 6 things here. 
const PlayerSubmissionForm = (props) => {

  const [sentence, setSentence] = useState({
    adjective1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adjective2: '',
    noun2: ''
  });
  
  const onAdjective1Change = (event) => {
    setSentence ({
      ...sentence ,
      adjective1: event.target.value
    })
  };

  const onNoun1Change = (event) => {
    setSentence ({
      ...sentence ,
      noun1: event.target.value
    })
  };

  const onAdverbChange = (event) => {
    setSentence({
      ...sentence ,
      adverb: event.target.value
    })
  };

  const onVerbChange = (event) => {
    setSentence({
      ...sentence ,
      verb: event.target.value
    })
  };

  const onAdjective2Change = (event) => {
    setSentence({
      ...sentence ,
      adjective2: event.target.value
    })
  };

  const onNoun2Change = (event) => {
    setSentence({
      ...sentence ,
      noun2: event.target.value
    })
  };
  
  const onFormSubmit = (event) => {
    event.preventDefault();

    // to pass data back up to Game component
    props.updatePoemCallback(sentence);

    if (sentence.adjective1 !== '' && sentence.noun1 !== '' && sentence.adverb !== '' && sentence.verb !== '' &&
        sentence.adjective2 !== '' && sentence.noun2 !== '') {

          setSentence({
            adjective1: '',
            noun1: '',
            adverb: '',
            verb: '',
            adjective2: '',
            noun2: ''
          });
        };
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.currentPlayer}</h3>

      <form className="PlayerSubmissionForm__form"
      onSubmit={onFormSubmit} >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
          
          }
          The
          <input
            
            onChange={onAdjective1Change}
            value={sentence.adjective}
            placeholder="adjective1"
            type="text"
          />

          <input
            onChange={onNoun1Change}
            value={sentence.noun}
            placeholder="noun1"
            type="text"
          />

          <input
            onChange={onAdverbChange}
            value={sentence.adverb}
            placeholder="adverb"
            type="text"
          />

          <input
            onChange={onVerbChange}
            value={sentence.verb}
            placeholder="verb"
            type="text"
          />  
          the
          <input
            onChange={onAdjective2Change}
            value={sentence.adjective2}
            placeholder="adjective2"
            type="text"
          />  

        <input
            onChange={onNoun2Change}
            value={sentence.noun2}
            placeholder="noun2"
            type="text"
          />
          .
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line"  className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
