const express = require('express');
const router = express.Router();
const SessionController = require('../controller/session.controller');

router.post('/', SessionController.addSession);
router.get('/', SessionController.findSessions);
router.get('/:id', SessionController.findSess);

router.get('/:id', SessionController.findSessionById);
router.put('/:id', SessionController.updateSession);
router.delete('/:id', SessionController.deleteById);

module.exports = router;