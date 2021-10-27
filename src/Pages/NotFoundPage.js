import React from 'react';
import { useHistory } from 'react-router';

const NotFoundPage = () => {

  let history = useHistory();

  return (
    <div>
      <p>Page Not Found!</p>
      <button onClick={() => history.push('/')}>Home</button>
    </div>
  );
}

export default NotFoundPage;