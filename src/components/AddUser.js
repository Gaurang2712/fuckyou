import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://my-backend-abgs.onrender.com/addUser', { name, email, password })
      .then(response => {
        console.log('User added:', response.data);
        alert('User added successfully!');
      })
      .catch(error => console.error('Error adding user:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
