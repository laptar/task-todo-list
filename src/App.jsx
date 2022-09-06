import { useSelector } from 'react-redux';

import { Header } from './components/header/Header';
import { Modal } from 'components/Modal/Modal';
import { AddForm } from 'components/AddForm/AddForm';
import { ListToDo } from 'components/ListToDo/ListToDo';
export const App = () => {
  const modalIsOpen = useSelector(state => state.modalIsOpen);
  return (
    <div className="container">
      <Header></Header>
      <ListToDo />
      {modalIsOpen && (
        <Modal>
          <AddForm />
        </Modal>
      )}
    </div>
  );
};
