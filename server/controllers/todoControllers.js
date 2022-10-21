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

  const item = await TodoSchema.findOne({ todoItem: oldValue });

  console.log(item);

  const rep = await TodoSchema.replaceOne(
    { todoItem: item.todoItem },
    { todoItem: newValue }
  );
};

const deleteTodo = async (req, res) => {
  console.log("Delete todo Running");
  const { myValue } = req.body;
  const item = await TodoSchema.deleteOne({ todoItem: myValue });

  // console.log(item);
};

const deleteAllTodos = async () => {
  console.log("Delete All todo Running");
  const item = await TodoSchema.deleteMany();
};

const showTodos = async (req, res) => {
  console.log("Show todo Running");
  const item = await TodoSchema.find();
  console.log(item);

  res.status(201).json({
    success: true,
    item,
  });
};

module.exports = { addTodo, deleteAllTodos, editTodo, showTodos, deleteTodo };
