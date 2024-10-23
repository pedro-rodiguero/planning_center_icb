import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WorshipTeams = () => {
  const [teams, setTeams] = useState([]);
  const [name, setName] = useState('');

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
      .then(() => setTeams(teams.filter(team => team._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Worship Teams</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Team Name" />
      <button onClick={createTeam}>Create Team</button>
      <ul>
        {teams.map(team => (
          <li key={team._id}>
            {team.name}
            <button onClick={() => deleteTeam(team._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorshipTeams;