import { useState } from "react";
import '../assets/cssfiles/LoginPage.css';
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function display() {
    console.log(email);
    console.log(password);
  }

  return (
    <>
    <center>
    <div className="login-title">
      <h1>GATHERLY</h1>
      <h3>Find your people. Do real things.</h3>
    </div>
    
      <div className="login-box">
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />

      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />

      <button onClick={display}>Login</button>

      <div className="signup">
        <p>
          Don't have an account? <br />
          <Link className="signuplink" to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
    </center>
    </>
  );
}

export default LoginPage;