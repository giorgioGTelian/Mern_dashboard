/*** passport configuration ****/
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import User from '../models/User.js';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { createGoogleUser } from '../controllers/general.js';
import dotenv from 'dotenv';
/******************************************************** */
dotenv.config();
const PORT = process.env.PORT || 9000;
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:  `http://localhost:${PORT}/auth/google/callback`
},
    async function (accessToken, refreshToken, profile, done) {
        try {
            const profileData = {
                id: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                city: '', // Default city for new users
                state: '',
                country: '',
                occupation: '',
                phoneNumber: '',
                transactions: [],
                role: 'user' // Default role for new users
            };
            const user = await createGoogleUser(profileData);
            return done(null, user);
        } catch (err) {
            return done(err, null);
        }
    }
));

// Serialize and deserialize user
passport.serializeUser((user, done) => {
    //TODO remove console log
    console.log('serializeUser', user);
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findOne({ id: id }); 
        console.log('deserializeUser', user);
        done(null, user);
    } catch (err) {
        done(err, null);
    } 
});



/* general passport configuration */

/*
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user
        = await
        User.findOne({ email: email });
        if (!user) {
            return done(null, false, { message: 'Incorrect email' });
        }
        const validate = await bcrypt.compare(password, user.password);
        if (!validate) {
            return done(null, false, { message: 'Incorrect password' });
        }
        return done(null, user, { message: 'Logged in successfully' });
    } catch (error) {
        return done(error);
    }
}
));
*/

/* passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}, async (jwtPayload, done) => {
    try {
        const user
        = await
        User.findById(jwtPayload._id);
        if (!user) {
            return done(null, false, { message: 'User not found' });
        }
        return done(null, user);
    } catch (error) {
        return done(error);
    }
}
)); 
 */


