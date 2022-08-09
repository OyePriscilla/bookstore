import React from 'react';
import PropTypes from 'prop-types';

export default class Book extends React.PureComponent {
  render() {
    const { author, title } = this.props;
    return (
      <div className="panel-bg">
        <div className="bookCard">
          <p style={{ margin: '15px 8px' }}>Action</p>
          <p style={{ margin: '5px 8px', fontWeight: '700', fontSize: '24px' }}>{title}</p>
          <p style={{ color: '#4386bf', margin: '5px 8px' }}>{author}</p>
          <div style={{ margin: '15px 0' }} className="action-buttons">
            <button type="button">Comments</button>
            <button type="button">Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
