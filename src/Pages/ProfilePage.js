import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import url from '../urlHelper';

const ProfilePage = () => {

  const creds = JSON.parse(localStorage.getItem("trackerCreds"));
  const history = useHistory();

  const deleteAccount = e => {
    e.preventDefault();
    fetch(`${url}/users/${creds.id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${creds.jwt}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(() => localStorage.removeItem("trackerCreds"))
    .then(() => history.push('/'))
  }

  // profile page should have generic card info

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{creds.username}'s Profile</h1>
      <h3>Share your collection with this link!</h3>
      <h3>https://pokebook.shujaatazim.com/collection/{creds.id}</h3>
      <br />
      <div>
        { creds.username !== "test" ? <Button color="red" onClick={e => deleteAccount(e)}>Delete Account</Button> : null }
      </div>
    </div>
  );
}

export default ProfilePage;