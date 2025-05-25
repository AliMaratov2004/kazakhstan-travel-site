const attractions = [
    {
      title: "Шымбулак",
      image: "images/shymbulak.jpg",
      desc: "Главный горнолыжный курорт Казахстана в живописных горах.",
      link: "detail-shymbulak.html"
    },
    {
      title: "Медеу",
      image: "images/medeu.jpg",
      desc: "Самый высокогорный каток в мире, легенда зимнего спорта.",
      link: "detail-medeu.html"
    },
    {
      title: "Озёра Кольсай",
      image: "images/kolsai.jpg",
      desc: "Жемчужина Тянь-Шаня – каскад живописных горных озёр.",
      link: "detail-kolsai.html"
    },
    {
      title: "Озеро Каинды",
      image: "images/kayindy.jpg",
      desc: "Затопленный лес и магическая атмосфера природы.",
      link: "detail-kayindy.html"
    },
    {
      title: "Чарынский каньон",
      image: "images/charyn.jpg",
      desc: "Малый брат Гранд-Каньона – невероятные виды.",
      link: "detail-charyn.html"
    },
    {
      title: "Кок Тобе",
      image: "images/koktobe.jpg",
      desc: "Панорамная вершина с аттракционами и видом на Алматы.",
      link: "detail-koktobe.html"
    },
    {
      title: "Арбат",
      image: "images/arbat.jpg",
      desc: "Прогулочная улица с творческой атмосферой.",
      link: "detail-arbat.html"
    },
    {
      title: "MEGA Park & MEGA Alma-Ata",
      image: "images/mega-almaty.jpg",
      desc: "Крупнейшие ТРЦ Алматы с развлечениями и шопингом.",
      link: "detail-mega-almaty.html"
    },
    {
      title: "Президентский парк",
      image: "images/president-park.jpg",
      desc: "Зелёный оазис у подножия гор с фонтанами и аллеями.",
      link: "detail-presidentpark.html"
    },
    {
      title: "Сакские курганы",
      image: "images/saks.jpg",
      desc: "Древние курганы Великой степи – археологическое наследие.",
      link: "detail-saks.html"
    },
    {
      title: "Город кочевников",
      image: "images/nomadcity.jpg",
      desc: "Исторический комплекс – место съёмок казахских фильмов.",
      link: "detail-nomadcity.html"
    },
    {
      title: "Площадь Республики",
      image: "images/republic.jpg",
      desc: "Главная площадь Алматы – сердце городской жизни.",
      link: "detail-republic.html"
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
  