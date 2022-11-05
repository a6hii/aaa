const db = require('../config/database');
const app = require('../index');
const Sessions = require('../model/model');
const request = require('supertest');

describe('test create tables', () => {
    const u = {
        user_id: 1,
        name: "abhi",
        phone_number: "45612345",
        email: "aaa@ssss.cd",
        gender: "M",
        dob:"1998-04-04"
    };
    const a = {
        application_id: 45,
        application_name: "Android"
    };
    const s = {
        device_id: 78,
        token: "asmakd",
        created_at: "2022-08-01 16:54:05+05:30",
        lastActive_at: "2022-10-07 18:54:05+05:30",
        // user_id: 1,
        // application_id: 45
    };
    test("Should have user_id and token when created", async () => {
        const mockCreateUser = jest.fn(() => u);
        const mockCreateApp = jest.fn(() => a);
		const mockCreateSession = jest.fn(() => s);
		jest
			.spyOn(Sessions, "create")
			.mockImplementation(() => mockCreateSession());

		const res = await request(app).post("/").send(s);

		expect(mockCreateSession).toHaveBeenCalledTimes(1);
		expect(res.body).toHaveProperty("user_id");
		expect(res.body).toHaveProperty("token");
	});
  })
