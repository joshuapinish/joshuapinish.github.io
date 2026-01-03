fetch("posts.json")
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById("posts");

    posts.reverse().forEach(p => {
      const article = document.createElement("article");
      article.className = "post";

      article.innerHTML = `
        <h2>${p.title}</h2>
        <span>${p.date}</span>
        <p>${p.content}</p>
      `;

      container.appendChild(article);
    });
});
