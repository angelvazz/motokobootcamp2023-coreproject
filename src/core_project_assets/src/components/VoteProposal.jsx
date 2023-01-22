import React, { useEffect, useState } from 'react';
import { core_project } from '../../../declarations/core_project';
import { Button } from '@mui/material/index';

function VoteProposal(props) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const notesArray = await core_project.readNotes();
    setNotes(notesArray);
  }

  return (
    <div>
      <h1 className="h1-proposals">Vote Proposal</h1>
      <div className="vote-proposal-box">
        <div className="vote-proposal">
          <h1 style={{ textAlign: ' center' }}>Title</h1>
          <p>Content</p>
          <Button variant="contained">Vote</Button>
        </div>
        <div className="vote-proposal">
          <h2>Number of Proposal</h2>
          <h2>Owner</h2>
          <h2>Created:</h2>
          <h2>Votes</h2>
        </div>
      </div>
    </div>
  );
}

export default VoteProposal;
