import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
//import postRoutes from './routes/posts.js';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sales.js';
import teacherRoutes from './routes/teacher.js';

/*
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';
import profileRoutes from './routes/profile.js';
import postRoutes from './routes/posts.js';
import studentRoutes from './routes/student.js';
import schoolRoutes from './routes/school.js';
import classroomRoutes from './routes/classroom.js';
import subjectRoutes from './routes/subject.js';
import teacherRoutes from './routes/teacher.js';
import attendanceRoutes from './routes/attendance.js';
import lessonRoutes from './routes/lesson.js';
import examRoutes from './routes/exam.js';
import resultRoutes from './routes/result.js';
import paymentRoutes from './routes/payment.js';
import notificationRoutes from './routes/notification.js';
import reportRoutes from './routes/report.js';
import settingRoutes from './routes/setting.js';
import supportRoutes from './routes/support.js';
import chatRoutes from './routes/chat.js';
import eventRoutes from './routes/event.js';
import feedbackRoutes from './routes/feedback.js';
import subscriptionRoutes from './routes/subscription.js';
import apiRoutes from './routes/api.js';
import apiV1Routes from './routes/apiV1.js';
*/

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
import passportLocal from 'passport-local';
import passportJwt from 'passport-jwt';
import bcrypt from 'bcrypt';
import User from './models/User.js';
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
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser()); 

/* passport configuration */

const LocalStrategy = passportLocal.Strategy;
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
));

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:  `http://localhost:${PORT}/auth/google/callback`
},
    function (accessToken, refreshToken, profile, done) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
));
/************************************************************************************* */
/* routes */

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
app.use("/teacher", teacherRoutes);
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
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

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
