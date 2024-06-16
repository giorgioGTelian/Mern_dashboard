import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import teacher from './Teacher.js';
import subject from './Subject.js';
import LessonPackage from './LessonsPackages.js';
import client from './Client.js';

const { Schema } = mongoose;

const studentSchema = new Schema({
id: {
    type: String,
    default: () => uuidv4()
},
    name: String,
    email: String,
    password: String,
    phoneNumber: String,
    subjects: [subject.schema],
    grade: Number,
    school: String,
    client:[client.schema],
    teachers: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }],
    lessonsPackages: [LessonPackage.schema],
    documents: String,
    notes: String,
});

export const Student = mongoose.model('Student', studentSchema);
export default Student;