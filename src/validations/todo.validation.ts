import Joi from "joi";

const createTodo = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().optional(),
    dueDate: Joi.date().optional(),
    completed: Joi.boolean().optional(),
  }),
};

const getTodos = {
  query: Joi.object().keys({
    completed: Joi.boolean().optional(),
    dueBefore: Joi.date().optional(),
    dueAfter: Joi.date().optional(),
  }),
};

const getTodo = {
  params: Joi.object().keys({
    todoId: Joi.number().required(),
  }),
};

const updateTodo = {
  params: Joi.object().keys({
    todoId: Joi.number().required(),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string().optional(),
      description: Joi.string().optional(),
      dueDate: Joi.date().optional(),
      completed: Joi.boolean().optional(),
    })
    .min(1),
};

const deleteTodo = {
  params: Joi.object().keys({
    todoId: Joi.number().required(),
  }),
};

export default {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};
