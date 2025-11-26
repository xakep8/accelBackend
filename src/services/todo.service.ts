import prisma from "../client";

const createTodo = async (
  userId: number,
  title: string,
  description: string
) => {
  return await prisma.todo.create({
    data: {
      title,
      description,
      userId,
    },
  });
};

const getTodos = async () => {
  return await prisma.todo.findMany();
};

const getTodo = async (id: number) => {
  return await prisma.todo.findUnique({
    where: { id },
  });
};

const updateTodo = async (id: number, data: any) => {
  return await prisma.todo.update({
    where: { id },
    data,
  });
};

const deleteTodo = async (id: number) => {
  return await prisma.todo.delete({
    where: { id },
  });
};

export default {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};
