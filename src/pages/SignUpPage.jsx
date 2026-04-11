import { useState } from "react";
import '../assets/cssfiles/SignUpPage.css'; 

function SignUpPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    
    
    function display(){
        console.log(email);
        console.log(password);
        console.log(name);
    }


    return(
        <>
        <center>
        <div className="login-signup-box">

        <h1>GATHERLY</h1>
        <h3>Sign-Up</h3>
        <input type="text" placeholder="Name" value={name} required onChange={(e) => setName(e.target.value)} /><br />
        <input type="email" placeholder="Email" value={email } required onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} /><br />
        <button type="submit" onClick={display}>Create an account</button> <br />
        <p>Join us and start your journey!</p>


        </div>
        </center>
        </>
    )
}
export default SignUpPage;