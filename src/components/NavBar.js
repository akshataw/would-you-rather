import React from 'react';
import { Link } from 'react-router-dom';

const divStyle = {
  background: "#CCD1D1",
  borderRadius: "8px",
}

const butnStyle = {
  height:"50px",
  width: "90px",
}

const listStyle = {
  float:"right",
  marginRight:"70px",
}

const NavBar = () => {
    return(
      <div className="navs" style={divStyle}>
       <ul className="nav nav-pills">
        <li><Link to="/">Would You Rather?</Link></li>
        <li><Link to="/me">Home</Link></li>
        <li><Link to="/add">New Question</Link></li>
        <li><Link to="/myQuestion">My Question</Link></li>
        <li><Link to="/leaderboard">LeaderBoard</Link></li>
        <li style={listStyle}>
          <Link to="/logout">
            <button className="btn btn-primary" style={butnStyle}>Logout</button>
          </Link>
        </li>
      </ul>
    </div>
    )
}

export default NavBar;
