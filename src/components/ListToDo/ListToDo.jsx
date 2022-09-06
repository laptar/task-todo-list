import { useSelector } from 'react-redux';
import s from './ListToDo.module.css';
import { ItemToDo } from 'components/ItemToDo/ItemToDo';

export const ListToDo = () => {
  const toDoList = useSelector(state => state.toDoList);
  return (
    <ul className={s.list}>
      {toDoList.map(el => (
        <ItemToDo key={el.id} {...el} />
      ))}
    </ul>
  );
};
