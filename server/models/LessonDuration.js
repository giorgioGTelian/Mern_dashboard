import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import Lessons from './Lessons';

const lessonDurationSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => uuidv4()
    },
    duration: {
        type: Number,
        required: true,
    },
    lessonsName: [Lessons.schema],
});

const LessonDuration = mongoose.model('LessonDuration', lessonDurationSchema);
export default LessonDuration;