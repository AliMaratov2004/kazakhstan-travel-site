const attractions = [
  {
  title: "Ancient Taraz Monuments Museum-Reserve",
  image: "images/taraz-museum-complex.jpg",
  desc: "An archaeological complex — the heart of the ancient city of Taraz.",
  link: "detail-taraz-museum-complex-eng.html"
},
{
  title: "Karakhan Mausoleum",
  image: "images/taraz-karakhan.jpg",
  desc: "A stunning example of Islamic architecture from the 11th century.",
  link: "detail-karakhan-eng.html"
},
{
  title: "Akyrtas Palace Complex",
  image: "images/taraz-akyrtas.jpg",
  desc: "A mysterious palace complex along the Great Silk Road.",
  link: "detail-akyrtas-eng.html"
},
{
  title: "Ancient Taraz Museum",
  image: "images/taraz-ancient-museum.jpeg",
  desc: "A modern museum dedicated to the rich history and heritage of Taraz.",
  link: "detail-ancient-taraz-eng.html"
},
{
  title: "Babaji Khatun Mausoleum",
  image: "images/taraz-babaji.jpg",
  desc: "A domed mausoleum from the 10th century dedicated to a noble woman.",
  link: "detail-babaji-eng.html"
},
{
  title: "Aisha Bibi Mausoleum",
  image: "images/taraz-aysha.jpg",
  desc: "A symbol of eternal love — a masterpiece of delicate architectural ornament.",
  link: "detail-ayshabibi-eng.html"
},
{
  title: "Quran-Shaped Mosque (Keneshan Qazhy)",
  image: "images/taraz-koran-mosque.jpg",
  desc: "A mosque with unique architecture shaped like the Quran.",
  link: "detail-keneshan-eng.html"
},
{
  title: "T. Ryskulov Park",
  image: "images/taraz-rysqulov-park.jpg",
  desc: "A green oasis for family recreation and cultural events.",
  link: "detail-rysqulovpark-eng.html"
},
{
  title: "Presidential Park",
  image: "images/taraz-president-park.png",
  desc: "A modern landscape park for rest and walking.",
  link: "detail-presidentpark-taraz-eng.html"
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
