const sortButton = document.getElementById('sort');

const sortInputArray = e => {
  e.preventDefault();
  const inputValues = [...document.getElementsByClassName('values-dropdown')].map(dropdown => Number(dropdown.value));
}

sortButton.addEventListener('click', sortInputArray);