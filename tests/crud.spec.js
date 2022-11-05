const app = require('../index');
const request = require('supertest');
const SessionDao = require('../crud');

describe('test create tables', () => {
    const s = {
        device_id: 78,
        token: "asmakd",
        created_at: "2022-08-01 16:54:05+05:30",
        lastActive_at: "2022-10-07 18:54:05+05:30",
        // user_id: 1,
        // application_id: 45
    };
    test("Should have key record and msg when created", async () => {
        const addSessionSpy = jest.spyOn(SessionDao, "create").mockResolvedValue(s);
        const res = await request(app).post("/sessions/").send(s);
        expect(addSessionSpy).toHaveBeenCalledTimes(1);
        expect(res.body).toHaveProperty("device_id");
        expect(res.body).toHaveProperty("token");
    });

    test("Find session by id", async () => {
        const findSessionSpy = jest.spyOn(SessionDao, "findById").mockResolvedValue(s);
        const res = await request(app).get("/sessions/78");
        expect(findSessionSpy).toHaveBeenCalledTimes(1);
        expect(res.body).toHaveProperty("device_id");
        expect(res.body).toHaveProperty("token");
    });

    test("Find all sessions", async () => {
        const findAllSessionSpy = jest.spyOn(SessionDao, "findAll").mockResolvedValue([s]);
        const res = await request(app).get("/sessions/");
        expect(findAllSessionSpy).toHaveBeenCalledTimes(1);
        expect(res.body).toHaveLength(1);
    });

    test("Update session", async () => {
        const updateSessionSpy = jest.spyOn(SessionDao, "updateSession").mockResolvedValue(s);
        const res = await request(app).put("/sessions/78").send(s);
        expect(updateSessionSpy).toHaveBeenCalledTimes(1);
        expect(res.body).toHaveProperty("message", "session updated successfully");
        expect(res.body).toHaveProperty("session", s);
    });

    test("Delete session", async () => {
        const deleteSessionSpy = jest.spyOn(SessionDao, "deleteById").mockResolvedValue(s);
        const res = await request(app).delete("/sessions/78");
        expect(deleteSessionSpy).toHaveBeenCalledTimes(1);
        expect(res.body).toHaveProperty("message", "session deleted successfully");
        expect(res.body).toHaveProperty("session", s);
    });

    // test('should return error if no session found', async () => {
    //     const findSessionSpy = jest.spyOn(SessionDao, "findById").mockResolvedValue([]);
    //     const res = await request(app).get("/sessions/78");
    //     expect(findSessionSpy).toHaveBeenCalledTimes(1);
    //     expect(res.status).toBe(404);
    // });

})
