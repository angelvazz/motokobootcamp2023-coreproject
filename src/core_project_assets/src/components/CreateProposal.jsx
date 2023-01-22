import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateProposal(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <h1 className="h1-proposals">Create Proposal</h1>
      <form className="create-proposal">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Create a new proposals..."
          rows={isExpanded ? 15 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddCircleOutlineIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateProposal;
