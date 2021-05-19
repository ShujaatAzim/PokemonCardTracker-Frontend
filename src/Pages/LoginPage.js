import React from 'react';
import LoginForm from '../Components/LoginForm';

const LoginPage = props => {
  return (
    <div>
      <LoginForm setUser={props.setUser} />
    </div>
  );
}

export default LoginPage;