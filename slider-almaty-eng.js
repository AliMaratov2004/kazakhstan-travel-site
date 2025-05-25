const attractions = [
  {
  title: "Shymbulak",
  image: "images/shymbulak.jpg",
  desc: "Kazakhstan's main ski resort — located in picturesque mountains.",
  link: "detail-shymbulak-eng.html"
},
{
  title: "Medeu",
  image: "images/medeu.jpg",
  desc: "The world's highest ice rink, a legend of winter sports.",
  link: "detail-medeu-eng.html"
},
{
  title: "Kolsay Lakes",
  image: "images/kolsai.jpg",
  desc: "The pearls of the Tien Shan — a chain of scenic mountain lakes.",
  link: "detail-kolsai-eng.html"
},
{
  title: "Kaindy Lake",
  image: "images/kayindy.jpg",
  desc: "An underwater forest and a mysterious natural landscape.",
  link: "detail-kayindy-eng.html"
},
{
  title: "Charyn Canyon",
  image: "images/charyn.jpg",
  desc: "Kazakhstan’s version of the Grand Canyon — breathtaking views.",
  link: "detail-charyn-eng.html"
},
{
  title: "Kok Tobe",
  image: "images/koktobe.jpg",
  desc: "A hill with attractions and a panoramic view of Almaty.",
  link: "detail-koktobe-eng.html"
},
{
  title: "Arbat",
  image: "images/arbat.jpg",
  desc: "A creative pedestrian street full of life and art.",
  link: "detail-arbat-eng.html"
},
{
  title: "MEGA Park & MEGA Alma-Ata",
  image: "images/mega-almaty.jpg",
  desc: "The largest shopping and entertainment centers in Almaty.",
  link: "detail-mega-almaty-eng.html"
},
{
  title: "Presidential Park",
  image: "images/president-park.jpg",
  desc: "A green oasis with fountains and alleys at the mountain’s foot.",
  link: "detail-presidentpark-eng.html"
},
{
  title: "Saka Burial Mounds",
  image: "images/saks.jpg",
  desc: "Ancient burial sites of the Great Steppe — an archaeological treasure.",
  link: "detail-saks-eng.html"
},
{
  title: "Nomad City",
  image: "images/nomadcity.jpg",
  desc: "A historical complex — the filming location of Kazakh movies.",
  link: "detail-nomadcity-eng.html"
},
{
  title: "Republic Square",
  image: "images/republic.jpg",
  desc: "The main square of Almaty — the heart of city life.",
  link: "detail-republic-eng.html"
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
  