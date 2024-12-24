import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const Poll = ({ poll }) => {
  const [choices, setChoices] = useState([]);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/polls/${poll.id}/choices`)
      .then(response => setChoices(response.data))
      .catch(error => console.error(error));
  }, [poll.id]);

  const handleVote = (choiceId) => {
    axios.post(`http://localhost:5000/api/polls/${poll.id}/choices/${choiceId}/vote`)
      .then(() => setVoted(true))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>{poll.question}</h2>
      {choices.map(choice => (
        <div key={choice.id}>
          <button onClick={() => handleVote(choice.id)} disabled={voted}>
            {choice.choice} {voted && `(${choice.votes} votes)`}
          </button>
        </div>
      ))}
      {voted && <p>Thank you for voting!</p>}
    </div>
  );
};

export default Poll;
