const attractions = [
  {
    title: "Мечеть Бекет Ата",
    image: "images/beket-ata.jpg",
    desc: "Тарихи тұлға Бекет Атаның жерасты мешіті — киелі орын.",
    link: "detail-beketata.html"
  },
  {
    title: "Скальная Тропа",
    image: "images/rock-trail.jpg",
    desc: "Маңғыстау жартастары арасындағы ерекше табиғи жол.",
    link: "detail-skala.html"
  },
  {
    title: "Мангистауский музей",
    image: "images/museum-mangystau.png",
    desc: "Өлкенің бай тарихы мен мәдени мұрасы көрсетілген музей.",
    link: "detail-museumaktau.html"
  },
  {
    title: "Урочище Босжира",
    image: "images/boszhira.jpg",
    desc: "Айға ұқсас ерекше ландшафтымен әйгілі табиғи шатқал.",
    link: "detail-boszhira.html"
  },
  {
    title: "Устюртский заповедник",
    image: "images/ustyurt.jpg",
    desc: "Сирек жануарлар мекендейтін қорық.",
    link: "detail-ustyurt.html"
  },
  {
    title: "Каспий теңізі",
    image: "images/caspian.jpg",
    desc: "Ақтаудың жаға жайлары мен Каспийдің тұзды сулары.",
    link: "detail-caspian.html"
  },
  {
    title: "Гора Шеркала",
    image: "images/sherkala.jpg",
    desc: "Аңыздарға толы ерекше пішінді тау.",
    link: "detail-sherkala.html"
  },
  {
    title: "Мангистауская областная мечеть",
    image: "images/mangystau-mosque.jpg",
    desc: "Өңірдің басты сәулеттік мешіті.",
    link: "detail-regionalmosque.html"
  },
  {
    title: "Благовещенский храм",
    image: "images/blagoveshensk.jpg",
    desc: "Православиелік сәулет өнерінің ескерткіші.",
    link: "detail-church.html"
  },
  {
    title: "Монумент Каравелла",
    image: "images/karavella.jpg",
    desc: "Каспий теңізіне қарап тұрған теңіз саяхатшыларына арнау.",
    link: "detail-karavella.html"
  },
  {
    title: "Памятник МИГ-21",
    image: "images/mig21.jpg",
    desc: "Ұшақ-памятник әскери тарихтың бір бөлшегі.",
    link: "detail-mig.html"
  },
  {
    title: "Tetysblu Theme Park",
    image: "images/tetysblu.jpg",
    desc: "Ақтаудағы отбасылық демалысқа арналған ірі аквапарк.",
    link: "detail-tetysblu.html"
  },
  {
    title: "Набережная Актау",
    image: "images/aktau-pier.jpg",
    desc: "Қала тұрғындары мен туристер сүйіп баратын серуен жолы.",
    link: "detail-naberezhnaya.html"
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
