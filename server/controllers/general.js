import User from "../models/User.js";


export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
// Compare this snippet from server/routes/index.js:
// import express from 'express';
// import generalRoutes from './general.js';
//
// const router = express.Router();
//
// router.use('/', generalRoutes);
//
// export default router;
