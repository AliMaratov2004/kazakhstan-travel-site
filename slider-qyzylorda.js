const attractions = [
  {
    title: "Мечеть Айтбая",
    image: "images/aitbay-meshit.jpg",
    desc: "Одна из исторических мечетей Кызылорды, построенная в национальном архитектурном стиле.",
    link: "detail-aitbay.html"
  },
  {
    title: "Космодром Байконур",
    image: "images/baikonur.jpg",
    desc: "Ворота в космос — первый и крупнейший космодром в мире.",
    link: "detail-baikonur .html"
  },
  {
    title: "Кызылординский областной историко-краеведческий музей",
    image: "images/museum-qyzylorda.jpg",
    desc: "Центр, знакомящий с богатой историей и культурой региона.",
    link: "detail-museumkzo.html"
  },
  {
    title: "Мемориальный комплекс Коркыт-Ата",
    image: "images/korkyt.jpg",
    desc: "Духовно-культурный комплекс, посвящённый великому мыслителю Коркыту Ата.",
    link: "detail-korkyt .html"
  },
  {
    title: "Центральная площадь",
    image: "images/central-square.png",
    desc: "Сердце города — место проведения праздников и отдыха горожан.",
    link: "detail-square.html"
  },
  {
    title: "Памятник Батырхану Шукенову",
    image: "images/batyrkhan.jpg",
    desc: "Монумент, посвящённый яркой звезде казахской эстрады.",
    link: "detail-batyrkhan.html"
  },
  {
    title: "Arai City Mall",
    image: "images/arai-city.png",
    desc: "Современный торгово-развлекательный центр города.",
    link: "detail-aray.html"
  },
  {
    title: "Побережье Аральского моря",
    image: "images/aral.jpg",
    desc: "Регион с экологическим и историческим значением.",
    link: "detail-aral.html"
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
