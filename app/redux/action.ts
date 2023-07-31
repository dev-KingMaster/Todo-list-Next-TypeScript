import { createAction } from "redux-actions";

export const ADD_TODO = "ADD_TODO";
export const addTodo = createAction(ADD_TODO);

export const EDIT_TODO = "EDIT_TODO";
export const editTodo = createAction(EDIT_TODO);

export const DELETE_TODO = "DELETE_TODO";
export const deleteTodo = createAction(DELETE_TODO);

export const TOGGLE_TODO = "TOGGLE_TODO";
export const toggleTodo = createAction(TOGGLE_TODO);
