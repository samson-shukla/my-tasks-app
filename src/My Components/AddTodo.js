import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();     //To prevent page from Reloading on click on Submit button
        if(!title){
            alert("Title cannot be blank");
        }
        else{
            addTodo(title, desc);
        }

        setTitle("");
        setDesc("");
    }
    return (
        <div className='container my-5'>
            <form onSubmit={submit}>
                <h3>Add a Task</h3>
                <div className="mb-3">
                    <label htmlFor="title" className='form-label'>Task</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" placeholder="Enter Task"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc">Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" placeholder="Add a Description"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Task</button>
            </form>
        </div>
    )
}
