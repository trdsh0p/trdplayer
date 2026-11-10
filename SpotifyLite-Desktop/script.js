const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const spotifyUrl = document.getElementById("spotifyUrl");
const loadBtn = document.getElementById("loadBtn");
const embedWrap = document.getElementById("embedWrap");
const embed = document.getElementById("spotifyEmbed");
const message = document.getElementById("message");

function searchSpotify() {
  const query = searchInput.value.trim();
  if (query) window.open("https://open.spotify.com/search/" + encodeURIComponent(query), "_blank", "noopener,noreferrer");
}
searchBtn.addEventListener("click", searchSpotify);
searchInput.addEventListener("keydown", event => { if (event.key === "Enter") searchSpotify(); });
document.getElementById("openSpotify").addEventListener("click", () => {
  window.open("https://open.spotify.com/", "_blank", "noopener,noreferrer");
});

function loadSpotifyEmbed() {
  message.textContent = "";
  try {
    const parsed = new URL(spotifyUrl.value.trim());
    if (!["open.spotify.com", "spotify.com"].includes(parsed.hostname)) throw new Error();
    const parts = parsed.pathname.split("/").filter(Boolean);
    const types = ["track", "album", "playlist", "episode", "show"];
    const type = parts.find(part => types.includes(part));
    const id = parts[parts.indexOf(type) + 1];
    if (!type || !id || !/^[A-Za-z0-9]+$/.test(id)) throw new Error();
    embed.src = `https://open.spotify.com/embed/${type}/${id}?theme=0`;
    embedWrap.classList.remove("hidden");
  } catch {
    message.textContent = "Enter a valid Spotify track, album, playlist, show or episode URL.";
  }
}
loadBtn.addEventListener("click", loadSpotifyEmbed);
spotifyUrl.addEventListener("keydown", event => { if (event.key === "Enter") loadSpotifyEmbed(); });
