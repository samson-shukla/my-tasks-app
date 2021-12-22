import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./My Components/Header";
import { Footer } from "./My Components/Footer"; //Using {} bevause Footer is not Export default
import { Todos } from "./My Components/Todos";
import { AddTodo } from "./My Components/AddTodo";
import { About } from "./My Components/About";

import { BrowserRouter, Routes, Route } from "react-router-dom"; //Using React Router v6

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on Delete of todo ", todo.sno);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    if (localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const addTodo = (title, desc) => {
    console.log("Adding a Todo ", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  let mainStyle = {
    height: "100vh",
    backgroundColor: "#1F1C2C"
  };

  return (
    <>
      <BrowserRouter>
        <div style={mainStyle}>
          <Header title="MyTasks" />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              }
            />
            <Route path="/About" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
