import { useState } from "react";
import { TodoType } from "./interfaces";
import { useDispatch } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { deleteTodo, editTodo, toggleTodo } from "./redux/action";

export default ({ todo }: { todo: TodoType }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(editTodo({ id: todo.id }));
  };

  function handleSaveClick() {
    dispatch(editTodo({ id: todo.id, title, description }));
  }

  function handleCancelClick() {
    dispatch(editTodo({ id: todo.id }));
  }

  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  const handleToggle = () => {
    dispatch(toggleTodo({ id: todo.id }));
  };

  return (
    <li key={todo.id}>
      <div className="todo-item">
        <label>
          <input
            type="checkbox"
            className="todo-checkbox"
            onChange={handleToggle}
          />
          {todo.editing ? (
            <>
              <input
                type="text"
                className="todo-title"
                defaultValue={todo.title}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                // onBlur={() => handleSaveClick()}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSaveClick();
                  } else if (event.key === "Escape") {
                    handleCancelClick();
                  }
                }}
                autoFocus
              />
              <input
                type="text"
                className="todo-description"
                defaultValue={todo.description}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                // onBlur={() => handleSaveClick()}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSaveClick();
                  } else if (event.key === "Escape") {
                    handleCancelClick();
                  }
                }}
              />
            </>
          ) : (
            <span
              className="todo-title"
              style={
                todo.completed
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {todo.title + ":  " + todo.description}
            </span>
          )}
        </label>
        <button className="todo-delete" onClick={handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <button className="todo-edit" onClick={handleEditClick}>
          <i className="fas fa-edit"></i>
        </button>
      </div>
    </li>
  );
};
