const attractions = [
  {
    title: "Ағаш мешіті",
    image: "images/semei-agash.jpg",
    desc: "Семей қаласындағы XIX ғасырдағы бірегей ағаш мешіт.",
    link: "detail-agash-mosque-kazakh.html"
  },
  {
    title: "Екі мұнаралы мешіт",
    image: "images/semei-eki-minaret.jpg",
    desc: "Семейдің басты діни ескерткіштерінің бірі, сәулет өнерінің жауһары.",
    link: "detail-minaret-mosque-kazakh.html"
  },
  {
    title: "Абай ескерткіші",
    image: "images/semei-abai.jpg",
    desc: "Ұлы қазақ ойшылы Абай Құнанбайұлына арналған әйгілі монумент.",
    link: "detail-abay-monument-kazakh.html"
  },
  {
    title: "Қабанбай батыр ескерткіші",
    image: "images/semei-kabanbai.jpg",
    desc: "Қазақ батыры Қабанбайға арналған тарихи ескерткіш.",
    link: "detail-kabanbay-monument -kazakh.html"
  },
  {
    title: "Аспалы көпір",
    image: "images/semei-bridge.jpg",
    desc: "Ертіс өзені арқылы өтетін бірегей инженерлік құрылым.",
    link: "detail-bridge-kazakh.html"
  },
  {
    title: "Абай мұражай-қорығы",
    image: "images/semei-abai-museum.jpg",
    desc: "Абай Құнанбайұлының өмірі мен шығармашылығына арналған кешен.",
    link: "detail-abai-museum-kazakh.html"
  },
  {
    title: "Қалалық орталық саябақ",
    image: "images/semei-park.jpg",
    desc: "Семей қаласының орталығындағы жасыл демалыс аймағы.",
    link: "detail-city-park-kazakh.html"
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
