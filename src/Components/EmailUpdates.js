import React, { useState } from 'react';

const EmailUpdates = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Save the email address by sending it to the backend server
    try {
      const response = await fetch('http://localhost:5001/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        setEmail('');
        alert('Email address saved successfully.');
      } else {
        const data = await response.json();
        alert('Error saving email address: ' + data.message);
      }
    } catch (error) {
      alert('Error saving email address: ' + error.message);
    }
  };
  

  return (
    <div>
      <h1>Join for Release Updates</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmailUpdates;
