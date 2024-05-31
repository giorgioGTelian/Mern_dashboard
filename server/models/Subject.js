import mongoose from "mongoose";

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