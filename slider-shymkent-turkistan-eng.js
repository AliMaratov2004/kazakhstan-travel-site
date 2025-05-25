const attractions = [
{
  title: "Seyitzhan Qari Mosque",
  image: "images/shymkent-mosque.jpg",
  desc: "One of the largest mosques in South Kazakhstan – a pride of the city’s architecture.",
  link: "detail-seyitzhan-eng.html"
},
{
  title: "Khodja Akhmet Yassawi Mausoleum",
  image: "images/khodzha-ahmet-yassawi.jpg",
  desc: "A UNESCO World Heritage architectural masterpiece in Turkistan.",
  link: "detail-yassawi-eng.html"
},
{
  title: "Turkistan Caravanserai",
  image: "images/karavan-saray.jpg",
  desc: "A modern entertainment complex inspired by Eastern architecture.",
  link: "detail-karavan-saray-eng.html"
},
{
  title: "Shymkent Zoo",
  image: "images/shymkent-zoo.jpg",
  desc: "A perfect place for family recreation and exploring wildlife.",
  link: "detail-zoo-eng.html"
},
{
  title: "Shymkent History Museum",
  image: "images/shymkent-museum.jpg",
  desc: "Covers the region’s history and culture from ancient times to today.",
  link: "detail-museumshym-eng.html"
},
{
  title: "Otyrar",
  image: "images/otyrarr.jpg",
  desc: "The birthplace of great thinker Al-Farabi, home to ancient ruins.",
  link: "detail-otyrar-eng.html"
},
{
  title: "Shymkent Plaza",
  image: "images/shymkent-plaza.jpg",
  desc: "A modern shopping mall and a popular meeting spot.",
  link: "detail-shymkentplaza-eng.html"
},
{
  title: "Arystan Bab Mausoleum",
  image: "images/arystanbab.jpg",
  desc: "A sacred pilgrimage site known for its spiritual atmosphere.",
  link: "detail-arystanbab-eng.html"
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
  