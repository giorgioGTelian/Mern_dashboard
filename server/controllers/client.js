import mongoose from "mongoose";
const { Schema } = mongoose;

const clientSchema = new Schema({
    id: {
        type: String,
        default: () => uuidv4()
    },
    name: String,
    email: String,
    password: String,
    phoneNumber: String,
    address: String,
    about: String,
    students: [String],
    lessonsPackage: [String],
    clientDocuments: String,
    clientNotes: String,
});

const Client = mongoose.model('Client', clientSchema);
export default Client;