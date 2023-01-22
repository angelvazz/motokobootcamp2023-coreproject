import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import Proposals from './Proposals';
import MyVotes from './MyVotes';
import NewProposals from './NewProposals';
import Dashboard from './Dashboard';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Proposals />} />
        <Route path="/myvotes" element={<MyVotes />} />
        <Route path="/newproposals" element={<NewProposals />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Proposals />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
