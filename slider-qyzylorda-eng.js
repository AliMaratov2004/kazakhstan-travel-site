const attractions = [
  {
  title: "Aitbay Mosque",
  image: "images/aitbay-meshit.jpg",
  desc: "One of Kyzylorda’s historic mosques, built in national architectural style.",
  link: "detail-aitbay-eng.html"
},
{
  title: "Baikonur Cosmodrome",
  image: "images/baikonur.jpg",
  desc: "The world’s first and largest space launch facility — the gateway to space.",
  link: "detail-baikonur-eng.html"
},
{
  title: "Kyzylorda Regional History Museum",
  image: "images/museum-qyzylorda.jpg",
  desc: "A center showcasing the rich history and culture of the region.",
  link: "detail-museumkzo-eng.html"
},
{
  title: "Korkyt Ata Memorial Complex",
  image: "images/korkyt.jpg",
  desc: "A spiritual and cultural complex dedicated to the great thinker Korkyt Ata.",
  link: "detail-korkyt-eng.html"
},
{
  title: "Central Square",
  image: "images/central-square.png",
  desc: "The heart of the city — a venue for public celebrations and gatherings.",
  link: "detail-square-eng.html"
},
{
  title: "Batyrkhan Shukenov Monument",
  image: "images/batyrkhan.jpg",
  desc: "A monument to the bright star of Kazakh pop music.",
  link: "detail-batyrkhan-eng.html"
},
{
  title: "Arai City Mall",
  image: "images/arai-city.png",
  desc: "The city's modern shopping and entertainment center.",
  link: "detail-aray-eng.html"
},
{
  title: "Aral Sea Shore",
  image: "images/aral.jpg",
  desc: "A region of great ecological and historical importance.",
  link: "detail-aral-eng.html"
}
];

let currentIndex = 0;

function renderCards() {
  const container = document.querySelector(".attraction-cards");
  const controls = document.querySelector(".slider-controls");

  container.innerHTML = "";
  if (controls) container.appendChild(controls);

  const total = attractions.length;
  const view = [];

  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % total;
    view.push(attractions[index]);
  }

  view.forEach(attraction => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => location.href = attraction.link;

    card.innerHTML = `
      <img src="${attraction.image}" alt="${attraction.title}">
      <h5>${attraction.title}</h5>
      <p>${attraction.desc}</p>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards();

  document.querySelector(".slider-btn.next").addEventListener("click", () => {
    currentIndex = (currentIndex + 3) % attractions.length;
    renderCards();
  });

  document.querySelector(".slider-btn.prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 3 + attractions.length) % attractions.length;
    renderCards();
  });
});
