import express from "express";
import validate from "../../middlewares/validate";
import { todoValidation } from "../../validations";
import { todoController } from "../../controllers";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/",
  validate(todoValidation.createTodo),
  auth(),
  todoController.createTodo
);
router.get(
  "/",
  validate(todoValidation.getTodos),
  auth(),
  todoController.getTodos
);
router.get(
  "/:todoId",
  validate(todoValidation.getTodo),
  auth(),
  todoController.getTodo
);
router.patch(
  "/:todoId",
  validate(todoValidation.updateTodo),
  auth(),
  todoController.updateTodo
);
router.delete(
  "/:todoId",
  validate(todoValidation.deleteTodo),
  auth(),
  todoController.deleteTodo
);
export default router;
