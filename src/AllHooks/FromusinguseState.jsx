import React, { useState } from 'react';

const RegistrationFormusinguseState = () => {
  
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const submitData = (e) => {
    e.preventDefault();
    setSubmittedData({ username, number }); 
    setUsername(''); 
    setNumber(''); 
  };

  return (
    <>
      <h1>This Is a useState Example.</h1>
      <div>
        <h3>User Registration</h3>
        <form onSubmit={submitData}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>

        {submittedData && (
          <div>
            <h2>Submitted Data:</h2>
            <p>Username: {submittedData.username}</p>
            <p>Number: {submittedData.number}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default RegistrationFormusinguseState;