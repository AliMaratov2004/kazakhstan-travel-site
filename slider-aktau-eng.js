const attractions = [
  {
  title: "Beket Ata Mosque",
  image: "images/beket-ata.jpg",
  desc: "An underground mosque of the historical figure Beket Ata – a sacred site.",
  link: "detail-beketata-eng.html"
},
{
  title: "Rock Trail",
  image: "images/rock-trail.jpg",
  desc: "A unique natural path among the rocky formations of Mangystau.",
  link: "detail-skala-eng.html"
},
{
  title: "Mangystau Regional Museum",
  image: "images/museum-mangystau.png",
  desc: "A museum showcasing the region’s rich history and cultural heritage.",
  link: "detail-museumaktau-eng.html"
},
{
  title: "Boszhira Canyon",
  image: "images/boszhira.jpg",
  desc: "A natural canyon famous for its moon-like landscape.",
  link: "detail-boszhira-eng.html"
},
{
  title: "Ustyurt Nature Reserve",
  image: "images/ustyurt.jpg",
  desc: "A reserve home to rare animal species.",
  link: "detail-ustyurt-eng.html"
},
{
  title: "Caspian Sea",
  image: "images/caspian.jpg",
  desc: "The salty waters and beaches of the Caspian Sea in Aktau.",
  link: "detail-caspian-eng.html"
},
{
  title: "Sherkala Mountain",
  image: "images/sherkala.jpg",
  desc: "A uniquely shaped mountain full of legends.",
  link: "detail-sherkala-eng.html"
},
{
  title: "Mangystau Regional Mosque",
  image: "images/mangystau-mosque.jpg",
  desc: "The main architectural mosque of the region.",
  link: "detail-regionalmosque-eng.html"
},
{
  title: "Annunciation Church",
  image: "images/blagoveshensk.jpg",
  desc: "A monument of Orthodox church architecture.",
  link: "detail-church-eng.html"
},
{
  title: "Caravelle Monument",
  image: "images/karavella.jpg",
  desc: "A dedication to seafarers facing the Caspian Sea.",
  link: "detail-karavella-eng.html"
},
{
  title: "MIG-21 Monument",
  image: "images/mig21.jpg",
  desc: "A fighter jet monument representing military history.",
  link: "detail-mig-eng.html"
},
{
  title: "Tetysblu Theme Park",
  image: "images/tetysblu.jpg",
  desc: "A large water park in Aktau for family recreation.",
  link: "detail-tetysblu-eng.html"
},
{
  title: "Aktau Seafront",
  image: "images/aktau-pier.jpg",
  desc: "A popular promenade for locals and tourists alike.",
  link: "detail-naberezhnaya-eng.html"
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
