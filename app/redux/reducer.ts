import { ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO } from "./action";
import { v4 as uuidv4 } from "uuid";
import { TodoType } from "../interfaces";

const initialState = {
  todos: [],
};

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: {
    title: string;
    description: string;
  };
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: {
    id: string;
  };
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: {
    id: string;
  };
}

interface EditTodoAction {
  type: typeof EDIT_TODO;
  payload: {
    id: string;
    title?: string;
    description?: string;
  };
}

type TodoAction =
  | AddTodoAction
  | EditTodoAction
  | ToggleTodoAction
  | DeleteTodoAction;

export const todoReducer = (
  state: { todos: TodoType[] } = initialState,
  action: TodoAction
) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(action.payload);
      return {
        todos: [
          ...state.todos,
          {
            id: uuidv4(),
            title: action.payload.title,
            description: action.payload.description,
            completed: false,
            editing: false,
          },
        ],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id)
            return {
              ...todo,
              completed: !todo.completed,
            };
          return todo;
        }),
      };
    case EDIT_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              editing: !todo.editing,
              title: action.payload.title ? action.payload.title : todo.title,
              description: action.payload.description
                ? action.payload.description
                : todo.description,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
