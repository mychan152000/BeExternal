import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import "../../App.css"

export default function LandingPage() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "test1",
      password: "123456"
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });

      } else {
        setIsSubmitted(true);
        localStorage.setItem("isLogin", "true");
        window.location.reload();
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Đăng nhập" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app" style={ HeaderStyle }>
      <div className="login-form" style={{borderRadius: 25}}>
        <h1 className="title" style={{marginBottom: 0}}><b>be</b>Lottery</h1>
        <h2 style={{marginBottom: 0}}>Lottery Ticket Portal</h2> <br/> 
        Đăng nhập bằng email do Be cung cấp
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url('https://wallpaperaccess.com/full/123346.jpg')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

}


