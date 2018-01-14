const express = require('express');
const app = express()
const morgan = require('morgan');
const override = require('method-override');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/map-routes')
const PORT = process.env.PORT || 3000;

//auth stuff below
require('dotenv').config();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const session = require('express-session');
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true,
}));

const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

const authRouter = require('./routes/auth-routes');
app.use('/auth', authRouter);

const authHelpers = require('./services/auth/auth-helpers');
app.use(authHelpers.loginRequired)
//end auth stuff

app.use(morgan('dev'));

app.use(override('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// set to nothing in express object, so you are setting it to views
app.set('views', path.join(__dirname, 'views'));
//go into some other file
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('landing page');
});



app.use('/map', router);

app.listen(PORT, () => {
  console.log(`liveonport${PORT}`);
});
