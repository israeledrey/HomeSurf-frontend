import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const SignUp = () => {
  let navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ name: "", password: "", email: "", phone: "" });
  const handleChange = async () => {

    try {
      const response = await axios.post("http://localhost:3000/api/users/signup", userDetails);

      if (response.status === 200) {
        alert("Your account has been created.")
        navigate("/");
      }
    }
    catch (error) {
      console.log(error);
      alert("error");
    }
  };


  return (
    <div className="sign-in-container">
      <div className="sign-in-content">
        <h1>Sign up</h1>
        <form action="">
        <div className="sign-in-box">
          <input
          required={true}
            type="text"
            placeholder="name"
            value={userDetails.name}
            onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
          />
          <input
          required={true}
            type="password"
            placeholder="password"
            value={userDetails.password}
            onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
          />
          <input
          required={true}
            type="email"
            placeholder="email"
            value={userDetails.email}
            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
          />
          <input
          required={true}
            type="number"
            placeholder="phone number"
            value={userDetails.phone}
            onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
          />
          <button onClick={() => handleChange()}>sign up </button>
          <p>Already have an account?</p>
          <Link to="/SignIn" className="custom-link"> Sign in </Link>
        </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp