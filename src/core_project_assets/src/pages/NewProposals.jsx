import React, { useState } from 'react';
import { core_project } from '../../../declarations/core_project';
import CreateProposal from '../components/CreateProposal';

function NewProposals() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      core_project.createNote(newNote.title, newNote.content);
      return [newNote, ...prevNotes];
    });
  }
  return <CreateProposal onAdd={addNote} />;
}

export default NewProposals;
