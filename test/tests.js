import './example.test.js';
import { makeStatsString } from '../utils.js';
test('Testing Slogans', (expect)=> {
    const string = `You have decided on human races, toril different worlds, and plains different terrains. And you came up with the caption(s):`;

    const actual = makeStatsString('human', 'toril', 'plains');

    expect.equal(actual, string);
});