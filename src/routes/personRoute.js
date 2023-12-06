import Express from 'express';
const router = Express.Router();
import Controller from '../controllers/personController';

router.get('/', Controller.get);
router.get('/:id', Controller.getById);
router.post('/', Controller.post);
router.put('/:id', Controller.put);
router.delete('/:id', Controller.delete);

export default router;