import React, { useState } from 'react';
import LoadingScreen from '../Components/LoadingScreen';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import url from '../urlHelper';

const RegistrationPage = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  let history = useHistory();

  const handleRegistration = (e) => {
    // need to add alerts for user creation failure.
    // look up error handling, since rails already sends a failure response. I think.

    e.preventDefault();
    let newUser = {
      username: username,
      password: password,
    };

    fetch(`${url}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ user: newUser }),
    })
      .then((resp) => resp.json())
      .then((data) =>
        localStorage.setItem('trackerCreds', JSON.stringify(data))
      )
      .then(() =>
        props.setUser(JSON.parse(localStorage.getItem('trackerCreds')))
      )
      .then(() => setLoading(false))
      .then(() => history.push('/profile'));
  };

  return loading ? (
    <LoadingScreen loadingCode={'new user'} />
  ) : (
    <div
      style={{ textAlign: 'center', marginLeft: '30rem', marginRight: '30rem' }}
    >
      <img
        src='https://fontmeme.com/permalink/210612/680c3a9e420df05eff3e08d6937137d0.png'
        alt='pokebook'
        border='0'
      />
      <h4>Please register:</h4>
      <br />
      <br />
      <Form
        onSubmit={(e) => {
          handleRegistration(e);
          setLoading(true);
        }}
      >
        <Form.Field>
          <label>Username</label>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <br />
        <Button color='blue' type='submit'>
          Submit
        </Button>
      </Form>
      <br />
      <h4>-- OR --</h4>
      <br />
      <Button color='blue' onClick={() => history.push('/login')}>
        Login
      </Button>
    </div>
  );
};

export default RegistrationPage;
