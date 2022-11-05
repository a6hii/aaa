const { expect } = require('chai');
const { INET } = require('sequelize');
const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers')

const Session = require('../model/model')

describe('create new session', () => {
    it('should fail if token is invalid', async () => {
        await Session.create({
            device_id: '123456789',
            token: '@@@@@@',
            createdAt: '2020-01-01 00:00:00',
            lastActive: '2020-01-01 00:00:00',
        }).catch((error) => {
            expect(error).to.be.an('error');
            expect(error.message).to.equal('Validation error: Validation is on token failed');
        });
    });
})