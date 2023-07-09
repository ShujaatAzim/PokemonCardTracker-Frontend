import React from 'react';

const LoadingScreen = props => {
  const { loadingCode } = props;

  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src="https://fontmeme.com/permalink/210612/680c3a9e420df05eff3e08d6937137d0.png"
        className="logo"
        alt="pokebook logo"
        border="0"
      />
      <br />
      <br />
      {loadingCode === 'new user' ? 'Creating new user...' : 'Loading...'}
    </div>
  );
};

export default LoadingScreen;
