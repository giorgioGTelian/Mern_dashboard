import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import students from './Student.js';
import subject from './Subject.js';

const { Schema } = mongoose;

const teacherSchema = new Schema({
    id: {
        type: String,
        default: () => uuidv4()
    },
    name: String,
    phoneNumberTeacher: String,
    emailTeacher: String,
    subjects: [subject.schema],
    students: [students.schema],
    teacherDocuments: [Buffer], 
    teacherPayments: [String],
    teacherBilling: {
        type: String,
        enum: [ "Ritenuta d'acconto del 20%",  "Fatturazione senza IVA",  "Fatturazione con IVA al 22%",  "Nessuna dei precedenti"],
        default:  "Ritenuta d'acconto del 20%",
    },
    teacherNotes: String,
});
const Teacher = mongoose.model('Teacher', teacherSchema);
export default Teacher;