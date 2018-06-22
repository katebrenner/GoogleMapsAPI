// requiring modules
const express = require('express');
const app = express();
const morgan = require('morgan');
const override = require('method-override');
const path = require('path');
const bodyParser = require('body-parser');
//requiring auth stuff
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const authHelpers = require('./services/auth/auth-helpers');
//requiring routers
const router = require('./routes/map-routes');
const authRouter = require('./routes/auth-routes');
//setting up port on local host 3000
const PORT = process.env.PORT || 3000;

require('dotenv').config();

app.use(cookieParser());
app.use(bodyParser());
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRouter);
app.use(authHelpers.loginRequired);
app.use(morgan('dev'));
app.use(override('_method'));
app.use(bodyParser.urlencoded({
  extended: false
}));

// currently set to nothing in express object,
//so we are setting it to views
app.set('views', path.join(__dirname, 'views'));
//use 'public' for static files
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.redirect('/map');
});
app.use('/map', router);

app.listen(PORT, () => {
  console.log(`liveonport${PORT}`);
});
