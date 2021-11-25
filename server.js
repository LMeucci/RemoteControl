// Stock Middleware
const fs = require('fs'),
      morgan = require('morgan'),
      helmet = require('helmet'),
      express = require('express');
// Routes Handling
const home = require('./routes/home'),
      user = require('./routes/user'),
      contatti = require('./routes/contatti'),
      blog = require('./routes/blog'),
      _404 = require('./routes/404');
// Custom Middleware
const appError = require('./middleware/error');

const app = express();
const port = process.env.PORT || 3000;
const log = fs.createWriteStream('logs/access.log', { flags: 'a'});

// Templates folder: dico all'app che trovo i template (le views) nella cartella views.
// views è la cartella di default quindi non è necessario se non la cambio
app.set('views', './views');
// Template engine choice
app.set('view engine', 'ejs');

app.use(morgan('combined', {stream: log}));
app.use(helmet());
app.use(express.static('public'));

app.use('/blog', blog);
app.use('/user', user);
app.use(home);
app.use(contatti);
app.use(_404);
app.use(appError);

app.listen(port);
