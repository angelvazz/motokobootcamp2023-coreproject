import React, { useEffect, useState } from 'react';
import Note from '../components/Proposal';
import { core_project } from '../../../declarations/core_project';

function Proposals() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const notesArray = await core_project.readNotes();
    setNotes(notesArray);
  }

  //ToDo changed delete to Vote
  function deleteNote(id) {
    core_project.removeNote(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <React.Fragment>
      <h1 className="h1-proposals">All Proposals</h1>
      <div className="allproposals">
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
    </React.Fragment>
  );
}

export default Proposals;
