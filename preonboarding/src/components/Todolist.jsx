import React, { useState } from "react";
import { instance } from "../api/request";
import Todo from "./Todo";

const Todolist = ({ todolist, deleteTodo, updateTodo, onToggle }) => {
  return (
    <div className="list_container">
      {todolist?.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todos={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
};

export default Todolist;
