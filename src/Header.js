import React from 'react';
import { connect } from 'react-redux';
import Create from './Create';
import { Link } from 'react-router-dom';

const Header = ({ bikes, manufacturers }) => {
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        <Link to="/">Bikes I have owned</Link>
      </h1>
      <h2
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Link to="/bikes">Bikes({bikes.length})</Link>
        <Link to="/manufacturers">
          Manufacturers(
          {manufacturers.length})
        </Link>
        {<Create />}
      </h2>
    </div>
  );
};

export default connect((state) => state)(Header);
