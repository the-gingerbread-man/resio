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

describe('HTTP Server', function() {
	describe('/', function() {
		describe('GET', function() {

			it('Status: 200 && Content-Type: HTML', function(done) {
				request(HOST)
					.get('/')
					.expect(200)
					.expect('Content-Type', /text\/html/, done);
			});
		});
	});

	describe('/bundle.js', function() {
		describe('GET', function() {
			it('Status: 200 && Content-Type: Javascript', function (done) {
				request(HOST)
					.get('/bundle.js')
					.expect(200)
					.expect('Content-Type', /application\/javascript/, done);
			});
		});

	});

});