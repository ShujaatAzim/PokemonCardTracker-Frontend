import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const LoginForm = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (username, password) => {
    console.log(username, password)
  }

  return (
    <Form onSubmit={() => handleLogin(username, password)}>
      <Form.Field>
        <label>Username</label>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  );
}

export default LoginForm;