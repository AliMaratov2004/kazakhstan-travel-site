const attractions = [
  {
    title: "Айтбай мешіті",
    image: "images/aitbay-meshit.jpg",
    desc: "Ұлттық сәулет стилінде салынған Қызылорданың тарихи мешіттерінің бірі.",
    link: "detail-aitbay-kazakh.html"
  },
  {
    title: "Байқоңыр ғарыш айлағы",
    image: "images/baikonur.jpg",
    desc: "Ғарышқа жол ашқан — әлемдегі ең алғашқы және ең ірі ғарыш айлағы.",
    link: "detail-baikonur -kazakh.html"
  },
  {
    title: "Қызылорда облыстық тарихи-өлкетану музейі",
    image: "images/museum-qyzylorda.jpg",
    desc: "Өңірдің бай тарихы мен мәдениетін таныстыратын орталық.",
    link: "detail-museumkzo-kazakh.html"
  },
  {
    title: "Қорқыт Ата мемориалды кешені",
    image: "images/korkyt.jpg",
    desc: "Ұлы ойшыл Қорқыт Атаға арналған рухани-мәдени кешен.",
    link: "detail-korkyt -kazakh.html"
  },
  {
    title: "Орталық алаң",
    image: "images/central-square.png",
    desc: "Қаланың жүрегі — мерекелер мен халық серуені өтетін орын.",
    link: "detail-square-kazakh.html"
  },
  {
    title: "Батырхан Шүкенов ескерткіші",
    image: "images/batyrkhan.jpg",
    desc: "Қазақ эстрадасының жарық жұлдызына арналған монумент.",
    link: "detail-batyrkhan-kazakh.html"
  },
  {
    title: "Arai City Mall",
    image: "images/arai-city.png",
    desc: "Қаланың заманауи сауда және ойын-сауық орталығы.",
    link: "detail-aray-kazakh.html"
  },
  {
    title: "Арал теңізінің жағалауы",
    image: "images/aral.jpg",
    desc: "Экологиялық және тарихи маңызы зор өңір.",
    link: "detail-aral-kazakh.html"
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
