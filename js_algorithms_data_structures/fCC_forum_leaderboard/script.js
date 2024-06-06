// URLs for Fetching Data
const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

// Accessed HTML Elements
const postsContainer = document.getElementById("posts-container");

// Data Fetch
const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
};

fetchData();

// Time Conversion for Last Activiy
const lastActivity = time => {
  const currentTime = new Date();
  const lastPost = new Date(time);
  const timePassed = currentTime - lastPost;

  const msPerMin = 1000 * 60;

  const minutes = Math.floor(timePassed / msPerMin);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 60) {
    return `${minutes}m ago`;
  }

  if (hours < 24) {
    return `${hours}h ago`;
  }

  return `${days}d ago`;
};

const showLatestPosts = data => {
  const { topic_list, users } = data;
  const { topics } = topic_list;

  postsContainer.innerHTML = topics.map(item => {
    const {
      id,
      title,
      views,
      posts_count,
      slug,
      posters_id,
      bumped_at
    } = item;
co
    return `
      <tr>
        <td><p class="post-title">${title}</p></td>
        <td></td>
        <td>${posts_count - 1}</td>
        <td>${views}</td>
        <td></td>
      </tr>
    `
  }).join("");
};