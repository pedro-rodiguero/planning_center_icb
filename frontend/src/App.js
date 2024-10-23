// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignIn from './SignIn';
import WorshipTeams from './pages/WorshipTeams/WorshipTeamsPage';
import Setlists from './pages/Setlists/SetlistsPage';
import Schedules from './pages/Schedules/SchedulesPage';
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
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/worship-teams" component={WorshipTeams} />
          <Route path="/setlists" component={Setlists} />
          <Route path="/schedules" component={Schedules} />
          <Route path="/members" component={Members} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;