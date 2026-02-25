import React from 'react';

function AuthHeader({ title, description, campus }) {
  return (
    <div className="header">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{campus}</p>
    </div>
  );
}

export default AuthHeader;