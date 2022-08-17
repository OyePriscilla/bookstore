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
      <button onClick={onCheckStatus} type="button" style={{ display: 'block', margin: '50px auto' }}>
        Check Book Status
      </button>
      <p style={{ margin: '0 370px' }}>{content}</p>
    </div>
  );
}

export default Categories;
