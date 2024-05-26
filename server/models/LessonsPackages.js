import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const lessonPackageSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => uuidv4()
  },
  name: String
});

const LessonPackage = mongoose.model('LessonPackage', lessonPackageSchema);
export default LessonPackage;