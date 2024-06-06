const authorContainer = document.getElementById("author-container");
const loadMoreBtn = document.getElementById("load-more-btn");

let start = 0;
let end = 8;
let authorData = [];

fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
  .then(res => res.json())
  .then(data => {
    authorData = data;
    displayAuthors(authorData.slice(start, end));
  })
  .catch(err => {
    authorContainer.innerHTML = `<p class="error-msg">There was an error loading the authors </p>`;
  };

const displayAuthors = authors => {
  authors.forEach(({author, image, url, bio}, index) => {
    authorContainer.innerHTML += `
      <div id="${index}" class="user-card">
        <h2 class="author-name">${author}</h2>
        <img class="user-img" src="${image}" alt="${author} avatar" />
        <p class="bio">${ bio.length > 50 ? bio.slice(0, 50) + '...' : bio}</p>
        <a class="author-link" href="${url}" target="_blank">${author}'s author page</a>
      </div>
    `;
  });
};

const fetchMoreAuthors = () => {
  start += 8;
  end += 8;
  displayAuthors(authorData.slice(start, end));

  if (authorData.length <= end) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = "All authors displayed";
    loadMoreBtn.style.cursor = "not-allowed";
  }
};

loadMoreBtn.addEventListener("click", fetchMoreAuthors);