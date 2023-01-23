import React, { useEffect, useState } from 'react';
import Proposal from '../components/Proposals';
import { core_project } from '../../../declarations/core_project';

function AllProposals() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const notesArray = await core_project.readProposal();
    setNotes(notesArray);
  }

  //ToDo changed delete to Vote
  function deleteNote(id) {
    core_project.removeProposal(id);
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
            <Proposal
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

export default AllProposals;
