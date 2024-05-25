import mongoose from 'mongoose';
const { Schema } = mongoose;

const teacherSchema = new Schema({
    id: {
        type: String,
        default: () => uuidv4()
    },
    name: String,
    subjects: [String],
    students: [String],
});

export const Teacher = mongoose.model('Teacher', teacherSchema);