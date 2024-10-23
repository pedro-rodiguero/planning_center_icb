import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Setlists = () => {
  const [setlists, setSetlists] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    axios.get('/api/setlists')
      .then(response => setSetlists(response.data))
      .catch(error => console.error(error));
  }, []);

  const createSetlist = () => {
    axios.post('/api/setlists', { name, songs: [] })
      .then(response => setSetlists([...setlists, response.data]))
      .catch(error => console.error(error));
  };

  const deleteSetlist = (id) => {
    axios.delete(`/api/setlists/${id}`)
      .then(() => setSetlists(setlists.filter(setlist => setlist._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Setlists</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Setlist Name" />
      <button onClick={createSetlist}>Create Setlist</button>
      <ul>
        {setlists.map(setlist => (
          <li key={setlist._id}>
            {setlist.name}
            <button onClick={() => deleteSetlist(setlist._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Setlists;