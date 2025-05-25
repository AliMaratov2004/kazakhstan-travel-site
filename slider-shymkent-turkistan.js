const attractions = [
    {
      title: "Мечеть Сейітжана қари",
      image: "images/shymkent-mosque.jpg",
      desc: "Одна из крупнейших мечетей Южного Казахстана – архитектурная гордость города.",
      link: "detail-seyitzhan.html"
    },
    {
        title: "Мавзолей Ходжи Ахмеда Ясави",
        image: "images/khodzha-ahmet-yassawi.jpg",
        desc: "Величественный архитектурный памятник в Туркестане, объект наследия ЮНЕСКО.",
        link: "detail-yassawi.html"
      },   
      {
        title: "Караван-Сарай Туркестан",
        image: "images/karavan-saray.jpg",
        desc: "Современный туристический комплекс с восточным колоритом и развлечениями.",
        link: "detail-karavan-saray.html"
      },         
    {
      title: "Зоопарк Шымкента",
      image: "images/shymkent-zoo.jpg",
      desc: "Прекрасное место для семейного отдыха и знакомства с животными.",
      link: "detail-zoo.html"
    },
    {
      title: "Исторический музей Шымкента",
      image: "images/shymkent-museum.jpg",
      desc: "Собрание истории и культуры региона от древности до наших дней.",
      link: "detail-museumshym.html"
    },
    {
      title: "Отырар",
      image: "images/otyrarr.jpg",
      desc: "Руины древнего города, родина философа Аль-Фараби.",
      link: "detail-otyrar.html"
    },
    {
      title: "Shymkent Plaza",
      image: "images/shymkent-plaza.jpg",
      desc: "Современный торговый центр и популярное место встреч.",
      link: "detail-shymkentplaza.html"
    },
    {
      title: "Арыстан Баб",
      image: "images/arystanbab.jpg",
      desc: "Священное место паломничества с уникальной атмосферой.",
      link: "detail-arystanbab.html"
    },
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
  