const appRoot = document.getElementById("root");
const fetcher = document.getElementById("fetcher");
fetcher.addEventListener("click", fetchImages);

function fetchImages() {
  fetch("/api")
  .then(response => response.json()) // Got trumped by this; Convert Response Object to json; Response blob to json
  .then(({ images }) => {
    processImages(images);
  });
}

function processImages(images) {
  const list = document.createElement("ul");

  images.forEach(image => {
    // Create elements
    const item = document.createElement("li");
    const title = document.createElement("h2");
    const author = document.createElement("span");
    const img = new Image();

    // Style elements
    item.classList.add("debug-card");
    title.classList.add("debug-title");
    author.classList.add("debug-author");

    // Populate elements
    title.innerText = image.name;
    author.innerText = ` by ${image.photographer}`;
    img.src = image.source;

    // Append elements
    item.appendChild(title);
    item.appendChild(author);
    item.appendChild(img);
    list.appendChild(item);
  });

  return document.body.appendChild(list);
}
