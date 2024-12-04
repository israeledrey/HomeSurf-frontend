import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';



const SignIn = () => {
  let navigate = useNavigate();
  const [userName, setUserName] = useState({ name: "", password: "" });

  const handleChange = async () => {

    try {
      const response = await axios.post("http://localhost:3000/api", userName);

      if (response.status === 200) {
        navigate("/Home");
      }
    }
    catch (error) {
      console.log(error);
      console.log("dbfjbsd");
      alert("error");
    }
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-content">
        <h1>Sign in</h1>
        <div className="sign-in-box">
          <input
            type="text"
            placeholder="name"
            value={userName.name}
            onChange={(e) => setUserName({ ...userName, name: e.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            value={userName.password}
            onChange={(e) => setUserName({ ...userName, password: e.target.value })}
          />
          <button onClick={() => handleChange()}>sign in </button>
          <p>Don't have an account?</p>
          <Link to="/SignUp" className="custom-link"> Sign up </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
