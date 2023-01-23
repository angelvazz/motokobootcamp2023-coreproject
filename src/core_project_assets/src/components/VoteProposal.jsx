import React, { useEffect, useState } from 'react';
import { core_project } from '../../../declarations/core_project';
import { Button } from '@mui/material/index';

function VoteProposal(props) {
  const [notes, setNotes] = useState([]);
  const urlId = window.location.pathname;
  const indexUrl = urlId.slice(11);
  const numberUrl = parseInt(indexUrl);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const notesArray = await core_project.seeProposal(numberUrl);
    setNotes(notesArray);
  }

  return (
    <div>
      <h1 className="h1-proposals">Vote Proposal</h1>
      <div className="vote-proposal-box">
        <div className="vote-proposal">
          {notes.map((e, i) => (
            <React.Fragment key={i}>
              <h1 style={{ textAlign: ' center' }}>{e.title}</h1>
              <p>{e.content}</p>
            </React.Fragment>
          ))}

          <Button variant="contained">Vote</Button>
        </div>
        <div className="vote-proposal">
          <div className="vote-proposal-owner">
            <h2>Number of Proposal</h2>
            <h2>{numberUrl}</h2>
          </div>
          <div className="vote-proposal-owner">
            {notes.map((e, i) => (
              <React.Fragment key={i}>
                <h2>Owner</h2>
                <h2>{e.owner}</h2>
              </React.Fragment>
            ))}
          </div>
          <h2>Created:</h2>
          <h2>Votes</h2>
        </div>
      </div>
    </div>
  );
}

export default VoteProposal;
