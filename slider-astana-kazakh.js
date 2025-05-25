
const attractions = [
  {
    title: "Бәйтерек",
    image: "images/baiterek-astana.jpg",
    desc: "Астананың символы, шолу алаңы бар сәулеттік ғажайып.",
    link: "detail-baiterek-kazakh.html"
  },
  {
    title: "Нұр-Әлем",
    image: "images/expo-astana.jpg",
    desc: "EXPO-ның сфералық павильоны, болашақ энергия мұражайы.",
    link: "detail-nuralem-kazakh.html"
  },
  {
    title: "Бас мешіт",
    image: "images/mosque-astana1.jpg",
    desc: "Орталық Азиядағы ең ірі мешіттердің бірі.",
    link: "detail-mosque-kazakh.html"
  },
  {
    title: "Хан Шатыр",
    image: "images/han-shatyr.jpg",
    desc: "Шатыр пішініндегі ерекше сауда-ойын-сауық орталығы.",
    link: "detail-hanshatyr-kazakh.html"
  },
  {
    title: "ҚР Ұлттық музейі",
    image: "images/museum-astana.jpg",
    desc: "Қазақстан тарихы мен мәдениетін бейнелейтін ең ірі музей.",
    link: "detail-museum-kazakh.html"
  },
  {
    title: "MEGA Silk Way",
    image: "images/mega-astana.jpg",
    desc: "Бренд дүкендері бар ірі сауда-ойын-сауық орталығы.",
    link: "detail-mega-kazakh.html"
  },
  {
    title: "Бейбітшілік және келісім сарайы",
    image: "images/palace-astana.jpg",
    desc: "Пирамида түріндегі бірегей сәулеттік құрылыс.",
    link: "detail-palace-kazakh.html"
  },
  {
    title: "Тұңғыш Президент кітапханасы",
    image: "images/library-astana.jpg",
    desc: "Білім, ғылым және мәдениет орталығы.",
    link: "detail-library-kazakh.html"
  },
  {
    title: "«Мәңгілік Ел» салтанат аркасы",
    image: "images/arka-astana.jpg",
    desc: "Қазақстан тәуелсіздігі мен бірлігінің монументі.",
    link: "detail-ark-kazakh.html"
  },
  {
    title: "Астана жағалауы",
    image: "images/river-astana.jpg",
    desc: "Есіл өзенінің бойындағы серуендеуге арналған көркем орын.",
    link: "detail-river-kazakh.html"
  },
  {
    title: "«Ақ Орда» резиденциясы",
    image: "images/akorda-1.jpg",
    desc: "Қазақстан Президентінің ресми резиденциясы.",
    link: "detail-akorda-kazakh.html"
  },
  {
    title: "Ailand аквапаркі",
    image: "images/ailand.jpg",
    desc: "Астанадағы ең ірі аквапарк – бүкіл отбасыға арналған ойын-сауық.",
    link: "detail-ailand-kazakh.html"
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
