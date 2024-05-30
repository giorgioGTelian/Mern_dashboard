import mongoose from 'mongoose';
const { Schema } = mongoose;

const teacherSchema = new Schema({
    id: {
        type: String,
        default: () => uuidv4()
    },
    name: String,
    phoneNumberTeacher: String,
    emailTeacher: String,
    subjects: [String],
    students: [String],
    teacherDocuments: String,
    teacherPayments: String,
    teacherBilling: String,
    teacherNotes: String,
});

export const Teacher = mongoose.model('Teacher', teacherSchema);