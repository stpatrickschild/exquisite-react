import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const finalSentences = props.poem.map((sentence, i) => {
    return (
    <p key={i}>
      The {sentence.adjective1} {sentence.noun1} {sentence.adverb} {sentence.verb} the {sentence.adjective2} {sentence.noun2}.
    </p>)

  });

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
          {finalSentences}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );  
}
FinalPoem.propTypes = {
  poem: PropTypes.array.isRequired,
};
export default FinalPoem;
