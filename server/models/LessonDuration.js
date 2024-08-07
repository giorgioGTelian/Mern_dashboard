import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import Subject from './Subject.js';

const lessonDurationSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => uuidv4()
    },
    durationLesson: {
        type: Number,
        required: true,
    },
    lessonsName: [Subject.schema],
});

const LessonDuration = mongoose.model('LessonDuration', lessonDurationSchema);
export default LessonDuration;