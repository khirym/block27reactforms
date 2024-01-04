import { useState } from "react";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
const API = "https://fsa-jwt-practice.herokuapp.com/signup"

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
        const response = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        console.log(result);
    } catch (error) {
        setError(error.message)
    }
  }

  return (
    <div>
      <h2>Sign Up</h2>
      { error && <p>{error}</p> }
      <form onSubmit={handleSubmit}>
        <label>
          Username: {" "} <input value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label>
          Password: {" "} <input value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
