const attractions = [
  {
    title: "Сейітжан қари мешіті",
    image: "images/shymkent-mosque.jpg",
    desc: "Оңтүстік Қазақстандағы ең үлкен мешіттердің бірі – қаланың сәулет мақтанышы.",
    link: "detail-seyitzhan-kazakh.html"
  },
  {
    title: "Қожа Ахмет Ясауи кесенесі",
    image: "images/khodzha-ahmet-yassawi.jpg",
    desc: "Түркістандағы ЮНЕСКО мұрасына енген ұлы сәулет ескерткіші.",
    link: "detail-yassawi-kazakh.html"
  },
  {
    title: "Караван-Сарай Түркістан",
    image: "images/karavan-saray.jpg",
    desc: "Шығыс үлгісіндегі заманауи туристік кешен, ойын-сауықпен үйлескен.",
    link: "detail-karavan-saray-kazakh.html"
  },
  {
    title: "Шымкент хайуанаттар бағы",
    image: "images/shymkent-zoo.jpg",
    desc: "Отбасылық демалыс пен жануарлармен танысудың тамаша орны.",
    link: "detail-zoo-kazakh.html"
  },
  {
    title: "Шымкент тарихи мұражайы",
    image: "images/shymkent-museum.jpg",
    desc: "Аймақ тарихы мен мәдениетін ежелгі дәуірден бүгінге дейін қамтыған.",
    link: "detail-museumshym-kazakh.html"
  },
  {
    title: "Отырар",
    image: "images/otyrarr.jpg",
    desc: "Ұлы ойшыл Әл-Фарабидің отаны, ежелгі қаланың қирандылары.",
    link: "detail-otyrar-kazakh.html"
  },
  {
    title: "Shymkent Plaza",
    image: "images/shymkent-plaza.jpg",
    desc: "Заманауи сауда орталығы және танымал кездесу орны.",
    link: "detail-shymkentplaza-kazakh.html"
  },
  {
    title: "Арыстан баб",
    image: "images/arystanbab.jpg",
    desc: "Қасиетті зиярат орны, ерекше рухани атмосферасымен танымал.",
    link: "detail-arystanbab-kazakh.html"
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
  