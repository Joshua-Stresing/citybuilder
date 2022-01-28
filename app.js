// import functions and grab DOM elements
import { makeStatsString } from './util.js';

const raceSelect = document.getElementById('race-select');
const worldSelect = document.getElementById('world-select');
const terrainSelect = document.getElementById('terrain-select');

const raceImage = document.getElementById('race-img');
const worldImage = document.getElementById('world-img');
const terrainImage = document.getElementById('terrain-img');

const sloganInput = document.getElementById('slogani');
const sloganButton = document.getElementById('sloganb');
const sloganList = document.getElementById('sloganl');

const statReport = document.getElementById('stat-report');
// let state
let slogans = [];
let raceCounter = 0;
let worldCounter = 0;
let terrainCounter = 0; 

// set event listeners 
raceSelect.addEventListener('change', (e) =>{
    const value = e.target.value;
    raceImage.src = `./assets/race-${value}.jpg`;
    raceCounter++;
    displayStats();
});

worldSelect.addEventListener('change', (e) =>{
    const value = e.target.value;
    worldImage.src = `./assets/world-${value}.jpg`;
    worldCounter++;
    displayStats();
});

terrainSelect.addEventListener('change', (e) =>{
    const value = e.target.value;
    terrainImage.src = `./assets/terrain-${value}.jpg`;
    terrainCounter++;
    displayStats();
});

sloganButton.addEventListener('click', () => {
    const newSlogan = sloganInput.value;
    slogans.push(newSlogan);
    displaySlogans();
    sloganInput.value = '';
});
function displayStats() {
    const statsString = makeStatsString(raceCounter, worldCounter, terrainCounter);
    statReport.textContent = statsString;
}
function displaySlogans(){
    sloganList.textContent = '';

    for (let slogan of slogans) {
        const p = document.createElement('p');

        p.classList.add('slogan');
        p.textContent = slogan;

        sloganList.append(p);
    }
}


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
