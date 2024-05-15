import React from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

const AddTodo = () => {
  return (
    <div className="flex flex-col gap-4 max-w-md m-auto p-2 ">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default AddTodo;
