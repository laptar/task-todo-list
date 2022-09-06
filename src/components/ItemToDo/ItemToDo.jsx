import { useDispatch } from 'react-redux';
import { checkedToDo, deleteToDo, togleModal, updateTrue } from 'Redux/reducer';
import s from './ItemToDo.module.css';

export const ItemToDo = props => {
  const { id, name, description, cheack, date, time } = props;
  const dispatch = useDispatch();
  const handleChecked = () => {
    dispatch(checkedToDo(id));
  };
  const handleDelete = () => {
    dispatch(deleteToDo(id));
  };
  const handleUpdate = () => {
    dispatch(updateTrue(id));
    dispatch(togleModal());
  };
  return (
    <li className={s.item}>
      <div className={s.itemUpd}>
        <button className={s.btn} type="button" onClick={handleUpdate}>
          Update
        </button>
        <div className={s.main}>
          <p className={s.name}>{name}</p>
          <p className={s.description}>{description}</p>
          <label className={s.cheack}>
            <input type="checkbox" checked={cheack} onChange={handleChecked} />
            Have you done?
          </label>
          <div className={s.date}>
            <p>{date}</p>
            <p>{time}</p>
          </div>
        </div>
      </div>

      <button className={s.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
