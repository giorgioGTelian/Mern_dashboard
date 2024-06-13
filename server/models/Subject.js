import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const SubjectSchema = new mongoose.Schema({
    id: {
        type: String,
        default: () => uuidv4()
    },
    name: String,
    description: String,
    subjectColor: String,
});

const Subject = mongoose.model("Subject", SubjectSchema);
export default Subject;