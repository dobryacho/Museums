const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const sessionConfig = {
  name: 'cookieName',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 1000 * 60 * 60,
    httpOnly: true,
  },
};

app.use(cors({ credentials: true, origin: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
