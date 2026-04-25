import { useState } from "react";
import '../assets/cssfiles/SignUpPage.css';

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function display() {
    console.log(name);
    console.log(email);
    console.log(password);
  }

  return (
    <>
    <center>
    <div className="Signup-title">
    <h1>GATHERLY</h1>
    <h3>Sign-Up</h3>
    </div>

    <div className="signup-box">
      

      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />

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

      <button onClick={display}>Create an account</button>

      <p>Join us and start your journey!</p>
    </div>
    </center>
    </>
  );
}

export default SignUpPage;