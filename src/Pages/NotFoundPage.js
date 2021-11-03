import React from 'react';
import { useHistory } from 'react-router';
import { Button } from 'semantic-ui-react';

const NotFoundPage = () => {

  let history = useHistory();
  

  return (
    <div>
      <p>Page Not Found!</p>
      <Button color="blue" type='submit' onClick={() => history.push('/')}>Submit</Button>
    </div>
  );
}

export default NotFoundPage;