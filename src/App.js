import './App.css';
import Header from './My Components/Header';
import {Footer} from "./My Components/Footer"; //Using {} bevause Footer is not Export default
import {Todos} from "./My Components/Todos";
import React, { useState } from 'react';
import {AddTodo} from "./My Components/AddTodo";

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Main Task",
      desc: "Complete watching React Youtube tutorial"
    }
  ]);

  const onDelete = (todo) =>{
    console.log("I am on Delete of todo ", todo.sno);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  };

  const addTodo = (title, desc) => {
    console.log("Adding a Todo ", title, desc);
    let sno;
    if(todos.length===0){
      sno = 1;
    }
    else{
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setTodos([...todos, myTodo]);

    console.log(myTodo);
  }

  return (     
    <>
    <Header title = "MyTasks"/>
    <AddTodo addTodo = {addTodo}/>
    <Todos todos = {todos} onDelete = {onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
