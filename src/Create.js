import React from 'react';
import { connect } from 'react-redux';

const Create = () => {
  return <button>create</button>;
};

export default connect((state) => state)(Create);
