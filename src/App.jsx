import React from "react";
import "./App.css";
import AddTodo from "./pages/AddTodo";

function App() {
  return (
    <>
      <div className="w-full p-4 sm:max-w-screen-xl smp-4 md:p-8 m-auto">
        <AddTodo />
      </div>
    </>
  );
}

export default App;
