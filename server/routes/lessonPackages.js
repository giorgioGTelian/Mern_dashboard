import express from 'express';
import LessonPackages from '../models/lessonPackages.js';
import { getLessonPackage, createLessonPackage, updateLessonPackage } from '../controllers/lessonPackages.js';

const router = express.Router();

router.get('/lessonPackages/:id', getLessonPackage);
router.post('/lessonPackages', createLessonPackage);
router.patch('/lessonPackages/:id', updateLessonPackage);

export default router;