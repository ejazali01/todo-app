import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { isChecked, removeTodo, setEditTodo } from "../../redux/reducer/todoSlice";

const AllTodos = () => {
  const dispatch = useDispatch();
  const {filteredItems: todos , editingTodos} = useSelector((state) => state?.todo);

  const handleChecked = (id) => {
    dispatch(isChecked(id));
  };

  const handleunChecked = (id) => {
    dispatch(isChecked(id));
  };

  return (
    <>
      <div
        id="style-3"
        className="w-full bg-white  rounded-md h-[70vh] overflow-y-auto scrollbar "
      >
        <div className="">
          {todos &&
            todos.map((todo) => (
              <ul key={todo.id} className="flex items-center justify-between">
                <li className="">
                  {todo?.checked ? (
                    <button
                      onClick={() => handleunChecked(todo.id)}
                      className=" w-full text-xl hover:scale-105 transition-all ease-in-out duration-700 text-green-400 "
                    >
                      <IoMdCheckmarkCircle />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleChecked(todo.id)}
                      className=" text-xl hover:scale-105 transition-all ease-in-out duration-700 text-gray-200 "
                    >
                      <FaCircle />
                    </button>
                  )}
                </li>

                <li className="text-pretty">
                  <button
                    className={`${
                      todo?.checked ? "line-through text-gray-400" : ""
                    } text-left `}
                  >
                    {todo?.title}
                  </button>
                </li>

                <li className="flex items-center gap-3 py-1.5 px-2">
                  <button
                    disabled={todo?.checked}
                    onClick={() => dispatch(setEditTodo(todo))}
                    className={`${
                      todo?.checked ? "text-gray-400" : ""
                    } text-xl hover:scale-105`}
                  >
                    <CiEdit className={`${editingTodos && todo.id  === editingTodos.id ? "text-indigo-400" : ""}`} />
                  </button>
                  <button onClick={() => dispatch(removeTodo(todo))} className="text-xl text-red-400 hover:text-md hover:scale-105 hover:text-red-500">
                    <MdDeleteOutline />
                  </button>
                </li>
              </ul>
            ))}
        </div>
      </div>
    </>
  );
};

export default AllTodos;
