import React, { useEffect, useState } from 'react';
import Note from '../components/Note';
import { core_project } from '../../../declarations/core_project';

function Proposals() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      core_project.createNote(newNote.title, newNote.content);
      return [newNote, ...prevNotes];
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const notesArray = await core_project.readNotes();
    setNotes(notesArray);
  }

  function deleteNote(id) {
    core_project.removeNote(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default Proposals;
