import React, { useState } from 'react';
import { core_project } from '../../../declarations/core_project';
import CreateProposal from '../components/CreateProposal';

function NewProposals() {
  const [proposal, setProposal] = useState([]);

  function addNote(newNote) {
    setProposal((prevNotes) => {
      core_project.createProposal(newNote.title, newNote.content);
      return [newNote, ...prevNotes];
    });
  }
  return <CreateProposal onAdd={addNote} />;
}

export default NewProposals;
