import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import AllProposals from './AllProposals';
import MyVotes from './MyVotes';
import NewProposals from './NewProposals';
import Dashboard from './Dashboard';
import VoteProposal from '../components/VoteProposal';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<AllProposals />} />
        <Route path="/proposals/:id" element={<VoteProposal />} />
        <Route path="/myvotes" element={<MyVotes />} />
        <Route path="/newproposals" element={<NewProposals />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<AllProposals />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
