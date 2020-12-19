
import bodyParser from 'body-parser';
import {Router} from 'express';
import Dot from './dot.model';

const router = Router();

router.route('/').post(bodyParser.json(), async (req, res) => {
  try {
    const dot = new Dot(req.body);
    await item.save();
    return res.status(200).json('Dot saved!');
  } catch (error) {
    return res.status(400).send(error);
  }
});

export default router;