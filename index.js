const CLIENT_ID = "158024c4469f7a612d3f";
const CLIENT_SECRET = "cc6d24e43372b3947536e6e109c4d4c76e4e896b";

async function getUser(name) {
  const res = await fetch(
    `https://api.github.com/users/${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  );
  const profile = await res.json();

  return profile;
}

document.querySelector("#search").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.querySelector("#findByUsername").value;
  console.log(username);

  const profile = await getUser(username);

  showProfile(profile);
  console.log(profile);
});

function showProfile(profile) {
  document.querySelector(".profile").innerHTML = `
    <img src="${profile.avatar_url}" alt="${profile.name}" />
    <p class="name">${profile.name}</p>
    <p class="username login">${profile.login}</p>
    <p class="bio">${profile.bio}</p>

    <div class="followers-stars">
    <p>
        <ion-icon name="people-outline"></ion-icon>
        <span class="followers"> ${profile.followers}</span> followers
    </p>
    <span class="dot">·</span>
    <p><span class="following"> ${profile.following}</span> following</p>
    </div>

    <p class="company">
    <ion-icon name="business-outline"></ion-icon>${profile.company}
    </p>
    <p class="location">
    <ion-icon name="location-outline"></ion-icon>${profile.location}
    </p>
    `;
}
