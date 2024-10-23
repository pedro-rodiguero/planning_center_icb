import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Schedules = () => {
  const [schedules, setSchedules] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    axios.get('/api/schedules')
      .then(response => setSchedules(response.data))
      .catch(error => console.error(error));
  }, []);

  const createSchedule = () => {
    axios.post('/api/schedules', { date, teams: [] })
      .then(response => setSchedules([...schedules, response.data]))
      .catch(error => console.error(error));
  };

  const deleteSchedule = (id) => {
    axios.delete(`/api/schedules/${id}`)
      .then(() => setSchedules(schedules.filter(schedule => schedule._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Schedules</h1>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={createSchedule}>Create Schedule</button>
      <ul>
        {schedules.map(schedule => (
          <li key={schedule._id}>
            {schedule.date}
            <button onClick={() => deleteSchedule(schedule._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedules;