import { useDispatch } from 'react-redux';

import { togleModal } from 'Redux/reducer';
import s from './Header.module.css';

export const Header = () => {
  const dispatch = useDispatch();
  const handleAddNewTask = () => {
    dispatch(togleModal());
  };
  return (
    <div className={s.header}>
      <button className={s.addBtn} type="button" onClick={handleAddNewTask}>
        Add new task
      </button>
    </div>
  );
};
