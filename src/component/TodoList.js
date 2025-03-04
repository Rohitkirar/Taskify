import React from "react";
import { TodoItem } from "./TodoItem";
import { useState, useEffect } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "todo1",
      body: "todo description",
    },
    {
      id: 1,
      title: "todo2",
      body: "todo description ",
    },
    {
      id: 2,
      title: "todo3",
      body: "todo description",
    },
    {
      id: 3,
      title: "todo4",
      body: "todo description",
    },
    {
      id: 4,
      title: "todo5",
      body: "todo description",
    },
  ]);

  console.log(todos);
  return (
    <div className="container my-5">
      <h4 className="text-center">Todo List</h4>
      <hr></hr>
      <div className="d-flex gap-5 flex-wrap">
        {todos.map(function (todo) {
          return (
            <>
              <div className="p-4 mx-4 mt-4 bg-secondary text-white">
                <TodoItem todo={todo} key={todo.id} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
