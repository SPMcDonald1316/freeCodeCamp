const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('bodget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

const cleanInputString = str => {
  /* Loop to clean string input
  Inefficient for memory & runtime

  const strArray = str.split('');
  const clearStrArray = [];
  for (let i = 0; i < strArray.length; i++) {
    if(!['+', '-', ' '].includes(strArray[i])) {
      cleanStrArray.push(strArray[i]);
    }
  } */
  // More efficient regex version
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

const isInvalidInput = str => {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

const addEntry = () => {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`;
  targetInputContainer.innerHTML += HTMLString;
}