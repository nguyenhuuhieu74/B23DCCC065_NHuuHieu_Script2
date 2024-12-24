import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Poll from './Poll';
import './App.css';

const PollList = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/polls')
      .then(response => setPolls(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Polls</h1>
      {polls.map(poll => (
        <Poll key={poll.id} poll={poll} />
      ))}
    </div>
  );
};

export default PollList;
