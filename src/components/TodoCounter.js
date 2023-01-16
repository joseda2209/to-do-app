import React from "react";
import "../styles/TodoCounter.css";

function TodoCounter() {
  let date = new Date().toDateString();
  return (
    <section className="TodoHeader">
      <div className="firstDiv">
        <h2>{date}</h2>
        <h2 className="TodoCounter">3 task left</h2>
      </div>
      <h2 className="TodoTitle">Todo List</h2>
    </section>
  );
}

export { TodoCounter };
