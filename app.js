const express = require('express');
const app = express()
const morgan = require('morgan');
const override = require('method-override');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/map-routes')
const PORT = process.env.PORT || 3000;

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
