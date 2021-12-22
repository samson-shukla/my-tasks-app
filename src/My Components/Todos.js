import React from 'react';
import {TodoItem} from "./TodoItem";
import '../index.css';

export const Todos = (props) => {
    let myStyle = {
        marginBottom: "20vh"
    }
    return (
        <div className="container d-flex-column" style={myStyle}>            
            <h3 className='my-3'>Todos List</h3>
            {props.todos.length === 0 ? "You have no Tasks. Set now?" : 
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                })
            }
        </div>
    )
}
