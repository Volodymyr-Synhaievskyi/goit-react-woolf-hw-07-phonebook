import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const hangleChangeFilter = value => {
    dispatch(setFilter(value));
  };

  return (
    <label className={style.filterLabel}>
      Find contacts by name <br />
      <input
        type="text"
        value={filter}
        onChange={e => {
          hangleChangeFilter(e.currentTarget.value);
        }}
      />
    </label>
  );
};

export default Filter;
