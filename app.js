// import functions and grab DOM elements
const raceSelect = document.getElementById('race-select');
const worldSelect = document.getElementById('world-select');
const terrainSelect = document.getElementById('terrain-select');

const raceImage = document.getElementById('race-img');
const worldImage = document.getElementById('world-img');
const terrainImage = document.getElementById('terrain-img');

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
});

worldSelect.addEventListener('change', (e) =>{
    const value = e.target.value;
    worldImage.src = `./assets/world-${value}.jpg`;
    raceCounter++;
});

terrainSelect.addEventListener('change', (e) =>{
    const value = e.target.value;
    terrainImage.src = `./assets/terrain-${value}.jpg`;
    raceCounter++;
});


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
