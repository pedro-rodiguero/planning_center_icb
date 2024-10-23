import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WorshipTeamsPage.css';

const WorshipTeams = () => {
  const [teams, setTeams] = useState([]);
  const [name, setName] = useState('');
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    axios.get('/api/worship-teams')
      .then(response => setTeams(response.data))
      .catch(error => console.error(error));
  }, []);

  const createTeam = () => {
    axios.post('/api/worship-teams', { name, members: [] })
      .then(response => setTeams([...teams, response.data]))
      .catch(error => console.error(error));
  };

  const deleteTeam = (id) => {
    axios.delete(`/api/worship-teams/${id}`)
      .then(() => setTeams(teams.filter(team => team.id !== id)))
      .catch(error => console.error(error));
  };

  const selectTeam = (team) => {
    setSelectedTeam(team);
  };

  return (
    <div className="worship-teams-page">
      <h1>Worship Teams</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Team Name" />
      <button onClick={createTeam}>Create Team</button>
      <ul className="team-list">
        {teams.map(team => (
          <li key={team.id} onClick={() => selectTeam(team)} className={selectedTeam && selectedTeam.id === team.id ? 'selected' : ''}>
            {team.name}
            <button onClick={() => deleteTeam(team.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {selectedTeam && (
        <div className="team-details">
          <h2>{selectedTeam.name}</h2>
          <p>Members: {selectedTeam.members.length}</p>
          {/* Add more actions or details here */}
        </div>
      )}
    </div>
  );
};

export default WorshipTeams;