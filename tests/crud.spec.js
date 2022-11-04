const SessionDao = require("../crud");
const supertest = require('supertest');
const app = require('../index');
const SessionController = require("../controller/session.controller");

// describe('Note route', function () {
//     let app

//     before("Mock db connection and load app", async function () {
//         const pool
//     })
// })

jest.mock('../model/model', () => ()=> {
    const SequelizeMock = require("sequelize-mock");
    const dbMock = new SequelizeMock();
    return dbMock.define('sessions', {
        device_id: 25,
        token: "asdasd1",
        created_at: "2022-08-01 16:54:05+05:30",
        lastActive_at: "2022-10-01 16:55:00+05:30",
        user_id: 11,
        application_id: 111
    })
})

describe("Test Sequelize Mocking", () => {  
    it("Should get value from mock", async () => {
      const aa = await supertest(app).get('/');
      expect(aa.status).toBe(200);
     
      //expect(aa.length).toBe(1);
      
    })
  })

// describe("Test Sequelize Mocking", () => {  
//     it("tests the base route and returns true for status", async () => {
//       const aa = await supertest(app).get('/');
//       expect(aa.status).toBe(404);
//       //expect(aa.body.status).toBe(true); 
//     })
//   })