import mongoose from 'mongoose';
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
    subjects: [String],
    grade: Number,
    school: String,
    client:[String],
    teachers: [String],
    lessonsPackages: [String],
    lessons: [String],
    documents: String,
    notes: String,
});

export const Student = mongoose.model('Student', studentSchema);
export default Student;