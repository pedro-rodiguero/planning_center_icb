import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignIn from './SignIn';
import WorshipTeams from './pages/WorshipTeams/WorshipTeamsPage';
import Setlists from './pages/Setlist/SetlistPage';
import Schedules from './pages/Schedule/SchedulePage';
import Members from './pages/Members/MembersPage';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to the Worship Ministry App</h1>
        <nav>
          <ul>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/worship-teams">Worship Teams</Link></li>
            <li><Link to="/setlists">Setlists</Link></li>
            <li><Link to="/schedules">Schedules</Link></li>
            <li><Link to="/members">Members</Link></li>
          </ul>
        </nav>
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