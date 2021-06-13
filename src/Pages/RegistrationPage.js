import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import { PokemonCards } from '../Data/PokemonCards';

const RegistrationPage = props => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  let history = useHistory();

  const handleRegistration = e => {
    e.preventDefault();
    let newUser = {
      "username": username,
      "password": password,
      "cards_attributes": PokemonCards
    }

    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ user: newUser })
    })
    .then(resp => resp.json())
    .then(data => localStorage.setItem("trackerCreds", JSON.stringify(data)))
    .then(() => props.setUser(JSON.parse(localStorage.getItem("trackerCreds"))))
    .then(() => history.push('/profile'))
  }

  return (
    <div style={{ textAlign: "center", marginLeft: "30rem", marginRight: "30rem" }}>
      <img src="https://fontmeme.com/permalink/210612/680c3a9e420df05eff3e08d6937137d0.png" alt="pokebook" border="0" />
      <h4>Please register:</h4>
      <br />
      <br />
      <Form onSubmit={e => handleRegistration(e)}>
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
      <Button color="blue" onClick={() => history.push('/login')}>Login</Button>
    </div>
  );
}

export default RegistrationPage;