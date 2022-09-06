import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import s from './AddForm.module.css';
import { addToDo, togleModal, updateToDo } from 'Redux/reducer';
import { useEffect } from 'react';
export const AddForm = () => {
  const dispatch = useDispatch();
  const modalUpdate = useSelector(state => state.modalIsUpdate);
  const toDoList = useSelector(state => state.toDoList);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (modalUpdate) {
      toDoList.forEach(el => {
        if (el.id === modalUpdate) {
          setName(el.name);
          setDescription(el.description);
        }
      });
    }
  }, [modalUpdate, toDoList]);

  const inputName = {
    name: setName,
    description: setDescription,
  };
  const handleChangeInput = e => {
    const { name, value } = e.target;
    inputName[name](value);
  };
  const resetInpt = () => {
    setName('');
    setDescription('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    const date = new Date();
    if (modalUpdate) {
      dispatch(
        updateToDo({
          id: modalUpdate,
          name,
          description,
          date: date.toDateString(),
          time: date.toLocaleTimeString('it-IT'),
        })
      );
    } else {
      dispatch(
        addToDo({
          id: nanoid(),
          name,
          description,
          cheack: false,
          date: date.toDateString(),
          time: date.toLocaleTimeString('it-IT'),
        })
      );
    }

    resetInpt();
    dispatch(togleModal());
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          name="name"
          type="text"
          required={true}
          value={name}
          onChange={handleChangeInput}
        />
      </label>
      <label>
        Description
        <textarea
          name="description"
          type="text"
          rows="5"
          required={true}
          value={description}
          onChange={handleChangeInput}
        />
      </label>
      <button type="submite">{modalUpdate ? 'Update task' : 'Add task'}</button>
    </form>
  );
};
