const attractions = [
  {
    title: "Бурабай",
    image: "images/burabay-blok.jpg",
    desc: "Таулары мен көлдері бар Қазақстанның Швейцариясы – Бурабай.",
    link: "detail-burabay-kazakh.html"
  },
  {
    title: "Оқжетпес жартасы",
    image: "images/okzhetpes.jpg",
    desc: "Аңызға толы Бурабай символы.",
    link: "detail-okzhetpes-kazakh.html"
  },
  {
    title: "Жұмбақтас жартасы",
    image: "images/zhumbaktas.jpg",
    desc: "Көл ішіндегі жұмбақ тасты құрылым.",
    link: "detail-zhumbaktas-kazakh.html"
  },
  {
    title: "АЛЖИР",
    image: "images/alzhir.jpg",
    desc: "Саяси қуғын-сүргін құрбандарына арналған мемориал.",
    link: "detail-alzhir-kazakh.html"
  },
  {
    title: "Көкшетау мұражайы",
    image: "images/kokshetau-museum.jpg",
    desc: "Қала мен өңір тарихы бір шаңырақтың астында.",
    link: "detail-kokshetau-museum-kazakh.html"
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
  