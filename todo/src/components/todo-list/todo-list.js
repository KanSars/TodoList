import React from "react";
import TodoListItem from "./todo-list-item/todo-list-item";

const TodoList = () => {
    const state = [
        {id: 1, label: 'Drink cofee', important: false},
        {id: 2, label: 'todo App', important: false},
        {id: 3, label: 'meditate', important: true},
    ]
    return (
        <ul>
            <li><TodoListItem label={state[0].label}/></li>
            <li><TodoListItem label={state[1].label}/></li>
            <li><TodoListItem label={state[2].label}/></li>
        </ul>
    )
}

export default TodoList;