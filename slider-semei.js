const attractions = [
  {
    title: "Деревянная мечеть",
    image: "images/semei-agash.jpg",
    desc: "Уникальная деревянная мечеть XIX века в городе Семей.",
    link: "detail-agash-mosque.html"
  },
  {
    title: "Двухминаретная мечеть",
    image: "images/semei-eki-minaret.jpg",
    desc: "Один из главных религиозных памятников Семея, архитектурный шедевр.",
    link: "detail-minaret-mosque.html"
  },
  {
    title: "Памятник Абаю",
    image: "images/semei-abai.jpg",
    desc: "Знаменитый монумент великому казахскому мыслителю Абая Кунанбаева.",
    link: "detail-abay-monument.html"
  },
  {
    title: "Памятник Кабанбай-батыру",
    image: "images/semei-kabanbai.jpg",
    desc: "Исторический монумент, посвящённый казахскому герою Кабанбай-батыру.",
    link: "detail-kabanbay-monument .html"
  },
  {
    title: "Подвесной мост",
    image: "images/semei-bridge.jpg",
    desc: "Уникальное инженерное сооружение — мост через реку Иртыш.",
    link: "detail-bridge.html"
  },
  {
    title: "Музей-заповедник Абая",
    image: "images/semei-abai-museum.jpg",
    desc: "Комплекс, посвящённый жизни и творчеству Абая Кунанбаева.",
    link: "detail-abai-museum.html"
  },
  {
    title: "Центральный городской парк",
    image: "images/semei-park.jpg",
    desc: "Зелёная зона отдыха в центре города Семей.",
    link: "detail-city-park.html"
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
