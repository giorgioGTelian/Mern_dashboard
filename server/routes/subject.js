import express from 'express';
import { getSubject, getAllSubjects, createSubject, updateSubject } from '../controllers/subject.js';

const router = express.Router();

router.get('/subject/:id', getSubject);
router.get('/subjects', getAllSubjects);
router.post('/new_subject', createSubject);
router.patch('/subject/:id', updateSubject);

export default router;