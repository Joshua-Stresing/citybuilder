// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { makeStatsString } from '../util.js';

const test = QUnit.test;

test('Testing Slogans', (expect)=> {
    const string = `You have decided on human races, toril different worlds, and plains different terrains. And you came up with the caption(s):`;

    const actual = makeStatsString('human', 'toril', 'plains');

    expect.equal(actual, string);
});
