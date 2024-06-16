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
import authRoutes from './routes/authRoutes.js';
import './services/passport.js';
import cookieSession from 'cookie-session';
import passport from 'passport';

/******** data import *********/ 
//import User from './models/User.js';
//import { dataUser, dataStudent } from './data/index.js';

//import { dataTeacher } from './data/index.js';
//import { getAllUsers } from './controllers/general.js';

//import Teacher  from './models/Teacher.js';
//import { getAllTeachers } from './controllers/teacher.js';

//import Subject from './models/Subject.js';
//import { dataSubjects } from './data/index.js';

/******************************************************* */

import LessonPackage from './models/LessonsPackages.js';
import { dataLessonsPackages } from './data/index.js';


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
/** cookie session **/
app.use(cookieSession({ 
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
}));
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

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
    //LessonPackage.insertMany(dataLessonsPackages);
    //User.insertMany(dataUser); 
})
.catch((error) => console.log(`${error} did not connect`));
