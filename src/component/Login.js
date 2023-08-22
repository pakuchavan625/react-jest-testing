import React, { useState } from "react";


const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({})
  const [loader, setLoader] = useState(false)


  const handleSubmit = async (e) =>{
    e.preventDefault()
    setLoader(true)
    try{
        const  res = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const data = await res.json()
        console.log(data)
        setUserData(data)
    }
    catch(error){
        setError(true)
    }
  }
  return (
    <div className="container">
        <h4>{userData.name}</h4>
      <form className="formdata">
        <input
          type="text"
          className="inputFiled"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="inputFiled"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          disabled={!username || !password}
          className="loginButton"
          onClick={handleSubmit}
        >
          {loader ? 'Please wait' : 'Login'}
        </button>
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Something went wrong
        </span>
      </form>
    </div>
  );
};

export default Login;
