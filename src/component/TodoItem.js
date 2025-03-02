import React from "react";

export const TodoItem = (props) => {
    return (
    <div>
        <h5>{props.todo.title}</h5>
        <p>{props.todo.body}</p>
        <button className="btn btn-danger">Delete</button>
    </div>
    );
}