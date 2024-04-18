const getMean = array => array.reduce((acc, el) => acc + el, 0) / array.length;
const getMedian = array => {
  const midIndex = array.length / 2; // calc once
  const sorted = array.sort((a, b) => a - b);

  const median = array.length % 2 === 0 ? 
    getMean([sorted[midIndex], sorted[midIndex - 1]]) : sorted[midIndex];
  return median;
}

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

  const mean = getMean(numbers)
  const median = getMedian(numbers)

  document.querySelector('#mean').textContent = mean;
  document.querySelector('#median').textContent = median;
}