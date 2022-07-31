import express from 'express';
import sessions from 'express-session';
import normalizePort from 'normalize-port';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import logger from './tools/logger.js';

// controllers 
import initialConfiguration from './initial.js';

import authenticate from './controllers/authenticate.js';
import logIn from './controllers/signIn.js';
import getResult from './controllers/getResult.js';
import logOut from './controllers/logOut.js';

dotenv.config();
const app = express();

// middlewares 
app.use(cors());
app.use(bodyParser.json());
app.use(sessions({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {maxAge: 60000},
}));
app.use((req,res,next) => {
    logger.info(req.method + ' ' + req.path);
    next();
})

// serving frontend by backend 

// app.use(express.static(path.join(path.resolve(),'/frontend/build/')));
// app.get('*', (req,res) => {
//     res.sendFile(path.join(path.resolve(),'/frontend/build/index.html'));
// })

// Inintial database configuration 


// routes
initialConfiguration();

app.get('/api/isAuthenticated', authenticate);
app.get('/api/signIn',logIn);
app.get('/api/getResult', getResult);
app.get('/api/logOut', logOut);

const port = normalizePort(process.env.PORT);
app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
});