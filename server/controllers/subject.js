import Subject from "../models/Subject";

export const getSubject = async (req, res) => {
    try {
        const { id } = req.params;
        const subject = await Subject.findById(id);
        res.status(200).json(subject);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.status(200).json(subjects);
        console.log(subjects);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createSubject = async (req, res) => {
    const subject = req.body;
    const newSubject = new Subject(subject);
    try {
        await newSubject.save();
        res.status(201).json(newSubject);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateSubject = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No subject with id: ${id}`);
    const updatedSubject = { name, description, _id: id };
    await Subject.findByIdAndUpdate(id, updatedSubject, { new: true });
    res.json(updatedSubject);
}