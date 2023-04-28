const username = "EseosaEmovon";
const token = "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";

fetch(`https://api.github.com/users/${username}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    const profileLabel = document.createElement("h2");
    profileLabel.classList.add("profile-label"); // Added class to h2
    profileLabel.textContent = "GitHub Profile";
    document.querySelector(".github").appendChild(profileLabel);

    const profile = document.createElement("div");
    profile.classList.add("profile-card");
    profile.innerHTML = `
      <div class="left-column">
        <img class="profile-picture" src="${data.avatar_url}" alt="${data.name} avatar">
        <h2 class="profile-label">Name:</h2>
        <h1 class="profile-name">${data.name}</h1>
        <h2 class="profile-label">Bio:</h2>
        <p class="profile-bio">${data.bio}</p>
        <div>
          <a class="profile-link" href="${data.html_url}">GitHub Profile</a>
        </div>
      </div>
      <div class="right-column">
        <h2 class="profile-label">Repositories:</h2>
        <ul class="repo-list"></ul>
      </div>
    `;

    const githubSection = document.querySelector("section.github");
    githubSection.appendChild(profile);

    fetch(data.repos_url)
      .then((response) => response.json())
      .then((data) => {
        const sortedRepos = data.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        const topRepos = sortedRepos.slice(0, 3);
        const repoList = profile.querySelector(".repo-list");

        topRepos.forEach((repo) => {
          const repoLink = document.createElement("a");
          repoLink.href = repo.html_url;
          repoLink.innerText = repo.name;

          const repoListItem = document.createElement("li");
          repoListItem.appendChild(repoLink);
          repoList.appendChild(repoListItem);
        });
      })
      .catch((error) => console.error(error));
  });
