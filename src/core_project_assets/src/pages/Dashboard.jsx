import React from 'react';
import React, { useState } from 'react';
import { core_project } from '../../../declarations/core_project';
import { Button } from '@mui/material/index';

function Dashboard(props) {
  const [disable, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState('Gimme that s...');
  console.log(props);

  async function handleClick(event) {
    setDisable(true);
    const result = await core_project.payOut();
    setButtonText(result);
    //setDisable(false)
  }
  return (
    <div className="dashboard">
      <h1 className="h1-proposals">Vote Proposal</h1>
      <h2 style={{ color: 'white', textAlign: 'center', marginBottom: 20 }}>
        Get your MotokoBoocap tokens here! Claim 10 MB coins to your account.
      </h2>

      <Button variant="contained" onClick={handleClick} disabled={disable}>
        {buttonText}
      </Button>
    </div>
  );
}

export default Dashboard;
