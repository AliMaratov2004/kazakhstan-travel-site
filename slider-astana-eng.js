
const attractions = [
  {
    title: "Baiterek",
    image: "images/baiterek-astana.jpg",
    desc: "A symbol of Astana and a stunning architectural marvel with an observation deck.",
    link: "detail-baiterek-eng.html"
  },
  {
    title: "Nur Alem",
    image: "images/expo-astana.jpg",
    desc: "The iconic spherical EXPO pavilion and Museum of Future Energy.",
    link: "detail-nuralem-eng.html"
  },
  {
    title: "Grand Mosque",
    image: "images/mosque-astana1.jpg",
    desc: "One of the largest mosques in Central Asia.",
    link: "detail-mosque-eng.html"
  },
  {
    title: "Khan Shatyr",
    image: "images/han-shatyr.jpg",
    desc: "A unique tent-shaped shopping and entertainment center.",
    link: "detail-hanshatyr-eng.html"
  },
  {
    title: "National Museum of Kazakhstan",
    image: "images/museum-astana.jpg",
    desc: "The largest museum showcasing Kazakhstan’s history and culture.",
    link: "detail-museum-eng.html"
  },
  {
    title: "MEGA Silk Way",
    image: "images/mega-astana.jpg",
    desc: "A large shopping and entertainment center with popular brand stores.",
    link: "detail-mega-eng.html"
  },
  {
    title: "Palace of Peace and Reconciliation",
    image: "images/palace-astana.jpg",
    desc: "A pyramid-shaped architectural landmark symbolizing unity.",
    link: "detail-palace-eng.html"
  },
  {
    title: "Library of the First President",
    image: "images/library-astana.jpg",
    desc: "A hub for knowledge, science, and cultural development.",
    link: "detail-library-eng.html"
  },
  {
    title: "‘Mangilik El’ Triumphal Arch",
    image: "images/arka-astana.jpg",
    desc: "A monument to Kazakhstan's independence and unity.",
    link: "detail-ark-eng.html"
  },
  {
    title: "Astana River Embankment",
    image: "images/river-astana.jpg",
    desc: "A beautiful promenade along the Ishim River for walks and relaxation.",
    link: "detail-river-eng.html"
  },
  {
    title: "Ak Orda Presidential Palace",
    image: "images/akorda-1.jpg",
    desc: "The official residence of the President of Kazakhstan.",
    link: "detail-akorda-eng.html"
  },
  {
    title: "Ailand Water Park",
    image: "images/ailand.jpg",
    desc: "The largest water park in Astana – fun for the whole family.",
    link: "detail-ailand-eng.html"
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
