import bodyParser from 'body-parser';
import {Router} from 'express';
import Project from './project.model';

const router = Router();

router.route('/').post(bodyParser.json(), async (req, res) => {
  try {
    const dot = new Project(req.body);
    await item.save();
    return res.status(200).json('Project saved!');
  } catch (error) {
    return res.status(400).send(error);
  }
});

export default router;