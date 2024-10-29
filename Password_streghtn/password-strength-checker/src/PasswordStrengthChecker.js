import React, { useState } from 'react';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkStrength = (password) => {
    let score = 0;

    // Check length
    if (password.length >= 8) score += 1;

    // Check for numbers
    if (/\d/.test(password)) score += 1;

    // Check for lowercase letters
    if (/[a-z]/.test(password)) score += 1;

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) score += 1;

    // Check for special characters
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    // Determine strength based on score
    if (score <= 2) {
      setStrength('Weak');
    } else if (score === 3 || score === 4) {
      setStrength('Moderate');
    } else if (score === 5) {
      setStrength('Strong');
    } else {
      setStrength('');
    }
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkStrength(newPassword);
  };

  return (
    <div>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
        style={{ marginBottom: '10px', padding: '5px' }}
      />
      <p>Password Strength: <strong>{strength}</strong></p>
    </div>
  );
};

export default PasswordStrengthChecker;
