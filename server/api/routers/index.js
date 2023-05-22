const express = require('express');
const router = express.Router();

const campusesRouter = require('./campuses');
const studentsRouter = require('./students');

router.use('/campuses', campusesRouter);
router.use('/students', studentsRouter);

module.exports = router;
