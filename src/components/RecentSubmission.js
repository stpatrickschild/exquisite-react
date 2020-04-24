import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  const formatSentence = (poem) => {
    let sentence = ``;
    if (poem.length > 0) {
      sentence += 'The ';
      let line = poem[poem.length - 1];
      sentence += Object.values(line).slice(0,4).join(" ");
      sentence += ' the ';
      sentence += Object.values(line).slice(4).join(" ");
      sentence += '.';

    }
    return sentence

  }
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{formatSentence(props.poem)}</p>
    </div>
  );
}

export default RecentSubmission;
