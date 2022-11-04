const SessionDao = require("../crud");


var SessionController = {
    addSession: addSession,
    findSessions: findSessions,
    findSess: findSess,
    findSessionById: findSessionById,
    updateSession: updateSession,
    deleteById: deleteById,
}

function addSession(req, res) {
    let session = req.body;
    SessionDao.create(session).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findSessionById(req, res) {
    SessionDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findSess(req, res) {
    SessionDao.findOne(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    SessionDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "session deleted successfully",
                session: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateSession(req, res) {
    SessionDao.updateSession(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "session updated successfully",
                session: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findSessions(req, res) {
    SessionDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}



module.exports = SessionController;