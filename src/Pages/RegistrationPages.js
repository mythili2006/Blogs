import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('https://blog-app-88ee.onrender.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }), // Send the username and password
    });

    if (response.status === 200) {
      alert('Registration successful!');
      setRedirect(true);
    } else if (response.status === 400) {
      setMessage('User already exists');
    } else {
      setMessage('Registration failed!');
    }
  }

  // Redirect to another page after successful registration
  if (redirect) {
    return <Navigate to="/login" />; // Redirect to the login page or your desired route
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={ev => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={ev => setPassword(ev.target.value)}
      />
      <button type="submit">Register</button>
      {message && (
        <p className={`result ${message === 'Registration failed' ? 'failure' : 'success'}`}>
          {message}
        </p>
      )}
    </form>
  );
}
