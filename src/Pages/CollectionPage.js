import React from 'react';
import { useParams } from 'react-router-dom';

const CollectionPage = () => {

  const { id } = useParams();

  return (
    <div>
      <p>Collection for user id: {id}</p>
    </div>
  );
}

export default CollectionPage;