import React from 'react';

const ProfilePage = () => {

  const creds = JSON.parse(localStorage.getItem("trackerCreds"))

  return (
    <div>
      <p>
        name: {creds.username}
      </p>
      <p>
        token: {creds.jwt}
      </p>
    </div>
  );
}

export default ProfilePage;