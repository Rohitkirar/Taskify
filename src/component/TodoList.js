import React from "react";
import { TodoItem } from "./TodoItem";
import { useState, useEffect } from "react";

export const TodoList = () => {
  const [todos , setTodos] = useState([
    {
      id: 0,
      title: "todo1",
      body: "todo description"
    },
    {
        id:1,
        title:"todo2",
        body: "todo description"
    },
    {
        id:2,
        title:"todo3",
        body:"todo description"
    },
    {
        id:3,
        title:"todo4",
        body:"todo description"
    },
    {
        id: 4,
        title:"todo5",
        body:"todo description"
    }
  ]);

  console.log(todos);
  return (
  <div>
    <h4>Todo List</h4>
    {todos.map(function(todo){
        return (<>
        <TodoItem todo={todo} key={todo.id} />
        <hr/>
        </>);
    })}
  </div>
  );
};
