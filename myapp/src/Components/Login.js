import React, { useState } from "react";
import "./Login.css";
import axios from './axios';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await axios.post('/login', {
        "email": email,
        "password": password,
      }).then(res => {
        if (res.data.user.type === "HR") {
          history.push("/home/HR/" + res.data.user.id);
        }
        else if (res.data.user.type === "CI") {
          history.push("/home/CI");
        }
        else if (res.data.user.type === "HOD") {
          history.push("/home/HOD");
        }
        // console.log(res);
        localStorage.setItem("id", res.data.user.id);
        localStorage.setItem("token", res.data.token);
        // console.log(localStorage.getItem("token"));
        localStorage.setItem("type", res.data.user.type);
      }).catch(err => {
        alert(err.response.data.msg);
      });
    }
    catch (err) {
      alert("DB Server not connected");
    }

    setEmail("");
    setPassword("");
  }

  // useEffect(() => {
  //   axios.post('http://localhost:1000/index.js').then()
  // }, [])

  return (
    <div className="Login">
      <div className="LoginContainer">
        <form className="LoginForm" onSubmit={handleSubmit}>
          <p> Email </p>
          <input placeholder="Enter your Email..." type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <p> Password </p>
          <input placeholder="Enter your Password..." type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <br />
          <button type="submit" disabled={!validateForm()}> Login </button>
        </form>
      </div>
    </div>
  );
}

//export default Login;