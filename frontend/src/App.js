import React from 'react';
import SignIn from './SignIn';
import WorshipTeams from './pages/WorshipTeams/WorshipTeams';

const App = () => {
  return (
    <div>
      <h1>Welcome to the Worship Ministry App</h1>
      <SignIn />
      <WorshipTeams />
    </div>
  );
};

export default App;