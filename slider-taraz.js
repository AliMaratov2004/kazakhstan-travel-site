const attractions = [
  {
    title: "Музей-заповедник «Памятники древнего Тараза»",
    image: "images/taraz-museum-complex.jpg",
    desc: "Археологиялық кешен – көне Тараз қаласының жүрегі.",
    link: "detail-taraz-museum-complex.html"
  },
  {
    title: "Мавзолей Карахана",
    image: "images/taraz-karakhan.jpg",
    desc: "XI ғасырдағы ислам сәулетінің керемет ескерткіші.",
    link: "detail-karakhan.html"
  },
  {
    title: "Дворцовый комплекс Акыртас",
    image: "images/taraz-akyrtas.jpg",
    desc: "Мистикалық құрылыс – Ұлы Жібек жолындағы сарай кешені.",
    link: "detail-akyrtas.html"
  },
  {
    title: "Музей «Древний Тараз»",
    image: "images/taraz-ancient-museum.jpeg",
    desc: "Тараздың бай тарихы мен мұраларына арналған заманауи музей.",
    link: "detail-ancient-taraz.html"
  },
  {
    title: "Мавзолей Бабаджи-хатун",
    image: "images/taraz-babaji.jpg",
    desc: "X ғасырдағы әйел тұлғасына арналған күмбезді мавзолей.",
    link: "detail-babaji.html"
  },
  {
    title: "Мавзолей Айша-Биби",
    image: "images/taraz-aysha.jpg",
    desc: "Ғашықтар символы – нәзік өрнекті архитектура туындысы.",
    link: "detail-ayshabibi.html"
  },
  {
    title: "Мешіт-Коран (Кенесхан қажы)",
    image: "images/taraz-koran-mosque.jpg",
    desc: "Құран пішініндегі ерекше архитектуралы мешіт.",
    link: "detail-keneshan.html"
  },
  {
    title: "Парк им. Т. Рыскулова",
    image: "images/taraz-rysqulov-park.jpg",
    desc: "Отбасылық демалысқа арналған жасыл оазис.",
    link: "detail-rysqulovpark.html"
  },
  {
    title: "Президентский парк",
    image: "images/taraz-president-park.png",
    desc: "Заманауи ландшафттық саябақ – демалыс пен серуен орны.",
    link: "detail-presidentpark-taraz.html"
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
