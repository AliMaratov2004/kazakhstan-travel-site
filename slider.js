
const attractions = [
  {
    title: "Байтерек",
    image: "images/baiterek-astana.jpg",
    desc: "Символ Астаны, архитектурное чудо с обзорной площадкой.",
    link: "detail-baiterek.html"
  },
  {
    title: "Nur-Alem",
    image: "images/expo-astana.jpg",
    desc: "Сферический павильон EXPO, музей будущего энергии.",
    link: "detail-nuralem.html"
  },
  {
    title: "Главная Мечеть",
    image: "images/mosque-astana1.jpg",
    desc: "Одна из крупнейших мечетей Центральной Азии.",
    link: "detail-mosque.html"
  },
  {
    title: "Хан-Шатыр",
    image: "images/han-shatyr.jpg",
    desc: "Необычный торгово-развлекательный центр в форме шатра.",
    link: "detail-hanshatyr.html"
  },
  {
    title: "Национальный музей РК",
    image: "images/museum-astana.jpg",
    desc: "Крупнейший музей, отражающий историю и культуру Казахстана.",
    link: "detail-museum.html"
  },
  {
    title: "MEGA Silk Way",
    image: "images/mega-astana.jpg",
    desc: "Крупный торгово-развлекательный центр с брендовыми магазинами.",
    link: "detail-mega.html"
  },
  {
    title: "Дворец Мира и Согласия",
    image: "images/palace-astana.jpg",
    desc: "Уникальное архитектурное сооружение в форме пирамиды.",
    link: "detail-palace.html"
  },
  {
    title: "Библиотека Первого Президента",
    image: "images/library-astana.jpg",
    desc: "Центр знаний, науки и культуры.",
    link: "detail-library.html"
  },
  {
    title: "Триумфальная арка 'Мәңгілік Ел'",
    image: "images/arka-astana.jpg",
    desc: "Монумент независимости и единства Казахстана.",
    link: "detail-ark.html"
  },
  {
    title: "Набережная Астаны",
    image: "images/river-astana.jpg",
    desc: "Живописное место для прогулок у реки Есиль.",
    link: "detail-river.html"
  },
  {
    title: "Резиденция «Ак Орда»",
    image: "images/akorda-1.jpg",
    desc: "Официальная резиденция Президента Казахстана.",
    link: "detail-akorda.html"
  },
  {
    title: "Аквапарк Ailand",
    image: "images/ailand.jpg",
    desc: "Крупнейший аквапарк в столице с развлечениями для всей семьи.",
    link: "detail-ailand.html"
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
