import express from 'express';
import passport from 'passport';
import User from '../models/User.js';
import { getUser, getAllUsers } from '../controllers/general.js';


const router = express.Router();

router.get('/user/:id', getUser);
router.get('/users', getAllUsers);

/** register logic using passport-local-mongoose **/
router.post('/register', async (req, res) => {
    const { email, password, name } = req.body;
    try {
        const user = await User.register(new User({ email, name }), password);
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error });
    }
});
router.post('/login', passport.authenticate('local'), (req, res) => {
    try {
        res.status(200).json({ user: req.user });
    } catch (error) {
        res.status(500).json({ error });
    }
});


export default router;