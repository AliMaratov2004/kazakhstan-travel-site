const attractions = [
  {
    title: "Шымбұлақ",
    image: "images/shymbulak.jpg",
    desc: "Қазақстандағы басты тау шаңғысы курорты — көркем тауларда орналасқан.",
    link: "detail-shymbulak-kazakh.html"
  },
  {
    title: "Медеу",
    image: "images/medeu.jpg",
    desc: "Әлемдегі ең биік орналасқан мұз айдыны, қысқы спорт аңызы.",
    link: "detail-medeu-kazakh.html"
  },
  {
    title: "Көлсай көлдері",
    image: "images/kolsai.jpg",
    desc: "Тянь-Шаньның інжу-маржаны – көркем таулы көлдер тізбегі.",
    link: "detail-kolsai-kazakh.html"
  },
  {
    title: "Қайыңды көлі",
    image: "images/kayindy.jpg",
    desc: "Су астындағы орман мен тылсым табиғат көрінісі.",
    link: "detail-kayindy-kazakh.html"
  },
  {
    title: "Шарын шатқалы",
    image: "images/charyn.jpg",
    desc: "Гранд-Каньонның қазақ нұсқасы – таңғажайып көріністер.",
    link: "detail-charyn-kazakh.html"
  },
  {
    title: "Көктөбе",
    image: "images/koktobe.jpg",
    desc: "Аттракциондары мен Алматыға панорамалық көрінісі бар төбе.",
    link: "detail-koktobe-kazakh.html"
  },
  {
    title: "Арбат",
    image: "images/arbat.jpg",
    desc: "Шығармашылыққа толы серуендеу көшесі.",
    link: "detail-arbat-kazakh.html"
  },
  {
    title: "MEGA Park & MEGA Alma-Ata",
    image: "images/mega-almaty.jpg",
    desc: "Алматыдағы ең ірі сауда-ойын-сауық орталықтары.",
    link: "detail-mega-almaty-kazakh.html"
  },
  {
    title: "Президент саябағы",
    image: "images/president-park.jpg",
    desc: "Тау етегіндегі субұрқақтары мен аллеялары бар жасыл оазис.",
    link: "detail-presidentpark-kazakh.html"
  },
  {
    title: "Сақ қорғандары",
    image: "images/saks.jpg",
    desc: "Ұлы даланың көне қорғандары – археологиялық мұра.",
    link: "detail-saks-kazakh.html"
  },
  {
    title: "Көшпенділер қаласы",
    image: "images/nomadcity.jpg",
    desc: "Тарихи кешен – қазақ фильмдері түсірілетін орын.",
    link: "detail-nomadcity-kazakh.html"
  },
  {
    title: "Республика алаңы",
    image: "images/republic.jpg",
    desc: "Алматының басты алаңы – қалалық өмірдің жүрегі.",
    link: "detail-republic-kazakh.html"
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
  