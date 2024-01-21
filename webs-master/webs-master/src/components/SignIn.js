import React, { useState } from 'react';
import './SignIn.css';

const SignIn = ({ isSignUp }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Implement your sign-in logic here
    console.log('Signing in with:', { email, phone, password });
  };

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log('Signing up with:', { email, phone, password });
  };

  return (
    <div>
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form>
        {/* Common fields for both sign up and sign in */}
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {!isSignUp && (
          <label>
            Phone:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
        )}
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {/* Render different button text based on sign-up status */}
        <button type="button" onClick={isSignUp ? handleSignUp : handleSignIn}>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
