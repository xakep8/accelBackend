import Joi from "joi";

const createTodo = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().optional().min(0),
    dueDate: Joi.date().optional(),
    status: Joi.string()
      .valid("PENDING", "IN_PROGRESS", "COMPLETED")
      .optional(),
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
      description: Joi.string().optional().min(0),
      status: Joi.string()
        .valid("PENDING", "IN_PROGRESS", "COMPLETED")
        .optional(),
      dueDate: Joi.date().optional(),
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
