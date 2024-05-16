//schema that defines the structure of the user data
import mongoose from 'mongoose';
//TODO add more fields to the user schema - also id
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 100,
    },
    email: {
        type: String,
        required: true,
        min: 3,
        max: 100,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 100,
    },
    id: {
        type: String,
    }, 
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
        type: String,
        enum: ["user", "admin", "superadmin"],
        default: "admin",
    },
},
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;