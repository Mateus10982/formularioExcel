
import Express from 'express';
const router = Express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        Mensagens:["Node Express API","hgfghf"] 
    });
});
export default router;
