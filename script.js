const img_array = [
  "./images/img.png",
  "./images/img2.jpg",
  "./images/img3.jpg",
];

function getIdFromUrl(url) {
  let query = url.split("?")[1];
  if (query === url || query === "") return;
  return query.split("=")[1];
}

window.onload = function () {
  let id = getIdFromUrl(window.location.href);
  let container = document.getElementById("container");
  let img = document.createElement("img");
  img.src = img_array[id - 1];
  container.innerHTML = "";
  container.appendChild(img);
};
