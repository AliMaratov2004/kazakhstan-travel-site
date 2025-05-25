const attractions = [
  {
  title: "Agash Mosque",
  image: "images/semei-agash.jpg",
  desc: "A unique 19th-century wooden mosque located in Semey.",
  link: "detail-agash-mosque-eng.html"
},
{
  title: "Mosque with Two Minarets",
  image: "images/semei-eki-minaret.jpg",
  desc: "One of Semey’s main religious landmarks, a gem of architecture.",
  link: "detail-minaret-mosque-eng.html"
},
{
  title: "Abai Monument",
  image: "images/semei-abai.jpg",
  desc: "A famous monument dedicated to the great Kazakh thinker Abai Qunanbaiuly.",
  link: "detail-abay-monument-eng.html"
},
{
  title: "Kabanbai Batyr Monument",
  image: "images/semei-kabanbai.jpg",
  desc: "A historical monument honoring the Kazakh warrior Kabanbai.",
  link: "detail-kabanbay-monument-eng.html"
},
{
  title: "Suspension Bridge",
  image: "images/semei-bridge.jpg",
  desc: "A unique engineering structure crossing the Irtysh River.",
  link: "detail-bridge-eng.html"
},
{
  title: "Abai Museum-Reserve",
  image: "images/semei-abai-museum.jpg",
  desc: "A complex dedicated to the life and works of Abai Qunanbaiuly.",
  link: "detail-abai-museum-eng.html"
},
{
  title: "Central City Park",
  image: "images/semei-park.jpg",
  desc: "A green recreational area in the heart of Semey.",
  link: "detail-city-park-eng.html"
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
