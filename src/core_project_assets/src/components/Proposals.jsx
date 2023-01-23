import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material/index';
import { Link } from 'react-router-dom';

function Proposal(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="proposal">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Button variant="contained">
        <Link to={`/proposals/${props.id}`}>Votes</Link>
      </Button>
      <Button onClick={handleClick} variant="outlined">
        <DeleteForeverIcon /> Delete
      </Button>
    </div>
  );
}

export default Proposal;
