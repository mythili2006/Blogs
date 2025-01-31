import { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const userInfo = await response.json();
        alert(userInfo.message || "Invalid username or password"); 
        return;
      }

      const userInfo = await response.json();
      setUserInfo(userInfo);
      alert("Login Successful");
      setRedirect(true);
    } catch (err) {
      console.error("Error during login:", err);
      alert("Login failed. Please try again.");
    }
  }

  if (redirect) {
    return <Navigate to="/index" />;
  }

  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button type="submit">Login</button>

      <br />
      <br />

      <Link to="/register">
        <button type="button">Create a new account</button>
      </Link>
    </form>
  );
}
