import React from 'react';

const UserBar = ({ user }) => {

  return(
    <div className="container">
     <h1>Hello { user.name }</h1>
    </div>
  )
}

export default UserBar;
