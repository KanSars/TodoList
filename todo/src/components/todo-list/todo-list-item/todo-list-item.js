import React, {useState} from "react";

import './todo-list-item.css';

const TodoListItem = ({id, label, important = false}) => {

    const [isDone, setDone] = useState(false);
    const [isImportant, setImportant] = useState(true);

    const onToggleDone = () => {
        setDone((d) => !d);
    }

    const onToggleImportant = () => {
        console.log('onDelButtonClick');
        setImportant((i) => !i)
    }

    const listStyle = {
        color: important ? 'tomato' : 'black',
    }

    let classNames = '';

    if(isDone) {
        classNames += ' done'
    }

    if(isImportant) {
        classNames += ' important'
    }

    return (
        <div className="item-container">
            <span 
                id={id}
                className={classNames}
                style={listStyle}
                onClick={onToggleDone}>
                    {label}    
            </span>
            <div className="buttons-container">
                <button className={'button-del'} onClick={()=> console.log('onDel')}>
                    Del
                </button>
                <button className={'button-important'} onClick={onToggleImportant}>
                    Imp
                </button>
            </div>
        </div>
        
    )
}

export default TodoListItem;