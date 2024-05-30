import  Teacher  from "../models/Teacher.js";

export const getTeacher = async (req, res) => {
    try {
        const { id } = req.params;
        const teacher = await Teacher.findById(id);
        res.status(200).json(teacher);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json(teachers);
        console.log(teachers);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}