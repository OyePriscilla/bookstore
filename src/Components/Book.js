import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { removeBooks } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();

  const { id, author, title } = props;

  const onRemoveBook = () => {
    dispatch(removeBooks(id));
  };

  return (
    <div className="panel-bg">
      <div className="bookCard">
        <p style={{ margin: '15px 8px' }}>Action</p>
        <p style={{ margin: '5px 8px', fontWeight: '700', fontSize: '24px' }}>{title}</p>
        <p style={{ color: '#4386bf', margin: '5px 8px' }}>{author}</p>
        <div style={{ margin: '15px 0' }} className="action-buttons">
          <button type="button">Comments</button>
          <button type="button" onClick={onRemoveBook}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
