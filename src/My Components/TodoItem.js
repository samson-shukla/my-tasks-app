import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div className='my-4'>
            <h4>{todo.sno}. {todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
            {/* In the above line, in onClick an arrow function is passed to execute the onClick only when the button is clicked and not the time of rendering */}
            <hr/>
        </div>
    )
}
