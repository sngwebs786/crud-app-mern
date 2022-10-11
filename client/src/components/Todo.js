import React, { useState } from "react";
import MyTodo from "./MyTodoUI";
import axios from "axios";
const Todo = () => {
  const [text, setText] = useState(""); //what user will write in the textfield
  const [list, setList] = useState([]); // it will contain all the todo items
  const [editValue, setEditValue] = useState(null); // this is the new edit value

  const addItem = async () => {
    setList([...list, text]);

    let dataSend = {
      todo: text,
    };


    const res = await fetch("http://localhost:5000/todoRoutes/addTodo", {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })

    .then((res)=>{
      console.log("Response: ",res.status)
    })
    .catch((err)=>{
      console.log(err)
    })
  };

  const deleteItem = async (id) => {
    console.log("Del item running");

    // FRONTEND
  };

  const deleteAll = async () => {
    console.log("Del all item running");
  };

  const editItem = async (id) => {
    console.log("Edit item running");
  };

  const showTodos = async () => {
    console.log("Show item running");
  };

  return (
    <div>
      <MyTodo
        deleteAll={deleteAll}
        addItem={addItem}
        deleteItem={deleteItem}
        editItem={editItem}
        showTodos={showTodos}
        text={text}
        setText={setText}
        list={list}
        setList={setList}
      />
    </div>
  );
};

export default Todo;
