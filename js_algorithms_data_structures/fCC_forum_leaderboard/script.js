// URLs for Fetching Data
const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

// Accessed HTML Elements
const postsContainer = document.getElementById("posts-container");

// Category Data
const categories = {
  299: {
    category: "Career Advice",
    className: "career"
  },
  409: {
    category: "Project Feedback",
    className: "feedback"
  },
  417: {
    category: "freeCodeCamp Support",
    className: "support"
  },
  421: {
    category: "JavaScript",
    className: "javascript"
  },
  423: {
    category: "HTML - CSS",
    className: "html-css"
  },
  424: {
    category: "Python",
    className: "python"
  },
  432: {
    category: "You Can Do This!",
    className: "motivation"
  },
  560: {
    category: "Backend Development",
    className: "backend"
  }
};

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

// Time Conversion for Last Activity
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

// View counts readable format
const viewCount = views => {
  const thousands = Math.floor(views / 1000);

  return views >= 1000 ? `${thousands}k` : views;
};

// Convert cateogry data into links
const forumCategory = id => {
  let selected = {};

  if (categories.hasOwnProperty(id)) {
    const { category, className } = categories;
    selected.category = category;
    selected.className = className;
  } else {
    selected.category = "General";
    selected.className = "general";
    selected.id = 1;
  }

  const url = `${forumCategoryUrl}${selected.className}/${id}`;
  const linkText = selected.category;
  const linkClass = selected.className;

  return `<a href="${url}" class="${linkClass}" target="_blank">${linkText}</a>`;
};

// Extract users avatars from data
const avatars = (posters, users) => {
  return posters.map(poster => {
    const user = users.find(user => user.id === poster.user_id);
    if (user) {
      const avatar = user.avatar_template.replace(/{size}/, 30);
      const userAvatarUrl = avatar.startsWith("/user_avatar/") ?
        avatarUrl.concat(avatar) : avatar;
      return `<img src="${userAvatarUrl}" alt="${user.name}" />`;
    }
  }).join("");
};

// Display Posts
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
      posters,
      category_id,
      bumped_at
    } = item;

    return `
      <tr>
        <td>
          <p class="post-title">${title}</p>
          ${forumCategory(category_id)}
        </td>
        <td></td>
        <td>${posts_count - 1}</td>
        <td>${viewCount(views)}</td>
        <td>${lastActivity(bumped_at)}</td>
      </tr>
    `
  }).join("");
};