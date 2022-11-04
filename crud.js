
const Session = require("./model/model");

var SessionDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    findOne: findOne,
    deleteById: deleteById,
    updateSession: updateSession,
    //isConcurrentLogin: isConcurrentLogin
}

function findAll() {
    return Session.findAll();
}

function findById(id) {
    return Session.findByPk({where: {device_id:id}});
}

function findOne(id) {
    return Session.findOne({ where: { user_id: id},});
    // if(Session.findOne({ where: { user_id: id},})) {
    //     console.log('TRUE');
    //     return true;
    // } else {
    //     console.log('FALSE');
    //     return false;
    // }
}

function deleteById(id) {
    return Session.destroy({ where: { device_id: id } });
}

function create(session) {
    var newSession = new Session(session);
    return newSession.save();
}

function updateSession(session, id) {
    var updateSession = {
        deviceId: session.deviceId,
        token: session.token,
        createdAt: session.createdAt,
        lastActive: session.lastActive,
    };
    return Session.update(updateSession, { where: { device_id: id ,} });
}

// function getTimeFromToken(token){
//     let decryptToken = aes.decrypt(token);
//     let splitToken = decryptToken.split(" ");
//     let time = splitToken[2];
//     return time;
// }

// function isConcurrentLogin(id) {
//     //let isExistingUserId = findOne(id);
//     let lastActiveAt = 'Friday';  //getTimeFromToken
//     //let currentDate = Date.now();
//     // create day array list
//     let daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     // get day use date function
//     let day = new Date().getDay();
//     // get day name 
//     let dayName = daysArray[day];
//    if(findOne(id) != null) {
//      if(lastActiveAt === dayName) {
//         console.log('isConcurrentLogin');
//         return true;
//      } else {
//         console.log('Is not concurrent.')
//         return false;
//      }
//    }
// }
// let aa = isConcurrentLogin(1);
// console.log(aa);

module.exports = SessionDao; 

// isConcurrentLogin(userId, applicationId)
// check userId exists in Sessions : true ->
// check token lastActiveAt is less than 2 days: 
// return true