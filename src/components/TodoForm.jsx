import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setEditTodo, updateTodo } from "../redux/reducer/todoSlice";

const initialState = {
  title: "",
};

const TodoForm = () => {
  const dispatch = useDispatch();
  const { editingTodos } = useSelector((state) => state?.todo);
  const [task, setTask] = useState(initialState);
  const [editTask, setEditTask] = useState(initialState);

  const handleChange = (e) => {
    if (editingTodos) {
      const { name, value } = e.target;
      setEditTask({ ...editTask, [name]: value });
    } else {
      const { name, value } = e.target;
      setTask({ ...task, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTodos) {
      dispatch(updateTodo({ id: editingTodos.id, title: editTask.title }));
      dispatch(setEditTodo(null));
      setEditTask(initialState);
      toast.success("todo updated");
    } else {
      dispatch(addTodo(task));
      setTask(initialState);
      toast.success("todo added");
    }
  };

  return (
    <div>
      {editingTodos ? (
        <div className="w-full flex justify-center ">
          <form onSubmit={handleSubmit}>
            <div className=" border-2 w-full flex rounded-md ">
              <input
                name="title"
                className="w-[220px] md:w-[310px] p-1 focus:outline-none focus:border-none focus:outline-gray-200 focus:rounded-md pl-4 text-sm text-gray-500"
                type="text"
                value={editTask?.title || editingTodos?.title}
                onChange={handleChange}
                placeholder="add todos"
                required
              />
              <button
                className={`${editingTodos ? "focus:outline-indigo-500 focus:rounded-md" :  "focus:outline-gray-200 focus:rounded-md"} bg-gray-300 rounded inline-flex p-1 px-4 border-l-4  hover:bg-gray-200 border-gray-950 hover:text-md hover:font-medium`}
                type="submit"
              >
                Add Todo
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="w-full flex justify-center ">
          <form onSubmit={handleSubmit}>
            <div className=" border-2 w-full flex rounded-md ">
              <input
                name="title"
                className="w-[220px] md:w-[310px] p-1 focus:outline-none focus:border-none focus:outline-gray-200 focus:rounded-md pl-4 text-sm text-gray-500"
                type="text"
                value={task.title}
                onChange={handleChange}
                placeholder="add todos"
                required
              />
              <button
                className=" bg-gray-300 rounded inline-flex p-1 px-4 border-l-4 focus:outline-gray-200 focus:rounded-md hover:bg-gray-200 border-gray-950 hover:text-md hover:font-medium"
                type="submit"
              >
                Add Todo
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TodoForm;
