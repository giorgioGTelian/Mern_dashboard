import express from 'express';
import { getTeacher, getAllTeachers } from '../controllers/teacher.js';
import e from 'express';

const router = express.Router();

router.get('/teacher/:id', getTeacher);
router.get('/teachers', getAllTeachers);

export default router;