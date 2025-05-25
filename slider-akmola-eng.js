const attractions = [
  {
  title: "Burabay",
  image: "images/burabay-blok.jpg",
  desc: "Burabay is known as the 'Kazakh Switzerland' with its mountains and lakes.",
  link: "detail-burabay-eng.html"
},
{
  title: "Okzhetpes Rock",
  image: "images/okzhetpes.jpg",
  desc: "The symbol of Burabay with a beautiful legend behind it.",
  link: "detail-okzhetpes-eng.html"
},
{
  title: "Zhumbaktas Rock",
  image: "images/zhumbaktas.jpg",
  desc: "A mysterious rock formation located in the lake.",
  link: "detail-zhumbaktas-eng.html"
},
{
  title: "ALZHIR Memorial",
  image: "images/alzhir.jpg",
  desc: "A memorial dedicated to victims of political repression.",
  link: "detail-alzhir-eng.html"
},
{
  title: "Kokshetau Museum",
  image: "images/kokshetau-museum.jpg",
  desc: "A place showcasing the history of the city and region.",
  link: "detail-kokshetau-museum-eng.html"
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
  