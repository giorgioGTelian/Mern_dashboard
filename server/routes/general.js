import express from 'express';
import { getUser, getAllUsers } from '../controllers/general.js';

const router = express.Router();

router.get('/user/:id', getUser);
router.get('/user', getAllUsers);


export default router;