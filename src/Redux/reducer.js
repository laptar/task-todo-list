import { combineReducers, createSlice } from '@reduxjs/toolkit';

const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState: [],
  reducers: {
    addToDo: (state, action) => [action.payload, ...state],
    checkedToDo: (state, action) => {
      state.forEach(el => {
        if (el.id === action.payload) {
          el.cheack = !el.cheack;
        }
      });
    },
    deleteToDo: (state, action) => {
      return state.filter(el => el.id !== action.payload);
    },
    updateToDo: (state, action) => {
      state.forEach(el => {
        if (el.id === action.payload.id) {
          el.name = action.payload.name;
          el.description = action.payload.description;
          el.date = action.payload.date;
          el.time = action.payload.time;
        }
      });
    },
  },
});

const modalIsOpenSlice = createSlice({
  name: 'modalIsOpen',
  initialState: false,
  reducers: {
    togleModal: state => !state,
  },
});
const itemUpdateSlice = createSlice({
  name: 'modalIsUpdate',
  initialState: '',
  reducers: {
    updateTrue: (_, action) => action.payload,
    updateFalse: (_, action) => '',
  },
});

export const reducer = combineReducers({
  toDoList: toDoListSlice.reducer,
  modalIsOpen: modalIsOpenSlice.reducer,
  modalIsUpdate: itemUpdateSlice.reducer,
});

export const { togleModal } = modalIsOpenSlice.actions;
export const { addToDo, checkedToDo, deleteToDo, updateToDo } =
  toDoListSlice.actions;
export const { updateTrue, updateFalse } = itemUpdateSlice.actions;
