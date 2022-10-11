const TodoSchema = require("../model/todoSchema");

const addTodo = async (req, res) => {
  console.log("Add todo Running");
  console.log(req.body);

  const { todo } = req.body;

  console.log(todo);

  const myTodo = await TodoSchema.create({
    todoItem: todo,
  });

  if (myTodo) {
    console.log("Add ho gaya");
    res.status(201).json({
      success: true,
    });
  } else {
    throw new Error("Item not added");
  }
};

const editTodo = async (req, res) => {
  console.log("Edit todo Running");
  const { oldValue, newValue } = req.body;
  // const newValue = "Nashra";

  const item = await TodoSchema.findOne({ todoItem: oldValue });

  console.log(item);

  const rep = await TodoSchema.replaceOne(
    { todoItem: item.todoItem },
    { todoItem: newValue }
  );
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
