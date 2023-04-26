const username = "EseosaEmovon";
const token = "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";

fetch(`https://api.github.com/users/${username}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    const profile = document.createElement("div");
    profile.classList.add("profile-card");
    profile.innerHTML = `
      <img class="profile-picture" src="${data.avatar_url}" alt="${data.name} avatar">
      <div class="profile-details">
        <h1 class="profile-name">${data.name}</h1>
        <p class="profile-bio">${data.bio}</p>
        <div>
          <a class="profile-link" href="${data.html_url}">GitHub Profile</a>
        </div>
      </div>
    `;

    const githubSection = document.querySelector("section.github");
    githubSection.appendChild(profile);
  });
