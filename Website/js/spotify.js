const clientId = "b174561f0952485c9e1b48455674c663";
const clientSecret = "f82e2fc2f8d341f9bfd309408ab1b49f";
const authUrl = "https://accounts.spotify.com/api/token";
const profileUrl = "https://api.spotify.com/v1/me";

const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
  },
  body: "grant_type=client_credentials",
};

fetch(authUrl, requestOptions)
  .then((response) => response.json())
  .then((data) => {
    const accessToken = data.access_token;
    console.log(accessToken); // The access token you can use to authenticate your requests to the Spotify API

    fetch(profileUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const profile = document.createElement("div");
        profile.classList.add("profile-card");
        profile.innerHTML = `
        <img class="profile-picture" src="${data.images[0].url}" alt="${data.display_name} avatar">
        <div class="profile-details">
          <h1 class="profile-name">${data.display_name}</h1>
          <p class="profile-email">${data.email}</p>
          <div>
            <a class="profile-link" href="${data.external_urls.spotify}">Spotify Profile</a>
          </div>
        </div>
      `;

        const spotifySection = document.querySelector("section.spotify");
        spotifySection.appendChild(profile);
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((error) => console.error(error));
