const Session = require('../model/model')

describe('create new session', () => {
    it('should fail if token is invalid', async () => {
        await Session.create({
            device_id: '123456789',
            token: '@@@@@@',
            createdAt: '2020-01-01 00:00:00',
            lastActive: '2020-01-01 00:00:00',
        }).catch((error) => {
            expect(error.message).toEqual('Validation error: Validation is on token failed');
        });
    });
})