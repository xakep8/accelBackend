import express from 'express';
import validate from '../../middlewares/validate';
import { todoValidation } from '../../validations';
import { todoController } from '../../controllers';

const router = express.Router();

router.post('/', validate(todoValidation.createTodo), todoController.createTodo);
router.get('/', validate(todoValidation.getTodos), todoController.getTodos);
router.get('/:todoId', validate(todoValidation.getTodo), todoController.getTodo);
router.patch('/:todoId', validate(todoValidation.updateTodo), todoController.updateTodo);
router.delete('/:todoId', validate(todoValidation.deleteTodo), todoController.deleteTodo);

export default router;