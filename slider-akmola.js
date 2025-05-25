const attractions = [
    {
      title: "Бурабай",
      image: "images/burabay-blok.jpg",
      desc: "Бурабай Казахстанская Швейцария с горами и озёрами.",
      link: "detail-burabay.html"
    },
    {
      title: "Скала Окжетпес",
      image: "images/okzhetpes.jpg",
      desc: "Символ Бурабая с красивой легендой.",
      link: "detail-okzhetpes.html"
    },
    {
      title: "Скала Жумбақтас",
      image: "images/zhumbaktas.jpg",
      desc: "Загадочное скальное образование в озере.",
      link: "detail-zhumbaktas.html"
    },
    {
      title: "АЛЖИР",
      image: "images/alzhir.jpg",
      desc: "Мемориал жертвам политических репрессий.",
      link: "detail-alzhir.html"
    },
    {
      title: "Музей Кокшетау",
      image: "images/kokshetau-museum.jpg",
      desc: "История города и региона в одном месте.",
      link: "detail-kokshetau-museum.html"
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
  