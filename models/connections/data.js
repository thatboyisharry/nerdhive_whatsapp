const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGO_URL);

conn.model('Coach',require('../coach.model'))
conn.model('Job',require('../job.model'))
conn.model('Learner',require('../learner.model'))
conn.model('Lesson',require('../lesson.model'))
conn.model('Parent',require('../parent.model'))
conn.model('Timetable',require('../timetable.model'))
conn.model('Tutor',require('../tutor.model'))
conn.model('User',require('../user.model'))

module.exports = conn;