import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import LessonDuration from './LessonDuration';

const lessonPackageSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  name: {
    type: String,
    enum: ['lezione singola', 'pacchetto da 5 lezioni', 'pacchetto da 10 lezioni', 'pacchetto da 20 lezioni'],
    default: 'lezione singola',
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number
  },
  counterLessons: {
    type: Number,
    required: true,
  },
  lessons: [LessonDuration.schema],
});

const LessonPackage = mongoose.model('LessonPackage', lessonPackageSchema);
export default LessonPackage;