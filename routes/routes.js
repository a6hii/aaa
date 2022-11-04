const express = require('express');
const router = express.Router();
const sessionRoutes = require('./sessions.route');

router.use('/sessions', sessionRoutes);
module.exports = router;