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
  console.log(profile);
});
