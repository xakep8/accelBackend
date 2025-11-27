import { User } from "@prisma/client";
import { todoService } from "../services";
import catchAsync from "../utils/catchAsync";
import exclude from "../utils/exclude";

const createTodo = catchAsync(async (req, res) => {
  const user = req.user as User;
  const { title, description, status } = req.body;
  const todo = await todoService.createTodo(
    user.id,
    title,
    description,
    status
  );
  res.status(201).json(exclude(todo, ["createdAt", "updatedAt", "userId"]));
});

const getTodos = catchAsync(async (req, res) => {
  const todos = await todoService.getTodos().then((todos) => {
    todos.map((todo) => {
      return exclude(todo, ["createdAt", "updatedAt", "userId"]);
    });
    return todos;
  });
  res.status(200).json(todos);
});

const getTodo = catchAsync(async (req, res) => {
  const { todoId } = req.params;
  const todo = await todoService.getTodo(Number(todoId));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.status(200).json(exclude(todo, ["createdAt", "updatedAt", "userId"]));
});

const updateTodo = catchAsync(async (req, res) => {
  const { todoId } = req.params;
  const data = req.body;
  const updatedTodo = await todoService.updateTodo(Number(todoId), data);
  res
    .status(200)
    .json(exclude(updatedTodo, ["createdAt", "updatedAt", "userId"]));
});

const deleteTodo = catchAsync(async (req, res) => {
  const { todoId } = req.params;
  await todoService.deleteTodo(Number(todoId));
  res.status(204).send();
});

export default {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};
