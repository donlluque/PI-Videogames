const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
    });
  });
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('released', () => {
      it('should throw an error if released is no required', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires that released is required')))
          .catch(() => done());
      });
    });
  });
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('description', () => {
      it('should throw an error if description is no required', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires that description is required')))
          .catch(() => done());
      });
    });
  });
});
