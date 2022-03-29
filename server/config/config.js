require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const sessionFileStore = require('session-file-store');

const FileStore = sessionFileStore(session);

const config = (app) => {
  app.set('view engine', 'hbs');
  app.set('session cookie name', 'user_sid');

  app.use(express.urlencoded({ urlencoded: true }));
  app.use(express.json());
  app.use(express.static, 'public');
  app.use(cookieParser());
  app.use(session({
    key: app.get('session cookie name'),
    secret: process.env.SECRET_KEY,
    store: new FileStore({ secret: process.env.SECRET_KEY }),
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 10e3 * 60, httpOnly: true },
  }));
};

module.exports = config;
