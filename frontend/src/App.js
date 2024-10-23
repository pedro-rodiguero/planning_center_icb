import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import WorshipTeams from './pages/WorshipTeams/WorshipTeamsPage';
import Setlists from './pages/Setlist/SetlistPage';
import Schedules from './pages/Schedule/SchedulePage';
import Members from './pages/Members/MembersPage';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/worship-teams" element={<WorshipTeams />} />
          <Route path="/setlists" element={<Setlists />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;