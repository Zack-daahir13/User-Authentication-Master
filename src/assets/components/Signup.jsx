import React, { useState } from 'react';

function Signup() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Handle signup logic here
    console.log('Signup:', { name, phone, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Sign Up</h2>
      <input 
        type="text" 
        placeholder="Full Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="tel" 
        placeholder="Phone Number" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        required 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Confirm Password" 
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)} 
        required 
      />
      <button type="submit" className="submit-btn">Sign Up</button>
    </form>
  );
}

export default Signup;
