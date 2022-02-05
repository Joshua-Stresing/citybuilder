// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { makeStatsString } from '../util.js';

const test = QUnit.test;

test('Testing Slogans', (expect)=> {
    const string = `You have chosen races 0 times, 0 different worlds, and 0 different terrains. And you came up with the caption(s):`;

    const actual = makeStatsString('0', '0', '0');

    expect.equal(actual, string);
});
