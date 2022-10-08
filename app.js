/*
 * Starter Project for WhatsApp Echo Bot Tutorial
 *
 * Remix this as the starting point for following the WhatsApp Echo Bot tutorial
 *
 */

"use strict";

/// Imports dependencies and set up http server
const request = require("request"),
express = require("express"),

body_parser = require("body-parser"),
axios = require("axios").default,
app = express().use(body_parser.json()); // creates express http server
const path = require('path');
const session = require('express-session');
const passport =require('passport');
const cors=require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const User = require('./models/user.model');
const Bree = require('bree');
const Cabin = require('cabin');
const Graceful = require('@ladjs/graceful');
const { Signale } = require('signale');

// initialize cabin
const cabin = new Cabin({
  axe: {
    logger: new Signale()
  }
});

const bree = new Bree({
  logger: cabin,
  jobs: [
    {
      name:'morning-lesson-remainder',
      interval: 'at 08:00 am'
    },
    {
      name:'pre-lesson',
      cron: '0 * * * *'
    },
    {
      name:'post-lesson',
      cron: '0 * * * *'
    },
    {
      name:'reset-sessions',
      cron: '0 0,6 * * *'
    },
    {
      name:'send-job-alerts',
      cron: '30 10,13,18 * * *'
    }
  ]
});

// handle graceful reloads, pm2 support, and events like SIGHUP, SIGINT, etc.
const graceful = new Graceful({ brees: [bree] });
graceful.listen();

// start all jobs (this is the equivalent of reloading a crontab):
// bree.start();
//Basic configuration
const oneDay=1000*60*60*24;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'/public')));
app.use(session({
  secret:"cats",
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge:oneDay }
}));
app.use(cookieParser());
app.use(passport.initialize()); //authentication related
app.use(passport.session());// authentication related





// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log("webhook is listening"));

routes(app,User);

