import { User } from "@prisma/client";
import { todoService } from "../services";
import catchAsync from "../utils/catchAsync";

const createTodo = catchAsync(async (req, res) => {
  const user = req.user as User;
  const { title, description } = req.body;
  const todo = await todoService.createTodo(user.id, title, description);
  res.status(201).json(todo);
});

const getTodos = catchAsync(async (req, res) => {
  const todos = await todoService.getTodos();
  res.status(200).json(todos);
});

const getTodo = catchAsync(async (req, res) => {
  const { id } = req.params;
  const todo = await todoService.getTodo(Number(id));
  res.status(200).json(todo);
});

const updateTodo = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updatedTodo = await todoService.updateTodo(Number(id), data);
  res.status(200).json(updatedTodo);
});

const deleteTodo = catchAsync(async (req, res) => {
  const { id } = req.params;
  await todoService.deleteTodo(Number(id));
  res.status(204).send();
});

export default {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};
