fetch("posts.json")
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById("posts");

    posts.reverse().forEach(p => {
      const article = document.createElement("article");
      article.className = "post";

article.innerHTML = `
  <h2>
    <a href="post.html?id=${p.id}">
      ${p.title}
    </a>
  </h2>
  <span>${p.date}</span>
  <p>${p.content}</p>
`;


      container.appendChild(article);
    });
});
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".post").forEach(post => {
    observer.observe(post);
});

