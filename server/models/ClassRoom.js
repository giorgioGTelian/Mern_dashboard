import mongoose from "mongoose";

const ClassRoomSchema = new mongoose.Schema({
    id: {
        type: String,
        default: () => uuidv4()
    },
    nameClassroom: String,
    descriptionClassroom: String,
    locationClassroom: {
        type: String,
        enum: ["rione verde", "piazza delle erbe"],
        default: "piazza delle erbe",
    },
    cityClassroom: String,
    numberOfStudents: Number,
    students: [String],
    teacher: [String],
    subject: [String],
    lessons: [String],
    notes: String,
});

const ClassRoom = mongoose.model("ClassRoom", ClassRoomSchema);
export default ClassRoom;