const TodoSchema = require("../model/todoSchema");

const addTodo = async (req, res) => {
  console.log("Add todo Running");
  console.log(req.body);

  const { todo } = req.body;

  console.log(todo);

  const myTodo =  TodoScawaithema.create({
    todoItem: todo,
  });

  if (myTodo) {
    console.log("Add ho gaya");
  } else {
    console.log("Add nh hua");
  }
};

const editTodo = () => {
  console.log("Edit todo Running");
};
const deleteTodo = () => {
  console.log("Delete todo Running");
};

const deleteAllTodos = () => {
  console.log("Delete All todo Running");
};
const showTodos = () => {
  console.log("Show todo Running");
};

module.exports = { addTodo, deleteAllTodos, editTodo, showTodos, deleteTodo };
