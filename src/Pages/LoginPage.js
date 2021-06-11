import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';

const LoginPage = props => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  let history = useHistory();

  const handleLogin = e => {
    e.preventDefault();
    let loginCredentials = {
      "username": username,
      "password": password
    }

    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ user: loginCredentials })
    })
    .then(resp => resp.json())
    .then(data => localStorage.setItem("trackerCreds", JSON.stringify(data)))
    .then(() => props.setUser(JSON.parse(localStorage.getItem("trackerCreds"))))
    .then(() => history.push("/"))
  }

  return (
    <div style={{ textAlign: "center", marginLeft: "30rem", marginRight: "30rem" }}>
      <h2>Welcome to PokéBook!</h2>
      <h4>Please log in to continue:</h4>
      <br />
      <br />
      <Form onSubmit={e => handleLogin(e)}>
        <Form.Field>
          <label>Username</label>
          <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Field>
        <br />
        <Button color="blue" type='submit'>Submit</Button>
      </Form>
      <br />
      <h4>-- OR --</h4>
      <br />
      <Button color="blue" onClick={() => history.push('/register')}>Register</Button>
    </div>
  );
}

export default LoginPage;