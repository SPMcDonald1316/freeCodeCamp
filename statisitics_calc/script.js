const getMean = array => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = array => {
  const midIndex = array.length / 2; // calc once
  const sorted = array.sort((a, b) => a - b);

  const median = array.length % 2 === 0 ? 
    getMean([sorted[midIndex], sorted[midIndex - 1]]) : sorted[midIndex];
  return median;
};

const getMode = array => {
  const counts = {};
  array.forEach(el => counts[el] = (counts[el] || 0) + 1);
  if (new Set(Object.values(counts)).size == 1) {
    return null;
  }
  const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
  const mode = Object.keys(counts).filter(el => counts[el] === counts[highest]);
  return mode.join(', ');
};

const getRange = array => Math.max(...array) - Math.min(...array);

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);

  document.querySelector('#mean').textContent = mean;
  document.querySelector('#median').textContent = median;
  document.querySelector('#mode').textContent = mode;
  document.querySelector('#range').textContent = range;
}