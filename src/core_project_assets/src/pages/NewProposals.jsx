import React, { useState } from 'react';
import { core_project } from '../../../declarations/core_project';
import CreateArea from '../components/CreateArea';

function NewProposals() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      core_project.createNote(newNote.title, newNote.content);
      return [newNote, ...prevNotes];
    });
  }
  return <CreateArea onAdd={addNote} />;
}

export default NewProposals;
