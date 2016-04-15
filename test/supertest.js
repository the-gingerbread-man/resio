const request = require('supertest');
const app = require('../');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;

const chai = require('chai');
// const { expect, assert } = chai;
const expect = chai.expect;
const assert = chai.assert;

describe('HTTP Server', () => {
	
	describe('/', () => {
		
		describe('GET', () => {
			it('responds with 200 status', done => {
				request(HOST)
					.get('/')
					.expect(200, done);
			});
			
			it('responds with text/html content type', done => {
				request(HOST)
					.get('/')
					.expect('Content-Type', /text\/html/, done);
			});
		});
	
	});

	describe('/bundle.js', () => {

		describe('GET', () => {
			it('responds with 200 status', done => {
				request(HOST)
					.get('/bundle.js')
					.expect(200, done);
			});

			it('responds with text/javascript content type', done => {
				request(HOST)
					.get('/bundle.js')
					.expect('Content-Type', /application\/javascript/, done);
			});
		});

	});

});