import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { isChecked } from "../../redux/reducer/todoSlice";

const AllTodos = ({ todos }) => {
  const dispatch = useDispatch();

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
                    <span
                      onClick={() => handleunChecked(todo.id)}
                      className=" w-full text-xl hover:scale-105 transition-all ease-in-out duration-700 text-green-400 "
                    >
                      <IoMdCheckmarkCircle />
                    </span>
                  ) : (
                    <span
                      onClick={() => handleChecked(todo.id)}
                      className=" text-xl hover:scale-105 transition-all ease-in-out duration-700 text-gray-200 "
                    >
                      <FaCircle />
                    </span>
                  )}
                </li>

                <li className="text-pretty">
                  <span className={`${todo?.checked ? "line-through text-gray-400" : ""} text-left `}>{todo?.title}</span>
                </li>

                <li className="flex items-center gap-3 py-1.5 px-2">
                  <span className="text-xl hover:scale-105 ">
                    <CiEdit />
                  </span>
                  <span className="text-xl text-red-400 hover:text-md hover:scale-105 hover:text-red-500">
                    <MdDeleteOutline />
                  </span>
                </li>
              </ul>
            ))}
        </div>
      </div>
    </>
  );
};

export default AllTodos;
