import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.css';

const nav = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
};

const ul = {
  listStyleType: 'none',
  display: 'flex',
};

export default class Header extends React.PureComponent {
  render() {
    const { branding } = this.props;
    return (
      <div className="headerWrapper">
        <nav className="header" style={nav}>
          <h2>{branding}</h2>
          <ul style={ul}>
            <li>
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
        <div className="iconDiv">
          <i className="fa fa-user" style={{ color: '#0290ff' }} />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
