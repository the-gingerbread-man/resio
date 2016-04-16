const Browser = require('zombie');

const app = require('../');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;

describe('Front End Integration', function() {

	const respondantBrowser = new Browser();
	respondantBrowser.silent = true;

	before(done => {
		respondantBrowser.visit(`${HOST}`, done);
	});

	describe('Respondant Page', () => {
		it('Loads successfully', () => {
			respondantBrowser.assert.success();
		});

		// it('Should have buttons for choices', function() {
		// 	browser
		// 		.assert.text('questionText', 'Who is the coolest Codesmith staff member?');
		// });


	});

});