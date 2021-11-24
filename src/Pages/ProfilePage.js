import React from 'react';

const ProfilePage = () => {

  const creds = JSON.parse(localStorage.getItem("trackerCreds"))

  // profile page should have generic card info

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{creds.username}'s Profile</h1>
      <h3>Share your collection with this link!</h3>
      <h3>https://pokebook.shujaatazim.com/collection/{creds.id}</h3>
    </div>
  );
}

export default ProfilePage;