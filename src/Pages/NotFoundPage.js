import React from 'react';
import { useHistory } from 'react-router';
import { Button } from 'semantic-ui-react';

const NotFoundPage = () => {

  // add checks for being logged in. if yes, then button should go to collection. if no, then to login screen.
  
  let history = useHistory();
  
  return (
    <div style={{ textAlign: "center", marginLeft: "10%", marginRight: "10%" }}>
      <img src="https://fontmeme.com/permalink/210612/680c3a9e420df05eff3e08d6937137d0.png" className="logo" alt="pokebook" border="0" />
      <br />
      <br />
      <h1>Page Not Found!</h1>
      <br />
      <Button color="blue" onClick={() => history.push('/')}>Home</Button>
    </div>
  );
}

export default NotFoundPage;