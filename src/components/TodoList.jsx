import React, { useEffect, useState } from "react";
import AllTodos from "./tabs/AllTodos";
import { useDispatch, useSelector } from "react-redux";
import { setTabs } from "../redux/reducer/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const { currentTab } = useSelector(
    (state) => state?.todo
  );

  useEffect(() => {
    dispatch(setTabs("alltodos"));
  }, [dispatch]);

  const handleTabs = (tabs) => {
    dispatch(setTabs(tabs));
  };

  return (
    <>
      <div className=" ">
        <div className="flex flex-col ">
          <h1 className=" text-md font-medium py-2">TodoList</h1>
          <div className="flex items-center gap-2 ">
            <button
              onClick={() => handleTabs("allTodos")}
              className={`${
                currentTab === "allTodos" ? "border-green-500 border-l-4 " : ""
              } bg-gray-200 p-2 rounded-md text-center font-medium text-gray-500 text-sm focus:outline-gray-200 focus:rounded-md hover:bg-gray-200 hover:text-md hover:font-medium`}
            >
              All Todos
            </button>
            <button
              onClick={() => handleTabs("Checked")}
              className={`${
                currentTab === "Checked" ? "border-green-500 border-l-4" : ""
              } bg-gray-200 p-2 rounded-md text-center font-medium text-gray-500 text-sm focus:outline-gray-200 focus:rounded-md hover:bg-gray-200 hover:text-md hover:font-medium`}
            >
              Checked
            </button>
            <button
              onClick={() => handleTabs("unChecked")}
              className={`${
                currentTab === "unChecked" ? "border-green-500 border-l-4" : ""
              } bg-gray-200 p-2 rounded-md text-center font-medium text-gray-500 text-sm focus:outline-gray-200 focus:rounded-md hover:bg-gray-200 hover:text-md hover:font-medium`}
            >
              Un Checked
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <AllTodos />
      </div>
    </>
  );
};

export default TodoList;
