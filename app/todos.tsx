import React, { useState } from "react";
import { TodoType } from "./interfaces";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./todo";
import { addTodo } from "./redux/action";

interface StateType {
  todos: TodoType[];
}

export default () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const todos = useSelector((state: StateType) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo({ title, description }));
    setTitle("");
    setDescription("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <>
      <form onKeyDown={handleKeyDown}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="form-input"
        />

        <label htmlFor="description">Description:</label>
        <input
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="form-input"
        />
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
};
