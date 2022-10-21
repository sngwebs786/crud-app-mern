const express = require("express");
const router = express.Router();
const {
  addTodo,
  editTodo,
  deleteTodo,
  deleteAllTodos,
  showTodos,
} = require("../controllers/todoControllers");

router.post("/addTodo", addTodo);
router.put("/editTodo", editTodo);
router.get("/showTodos", showTodos);
router.post("/deleteTodo", deleteTodo);
router.delete("/deleteAllTodos", deleteAllTodos);

module.exports = router;
