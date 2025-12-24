// Dark mode
document.getElementById("darkToggle")?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Discussion board
const postsDiv = document.getElementById("posts");

function loadPosts() {
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  postsDiv.innerHTML = "";
  posts.forEach(p => {
    const div = document.createElement("div");
    div.textContent = p;
    postsDiv.appendChild(div);
  });
}

function addPost() {
  const input = document.getElementById("postInput");
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  posts.push(input.value);
  localStorage.setItem("posts", JSON.stringify(posts));
  input.value = "";
  loadPosts();
}

if (postsDiv) loadPosts();
