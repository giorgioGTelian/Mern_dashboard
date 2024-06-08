import LessonPackages from '../models/lessonPackages';

export const getLessonPackage = async (req, res) => {
    try {
        const { id } = req.params;
        const lessonPackage = await Lesson
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createLessonPackage = async (req, res) => {
    const lessonPackage = req.body;
    const newLessonPackage = new LessonPackages(lessonPackage);
    try {
        await newLessonPackage.save();
        res.status(201).json(newLessonPackage);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateLessonPackage = async (req, res) => {
    const { id } = req.params;
    const { duration, lessonsName } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No lesson package with id: ${id}`);
    const updatedLessonPackage = { duration, lessonsName, _id: id };
    await LessonPackages.findByIdAndUpdate(id, updatedLessonPackage, { new: true });
    res.json(updatedLessonPackage);
}
