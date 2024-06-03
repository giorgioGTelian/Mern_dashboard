import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import teacherRoutes from './routes/teacher.js';

/* data import */ 
//import User from './models/User.js';
//import { dataUser, dataStudent } from './data/index.js';

//import { dataTeacher } from './data/index.js';
//import { getAllUsers } from './controllers/general.js';

//import Teacher  from './models/Teacher.js';
//import { getAllTeachers } from './controllers/teacher.js';

//import Subject from './models/Subject.js';
//import { dataSubjects } from './data/index.js';
/******************************************************* */

/*** passport configuration ****/
import passport from 'passport';
import User from './models/User.js';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { createGoogleUser } from './controllers/general.js';
/******************************************************** */


/* configuration */
dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000; // process.env.PORT is for deployment
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
/** passport session **/

/* passport configuration */

/* const LocalStrategy = passportLocal.Strategy;
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

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

passport.use(new JwtStrategy({
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
)); */

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
    console.log('serializeUser', user);
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    } 
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });


/************************************************************************************* */
/* routes */
//for user and admin login and registration
app.use("/general", generalRoutes);  


//users and admins
/*
app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.use("/admin", adminRoutes);
app.use('/profile', profileRoutes);

//schools and students
app.use('/posts', postRoutes);
app.use("/student", studentRoutes);
app.use("/school", schoolRoutes);
app.use("/classroom", classroomRoutes);
app.use("/subject", subjectRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/lesson", lessonRoutes);

//exams and results
app.use("/exam", examRoutes);
app.use("/result", resultRoutes);

//payments
app.use("/payment", paymentRoutes);
app.use("/notification", notificationRoutes);
app.use("/report", reportRoutes);
app.use("/setting", settingRoutes);
app.use("/support", supportRoutes);
app.use("/chat", chatRoutes);
app.use("/event", eventRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/subscription", subscriptionRoutes);
*/
app.use("/client", clientRoutes);

//teachers
app.use("/teacher", teacherRoutes);

/*
//api routes
app.use('/api', apiRoutes);
app.use('/api/v1', apiV1Routes);
*/


/* middleware */
/* app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});
app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
}); */

/* database connection */

mongoose.connect(process.env.MONGO_URL)
.then(async () => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));


    /* ONLY ADD DATA ONE TIME - this is the initial data injection from data/index.js */
    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    
    //Student.insertMany(dataStudent);

    
    //DONE
    //Subject.insertMany(dataSubjects);
    //Teacher.insertMany(dataTeacher);
    //User.insertMany(dataUser); 
})
.catch((error) => console.log(`${error} did not connect`));
