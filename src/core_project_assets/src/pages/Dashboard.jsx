import React, { useState } from 'react';
import { core_project } from '../../../declarations/core_project';
import { Principal } from '@dfinity/principal';
import { Button } from '@mui/material/index';

function Dashboard(props) {
  const [inputValue, setInputValue] = useState('');
  const [balanceResult, setbalanceResult] = useState('');
  const [symbol, setSymbol] = useState('');
  const [disable, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState('Gimme that s...');
  console.log(props);

  async function handleCheckBalance() {
    // console.log(inputValue)
    const principal = Principal.fromText('2vxsx-fae');
    const balance = await core_project.balanceOf(principal);
    setbalanceResult(balance.toLocaleString());
    setSymbol(await core_project.getSymbol());
  }

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
        <p style={{ color: 'white' }}>{buttonText}</p>
      </Button>
      <div>
        <h2 style={{ color: 'white', marginBottom: 10, marginTop: 20 }}>
          Check your Balance
        </h2>
        <Button
          variant="contained"
          id="btn-request-balance"
          onClick={handleCheckBalance}
        >
          Check Balance
        </Button>
        {balanceResult !== '' && (
          <p style={{ color: 'white', marginTop: 20 }}>
            This account has a balance of {balanceResult} {symbol}
          </p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
