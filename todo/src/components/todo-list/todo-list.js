import React from "react";
import './todo-list.css'
import TodoListItem from "./todo-list-item/todo-list-item";

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {
        return (
            <li key={item.id}>
                <TodoListItem 
                    id={item.id}
                    label={item.label} 
                    important={item.important}
                />
            </li>);
    });

    return (
        <ul>
            { elements }
        </ul>
    )
}

export default TodoList;