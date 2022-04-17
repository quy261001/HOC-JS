// API là gì ?
// Application Programming Interface
// https://api.github.com/users/evondev
// JSON.parse(data)
// const endpoint = "https://api.github.com/users";
// const userEl = document.querySelector(".username");
// // fetch

// async function displayUser(username) {
//   userEl.textContent = "Loading...";
//   const promise = await fetch(`${endpoint}/${username}`);
//   const data = await promise.json();
//   userEl.textContent = `${data.login}`;
//   console.log(promise);
// }
// function handleError() {
//   console.log("Something wrong with your api");
//   userEl.textContent = "No data found";
// }
// console.log(displayUser("evondev"));
// displayUser("asbc").catch(handleError);

// JOKE:
// https://icanhazdadjoke.com/
// const jokeButton = document.querySelector(".joke-button");
// const jokeHeading = document.querySelector(".joke-heading");
// const jokeWrapper = document.querySelector(".joke");
// const endpoint = "https://icanhazdadjoke.com/"

// async function handleJoke() {
//   const response = await fetch(endpoint, {
//     headers: {
//       accept: "application/json"
//     }
//   });
//   const data = await response.json();
//   return data;
// }
// handleJoke();



// jokeButton.addEventListener("click", async function() {
//   jokeWrapper.classList.add("is-loading");
//   const data = await handleJoke();
//   jokeHeading.textContent = data.id
//   jokeWrapper.classList.remove("is-loading");
// });

// Picsum
/* <div class="image-item">
        <img src="https://source.unsplash.com/random" alt="" />
      </div> */
// https://picsum.photos/v2/list




const imagesList = document.querySelector(".images");
const loadMore = document.querySelector(".load-more");
const loadImages = document.querySelector(".image-loader");
loadMore.style.display = "none"
let page = 1;
const endpoint = "https://picsum.photos/v2/list?limit=8";
function imageTemplate(url) {
  const template = `<div class="image-item">
  <img src="${url}" alt="" />
  </div>`;
  imagesList.insertAdjacentHTML("beforeend", template);
};
async function fetchImages(page = 1) {
  loadImages.style.display = "block";
  const response = await fetch(`${endpoint}&page=${page}`);
  const dataImages = await response.json();
  if (dataImages.length > 0 && Array.isArray(dataImages)) {
    loadImages.style.display = "none";
    loadMore.style.display = "block";
    dataImages.forEach((item) => {
      imageTemplate(item.download_url)
    })
  }
}
async function handleLoadMore() {
  page++;
  await fetchImages(page);
}
loadMore.addEventListener("click", handleLoadMore);
fetchImages();