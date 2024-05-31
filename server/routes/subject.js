import express from 'express';
import { getSubject, getAllSubjects, createSubject } from '../controllers/subject.js';

const router = express.Router();

router.get('/subject/:id', getSubject);
router.get('/subjects', getAllSubjects);
router.post('/new_subject', createSubject);

export default router;