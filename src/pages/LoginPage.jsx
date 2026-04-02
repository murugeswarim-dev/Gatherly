import { useState } from "react";

function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function display(){
        console.log(email);
        console.log(password);
    }


    return(
        <>
        <center>
        <div className="login-box">
        <h1>GATHERLY</h1>
        <h3>Find your people. Do real things.</h3>

        

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button type="submit" onClick={display}>Login</button>


        <div className="signup">

        <p>Don't have an account?</p>
        <a  href="">Sign Up</a>
        </div>

        </div>

        </center>
        </>
    )
}

export default LoginPage;