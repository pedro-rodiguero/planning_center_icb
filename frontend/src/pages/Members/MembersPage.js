import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    axios.get('/api/members')
      .then(response => setMembers(response.data))
      .catch(error => console.error(error));
  }, []);

  const createMember = () => {
    axios.post('/api/members', { name, role })
      .then(response => setMembers([...members, response.data]))
      .catch(error => console.error(error));
  };

  const deleteMember = (id) => {
    axios.delete(`/api/members/${id}`)
      .then(() => setMembers(members.filter(member => member._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Members</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Member Name" />
      <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" />
      <button onClick={createMember}>Create Member</button>
      <ul>
        {members.map(member => (
          <li key={member._id}>
            {member.name} - {member.role}
            <button onClick={() => deleteMember(member._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Members;