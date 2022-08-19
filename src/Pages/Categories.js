import { useSelector, useDispatch } from 'react-redux';
import { checkBookStatus } from '../redux/categories/categories';

function Categories() {
  const content = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  const onCheckStatus = () => {
    dispatch(checkBookStatus());
  };

  return (
    <div>
      <button
        onClick={onCheckStatus}
        type="button"
        style={{
          cursor: 'pointer', backgroundColor: '#0290ff', color: '#fff', borderRadius: '5px', display: 'block', margin: '50px 100px', border: 'none', padding: '15px',
        }}
      >
        Check Book Status
      </button>
      <p style={{ margin: '0 100px', fontSize: '32px', fontWeight: '700px' }}>{content}</p>
    </div>
  );
}

export default Categories;
