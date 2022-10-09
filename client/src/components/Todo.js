import React, { useState } from "react";
import MyTodo from "./MyTodoUI";
import axios from "axios";
const Todo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [editValue, setEditValue] = useState(null);

  const addItem = async () => {
    console.log("Add item running");
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
