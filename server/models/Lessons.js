import mongoose from 'mongoose';


const lessonSchema = new mongoose.Schema({
    _id: {
      type: String,
      default: () => uuidv4()
    },
    name: {
      type: String,
      required: true,
    },
  });
  

const Lesson = mongoose.model('Lesson', lessonSchema);
export default Lesson;