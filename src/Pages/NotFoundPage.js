import React from 'react';
import { useHistory } from 'react-router';
import { Button } from 'semantic-ui-react';

const NotFoundPage = () => {

  // add checks for being logged in. if yes, then button should go to collection. if no, then to login screen.
  
  let history = useHistory();
  
  return (
    <div>
      <p>Page Not Found!</p>
      <Button color="blue" onClick={() => history.push('/')}>Home</Button>
    </div>
  );
}

export default NotFoundPage;