/* eslint-disable react/self-closing-comp */
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
      <ul className="bookCard">
        <li>
          <div className="bookInfo">
            <div>
              <p style={{ margin: '15px 8px', fontFamily: 'Montserrat, sans-serif' }}>Action</p>
              <p style={{
                margin: '5px 8px', fontWeight: '700', fontSize: '22px', fontFamily: 'Roboto Slab, serif',
              }}
              >
                {title}
              </p>
              <p style={{
                color: '#4386bf', margin: '5px 8px', fontWeight: '300', fontFamily: 'Roboto Slab, serif', fontSize: '14px',
              }}
              >
                {author}
              </p>
              <div style={{ margin: '15px 0' }} className="action-buttons">
                <button type="button">Comments</button>
                <button type="button" onClick={onRemoveBook}>Remove</button>
                <button type="button">Edit</button>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="completePerCent">
                <div className="cirleBar">
                </div>
                <div style={{ marginLeft: '10px' }} className="percent">
                  <p style={{ fontFamily: 'Montserrat, sans-serif' }}>64%</p>
                  <p style={{ fontFamily: 'Montserrat, sans-serif' }}>Completed</p>
                </div>
              </div>
              <div style={{ marginRight: '40px' }} className="progress">
                <p style={{
                  fontFamily: 'Roboto Slab, serif', fontSize: '13px', color: '#121212', opacity: '0.5',
                }}
                >
                  CURRENT CHAPTER
                </p>
                <p style={{
                  fontFamily: 'Roboto Slab, serif', fontSize: '16px', color: '#121212', opacity: '0.6',
                }}
                >
                  Chapter 17
                </p>
                <button type="button">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
