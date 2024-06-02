function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data));
}
function displayPosts(posts) {
  const postContainer = document.getElementById('post-container');
  for (const post of posts) {
    const div = document.createElement('div');
    div.classList.add('post');
    div.innerHTML = `

<h4>User- ${post.userId}</h4>
<h4>Post: ${post.title}</h4>
<p>Post Description : ${post.body}</p>
    `;
    postContainer.appendChild(div);
  }
}
loadPosts();
