document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector(".hero");
    const heroTitle = document.querySelector(".hero-content h1");
    const heroText = document.querySelector(".hero-content p");
    const carouselContainer = document.querySelector(".carousel-container");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

let slides = [
    {
        image: "images/backgraund.jpg",
        title: "BAYTEREK (ASTANA)",
        text: "A symbol of the capital – a 97-meter tower offering panoramic views of the city.",
        position: "center",
        link: "detail-baiterek-eng.html"
    },
    {
        image: "images/astanamosque.jpg",
        title: "MAIN MOSQUE OF ASTANA",
        text: "The largest mosque in Central Asia, featuring impressive architecture and interior design.",
        position: "left",
        link: "detail-mosque-eng.html"
    },
    {
        image: "images/kolsaylake.jpg",
        title: "KOLSAI LAKE (ALMATY)",
        text: "Scenic mountain lakes with breathtaking landscapes.",
        position: "center",
        link: "detail-kolsay-eng.html"
    },
    {
        image: "images/shymbulakwinter.jpg",
        title: "SHYMBULAK (ALMATY)",
        text: "The highest mountain skating rink in the world and a popular ski resort.",
        position: "center",
        link: "detail-shymbulak-eng.html"
    },
    {
        image: "images/turkistan.jpg",
        title: "MAUSOLEUM OF KHOJA AHMED YASSAWI (TURKISTAN)",
        text: "A grand 14th-century architectural monument and UNESCO World Heritage site.",
        position: "center",
        link: "detail-yassawi-eng.html"
    }
];

    

    function updateCarousel() {
        if (!carouselContainer) return;
        carouselContainer.innerHTML = "";
        slides.slice(1, 4).forEach((slide) => {
            const img = document.createElement("img");
            img.src = slide.image;
            img.classList.add("carousel-item");
            img.style.width = "288px";
            img.style.height = "356px";
            img.style.borderRadius = "20px";
            img.style.objectFit = "cover";
            img.style.objectPosition = slide.position;
            img.onclick = changeSlideForward;
            carouselContainer.appendChild(img);
        });
    }

    function changeSlideForward() {
        slides.push(slides.shift());
        updateContent();
    }

    function changeSlideBackward() {
        slides.unshift(slides.pop());
        updateContent();
    }

    function updateContent() {
        if (!heroSection || !heroTitle || !heroText) return;
        heroSection.style.backgroundImage = `url(${slides[0].image})`;
        heroTitle.textContent = slides[0].title;
        heroText.textContent = slides[0].text;
        updateCarousel();
    }

    if (prevButton) prevButton.addEventListener("click", changeSlideBackward);
    if (nextButton) nextButton.addEventListener("click", changeSlideForward);

    const scrollButton = document.querySelector(".scroll-down");
if (scrollButton) {
    scrollButton.addEventListener("click", () => {
        window.location.href = slides[0].link;
    });
}

    updateCarousel();

    const destinationsTitle = document.querySelector(".destinations-content h2");
    const destinationsSubtitle = document.querySelector(".destinations-content h3");
    const destinationsText = document.querySelector(".destinations-content p");
    const thumbnailsContainer = document.querySelector(".destinations-thumbnails");
    const prevDestButton = document.querySelector(".prev-dest");
    const nextDestButton = document.querySelector(".next-dest");
    const detailsBtn = document.getElementById("dest-details-btn");
    
    let destinations = [
        {
            city: "ASTANA",
            title: "Top Places in the Capital",
            text: "Dive into the atmosphere of Kazakhstan's capital — from modern landmarks like Bayterek and the Grand Mosque to historical sites.",
            images: ["images/expo.jpg", "images/khanshatyr.jpg", "images/astanamosque.jpg", "images/museum.jpg", "images/bayterek-night.jpg"]
  },
  {
    city: "ALMATY",
    title: "Top Places in Almaty",
    text: "Almaty is the heart of southern Kazakhstan, a city that blends modern life, nature, and history beautifully.",
    images: ["images/medeu.jpg", "images/koktobe.jpg", "images/kayndy.jpg", "images/kolsay.jpg", "images/charyn.png"]
  },
  {
    city: "AKMOLA REGION",
    title: "Top Places in Akmola Region",
    text: "The Akmola Region is known for its natural beauty, lakes, and deep-rooted history.",
    images: ["images/alzhyr.jpg", "images/movbatyrb.jpg", "images/museumsaken.jpg", "images/kokshetau.jpg", "images/burabay.jpg"]
  },
  {
    city: "SHYMKENT & TURKESTAN",
    title: "Top Attractions in Shymkent & Turkestan Region",
    text: "Southern Kazakhstan is rich in history and culture, filled with mausoleums and sacred sites.",
    images: ["images/karavan.png", "images/zoo.jpg", "images/otyrar.jpg", "images/shymplaza.jpg", "images/turkistan.jpg"]
  }
];

const destinationLinks = [
  ["detail-nuralem-eng.html", "detail-hanshatyr-eng.html", "detail-mosque-eng.html", "detail-museum-eng.html", "detail-baiterek-eng.html"],
  ["detail-medeu-eng.html", "detail-koktobe-eng.html", "detail-kaindy-eng.html", "detail-kolsay-eng.html", "detail-charyn-eng.html"],
  ["detail-alzhir-eng.html", "detail-museumbatyr-eng.html", "detail-museumsaken-eng.html", "detail-tele-eng.html", "detail-burabay-eng.html"],
  ["detail-karavan-saray-eng.html", "detail-zoo-eng.html", "detail-otyrar-eng.html", "detail-shymkentplaza-eng.html", "detail-yassawi-eng.html"]
];

    
    const regionLinks = ["astana-eng.html", "almaty-eng.html", "akmola-eng.html", "shymkent-turkistan-eng.html"];
    
    let destCurrentIndex = 0;
    
    function updateDestinations(direction = "next") {
    if (!destinationsTitle || !destinationsSubtitle || !destinationsText || !thumbnailsContainer) return;

    destinationsTitle.textContent = destinations[destCurrentIndex].title;
    destinationsSubtitle.textContent = destinations[destCurrentIndex].city;
    destinationsText.textContent = destinations[destCurrentIndex].text;

    // Обновить миниатюры
    thumbnailsContainer.innerHTML = "";
    destinations[destCurrentIndex].images.forEach((imgSrc, index) => {
        const link = document.createElement("a");
        link.href = destinationLinks[destCurrentIndex][index];

        const img = document.createElement("img");
        img.src = imgSrc;
        img.classList.add("dest-thumb");
        if (index === 4) img.classList.add("highlighted");

        link.appendChild(img);
        thumbnailsContainer.appendChild(link);
    });

    // Обновить ссылку на кнопку "Подробнее"
    if (detailsBtn && regionLinks[destCurrentIndex] !== undefined) {
        detailsBtn.setAttribute("href", regionLinks[destCurrentIndex]);
        detailsBtn.style.pointerEvents = "auto";
        detailsBtn.style.opacity = "1";
    } else {
        detailsBtn.setAttribute("href", "#");
        detailsBtn.style.pointerEvents = "none";
        detailsBtn.style.opacity = "0.5";
    }

    // Анимация
    thumbnailsContainer.classList.add(direction === "next" ? "slide-right" : "slide-left");
    setTimeout(() => {
        thumbnailsContainer.classList.remove("slide-right", "slide-left");
    }, 500);
}

      
        // Обновить ссылку на кнопку "Подробнее"
if (detailsBtn && regionLinks[destCurrentIndex] !== undefined) {
    detailsBtn.setAttribute("href", regionLinks[destCurrentIndex]);
    detailsBtn.style.pointerEvents = "auto"; // Белсенді ету
    detailsBtn.style.opacity = "1"; // Толық көріну
} else {
    detailsBtn.setAttribute("href", "#"); // Қате болмас үшін бос сілтеме
    detailsBtn.style.pointerEvents = "none"; // Басылмайтын ету
    detailsBtn.style.opacity = "0.5"; // Көрнекі түрде өшіру
}

      


    
    // События
    prevDestButton.addEventListener("click", function () {
        destCurrentIndex = (destCurrentIndex - 1 + destinations.length) % destinations.length;
      updateDestinations("prev");
    });
    
    nextDestButton.addEventListener("click", function () {
        destCurrentIndex = (destCurrentIndex + 1) % destinations.length;
      updateDestinations("next");
    });
    
    // Инициализация
    updateDestinations();
    
    
    
    
        // --- Смена сезонов с анимацией сдвига ---
        const seasonSection = document.querySelector(".seasons");
        const seasonTitle = document.querySelector(".seasons-content h2");
        const seasonText = document.querySelector(".seasons-content p");
        const prevSeasonButton = document.querySelector(".prev-season");
        const nextSeasonButton = document.querySelector(".next-season");
    let seasons = [
  {
    title: "4 SEASONS",
    text: "Winter in Kazakhstan is a time of snowy landscapes, winter sports, and cozy traditions. Ski resorts like Shymbulak in Almaty, Ak-Bulak, Tabagan, and Nurtau in Ust-Kamenogorsk attract skiers and snowboarders. The Medeu skating rink, located at 1691 meters above sea level, offers skating among snow-capped peaks. For thrill-seekers, there’s ice fishing on Lake Balkhash, Zaysan, or the Caspian Sea, and snowmobile safaris across the snowy steppe. In some regions, you can ride dog or reindeer sleds and enjoy the serene expanses. After active fun, relax in the hot springs of Chundzha or Rakhmanov Keys, surrounded by snowy mountains. Winter is also the season of holidays: Kazakhstan celebrates Nauryz Kyshy, Christmas, and New Year, with festive lights, fairs, and ice festivals in the mountains.",
    background: "images/winter-bg.jpg"
  },
  {
    title: "SPRING",
    text: "Spring in Kazakhstan is a time of blooming steppes, nature's awakening, and centuries-old traditions. In March, the country celebrates Nauryz, the main national holiday symbolizing renewal and the spring equinox. Cities host parades, folk festivities, and sports games. The steppes, especially in Almaty Region and Altyn-Emel National Park, turn into vibrant carpets of tulips and irises. It’s a great time to visit the Charyn Canyon and witness nature come alive after winter. Spring also marks the start of the festival season, including ethnographic and open-air music events. Hiking in the Tian Shan and Zhetysu mountains offers lush trails and rushing rivers fed by melting snow. Equestrian games like kokpar and traditional races are also held in the steppe regions.",
    background: "images/spring-bg.jpg"
  },
  {
    title: "SUMMER",
    text: "Summer in Kazakhstan means hot steppes, cool mountain rivers, and endless beaches. It’s perfect for exploring the majestic Tian Shan mountains, swimming in the turquoise Kolsai Lakes, or relaxing on the Caspian Sea coast. Nature lovers flock to reserves like Katon-Karagay and Bayanaul for waterfalls, forests, and scenic views. For adventurers, there are horseback routes through the steppe, white-water rafting, and ATV tours on Altyn-Emel’s dunes. Summer is also festival season: the annual Nomad Ethno Festival showcases nomadic culture, while Almaty hosts open-air jazz concerts. Kazakhstan’s canyons, such as Bozzhira and Kapchagay, draw photographers and explorers in the warmer months.",
    background: "images/summer-bg.jpg"
  },
  {
    title: "AUTUMN",
    text: "Autumn in Kazakhstan brings golden steppes, crimson forests, and harvest abundance. Cities glow with warm fall colors while rural areas begin gathering apples, grapes, and melons. It's the perfect time for food tourism: markets overflow with fresh produce, and wine festivals are held in Mangystau and Zhetysu. The season is ideal for visiting mountain areas like Kok-Tobe and Medeu, where misty sunrises add a magical feel. Nature lovers visit Bayanaul National Park or Lake Kaindy with its submerged trees. Traditional horse races begin in the steppe, and cities like Turkistan and Taraz host historical reenactments. Autumn also marks the start of the hunting season, including the famous eagle hunting.",
    background: "images/autumn-bg.jpg"
  }
];


    let currentSeason = 0;
    

    function updateSeason(direction) {
        if (!seasonSection || !seasonTitle || !seasonText) return;

        let flipClass = direction === "next" ? "flip-left" : "flip-right";
        seasonSection.classList.add(flipClass);

        setTimeout(() => {
            seasonTitle.textContent = seasons[currentSeason].title;
            seasonText.textContent = seasons[currentSeason].text;
            seasonSection.style.backgroundImage = `url(${seasons[currentSeason].background})`;

            // Убираем анимацию после смены
            seasonSection.classList.remove(flipClass);
        }, 600); // Время анимации
    }

    if (prevSeasonButton) {
        prevSeasonButton.addEventListener("click", function () {
            currentSeason = (currentSeason - 1 + seasons.length) % seasons.length;
            updateSeason("prev");
        });
    }

    if (nextSeasonButton) {
        nextSeasonButton.addEventListener("click", function () {
            currentSeason = (currentSeason + 1) % seasons.length;
            updateSeason("next");
        });
    }

    updateSeason();
});

// === Глобальные переменные ===
let map;
let directionsService;
let directionsRenderer;
let userMarker;
let userPosition = null;
let markers = [];
let openInfoWindows = [];
let alternativeRenderers = [];
let currentDestination = null;
let busRoutePolyline = null;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 47.9, lng: 67.4 },
  });

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({
    suppressMarkers: true,
    polylineOptions: {
      strokeColor: "#1f1f1f",
      strokeOpacity: 0.9,
      strokeWeight: 5
    }
  });
  directionsRenderer.setMap(map);

  userMarker = new google.maps.Marker({
    map,
    title: "Вы здесь",
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 8,
      fillColor: "#4285F4",
      fillOpacity: 1,
      strokeWeight: 2,
      strokeColor: "white"
    }
  });

  document.getElementById("locate-me").addEventListener("click", showUserLocation);
  document.getElementById("travel-mode").addEventListener("change", () => {
    if (currentDestination) {
      getRoute(currentDestination.lat, currentDestination.lng);
    }
  });
  document.getElementById("bus-selector").addEventListener("change", function () {
    const value = this.value;
    if (value === "bus50") {
      showBusRoute(bus50Route);
    }
  });

  function showUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          userPosition = pos;
          map.panTo(pos);
          map.setZoom(14);
          userMarker.setPosition(pos);
          userMarker.setAnimation(google.maps.Animation.BOUNCE);
        },
        () => alert("Couldn't determine the location.")
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }

  let walkingPolyline = null;

  function getRoute(destLat, destLng) {
    if (!userPosition) {
      alert("First, click the 'My Location' button!");
      return;
    }
  
    if (busRoutePolyline) {
      busRoutePolyline.setMap(null);
      busRoutePolyline = null;
    }
  
    const selectedMode = document.getElementById("travel-mode").value;
  
    const request = {
      origin: userPosition,
      destination: { lat: destLat, lng: destLng },
      travelMode: google.maps.TravelMode[selectedMode],
      provideRouteAlternatives: true
    };
  
    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        closeAllInfoWindows();
        
        // Негізгі бағыт — қою көк
        directionsRenderer.setDirections(result);
        directionsRenderer.setRouteIndex(0);
        directionsRenderer.setOptions({
          polylineOptions: {
            strokeColor: '#1f5fff',
            strokeOpacity: 1,
            strokeWeight: 5
          }
        });
  
        // Альтернативаларды өшіріп қайта саламыз
        alternativeRenderers.forEach(r => r.setMap(null));
        alternativeRenderers = [];
  
        // Әр альтернативті маршрут — ашық көк, және басқанда негізгіге айналады
        for (let i = 1; i < result.routes.length; i++) {
          const altRenderer = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            preserveViewport: true,
            polylineOptions: {
              strokeColor: '#9ecfff',
              strokeOpacity: 0.6,
              strokeWeight: 4
            }
          });
          altRenderer.setMap(map);
          altRenderer.setDirections(result);
          altRenderer.setRouteIndex(i);
          alternativeRenderers.push(altRenderer);
  
          // Басу әрекетін қосу:
          google.maps.event.addListener(altRenderer, 'click', () => {
            directionsRenderer.setRouteIndex(i);
            directionsRenderer.setDirections(result);
            directionsRenderer.setOptions({
              polylineOptions: {
                strokeColor: '#1f5fff',
                strokeOpacity: 1,
                strokeWeight: 5
              }
            });
  
            // Ақпаратты жаңарту
            const leg = result.routes[i].legs[0];
            document.getElementById("route-info").innerText =
              `⏱ В пути: ${leg.duration.text} | 📏 Расстояние: ${leg.distance.text}`;
          });
        }
  
        const leg = result.routes[0].legs[0];
        document.getElementById("route-info").innerText =
          `⏱ В пути: ${leg.duration.text} | 📏 Расстояние: ${leg.distance.text}`;
      } else {
        alert("Couldn't set route: " + status);
      }
    });
  }
  
  
  function showBusRoute(routeCoordinates) {
    if (busRoutePolyline) {
      busRoutePolyline.setMap(null);
    }

    busRoutePolyline = new google.maps.Polyline({
      path: routeCoordinates,
      map: map,
      strokeColor: "#007bff",
      strokeOpacity: 1,
      strokeWeight: 4
    });

    directionsRenderer.setDirections({ routes: [] });

    // Расчёт расстояния
    let totalDistance = 0;
    for (let i = 1; i < routeCoordinates.length; i++) {
      totalDistance += google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(routeCoordinates[i - 1].lat, routeCoordinates[i - 1].lng),
        new google.maps.LatLng(routeCoordinates[i].lat, routeCoordinates[i].lng)
      );
    }

    // Примерная скорость автобуса ~25 км/ч
    const avgBusSpeed = 25;
    const timeInHours = totalDistance / 1000 / avgBusSpeed;
    const minutes = Math.round(timeInHours * 60);

    document.getElementById("route-info").innerText = 
      `🚌 Bus route No. 50 | ⏱ ~${minutes} мин | 📏 ~${(totalDistance / 1000).toFixed(1)} км`;
  }

  function closeAllInfoWindows() {
    openInfoWindows.forEach(win => win.close());
    openInfoWindows.length = 0;
  }

  function renderMarkers(locations) {
    markers.forEach(marker => marker.setMap(null));
    markers = [];
    openInfoWindows.forEach(win => win.close());
    openInfoWindows = [];

    locations.forEach(loc => {
        const marker = new google.maps.Marker({
            position: loc.position,
            map,
            title: loc.title
        });

        const content = document.createElement("div");
        content.innerHTML = `
            <div style="max-width: 260px; font-family: 'Inter', sans-serif; padding: 10px;">
                <div style="width: 100%; height: 140px; overflow: hidden; border-radius: 8px; margin-bottom: 10px;">
                    <img src="${loc.image}" alt="${loc.title}" style="width: 100%; height: 100%; object-fit: cover; object-position: ${loc.imagePosition || 'center 50%'}; display: block;" />
                </div>
                <h3 style="margin: 0 0 5px 0; font-size: 18px; color: #333;">${loc.title}</h3>
                <p style="margin: 0 0 10px 0; font-size: 14px; color: #555;">${loc.description}</p>
                <a href="${loc.link}" style="display: inline-block; background: #E9A400; color: white; padding: 6px 12px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 14px;"></a>
                <br><br>
                <button class="route-btn" style="background: #4285F4; color: white; border: none; padding: 6px 12px; border-radius: 4px; margin-top: 5px; cursor: pointer;">📍 Маршрут</button>
            </div>
        `;

        const infoWindow = new google.maps.InfoWindow({ content });

        marker.addListener("click", () => {
            closeAllInfoWindows();
            infoWindow.open(map, marker);
            openInfoWindows.push(infoWindow);

            // При клике на маркер проверяем рекомендации в радиусе 3 км
            checkNearbyRecommendations(loc);
        });

        google.maps.event.addListener(infoWindow, "domready", () => {
            const routeBtn = content.querySelector(".route-btn");
            if (routeBtn) {
                routeBtn.addEventListener("click", () => {
                    infoWindow.close();
                    document.getElementById("travel-mode").value = "WALKING";
                    currentDestination = loc.position;
                    getRoute(loc.position.lat, loc.position.lng);
                });
            }
        });

        markers.push(marker);
    });
  }


  // пример вызова renderMarkers и фильтрации данных по региону можно вставить по аналогии с предыдущими частями
  const locations = [
// === ASTANA ===
{
    title: "Baiterek",
    description: "Symbol of the capital of Kazakhstan.",
    position: { lat: 51.128316, lng: 71.4305155 },
    region: "Astana",
    category: "Modern Attractions",
    image: "images/bayterek-night.jpg",
    link: "detail-baiterek-eng.html"
},
{
    title: "Nur-Alem",
    description: "Futuristic EXPO energy museum.",
    position: { lat: 51.0902, lng: 71.4180 },
    region: "Astana",
    category: "Entertainment & Cultural Sites",
    image: "images/nuralem-1.jpg",
    link: "detail-nuralem-eng.html",
    imagePosition: "center 70%"
},
{
    title: "Astana Grand Mosque",
    description: "One of the largest mosques in Central Asia.",
    position: { lat: 51.0730730, lng: 71.4113276 },
    region: "Astana",
    category: "Cultural & Religious Sites",
    image: "images/mosque-1.jpg",
    link: "detail-mosque-eng.html",
    imagePosition: "center 60%"
},
{
    title: "Khan Shatyr",
    description: "Futuristic shopping and entertainment center.",
    position: { lat: 51.1325301, lng: 71.4037303 },
    region: "Astana",
    category: "Shopping Malls",
    image: "images/hanshatyr-1.jpg",
    link: "detail-hanshatyr-eng.html",
    imagePosition: "center 90%"
},
{
    title: "National Museum of Kazakhstan",
    description: "The largest museum in the country.",
    position: { lat: 51.1184908, lng: 71.4696516 },
    region: "Astana",
    category: "Cultural & Religious Sites",
    image: "images/museum-1.jpg",
    link: "detail-museum-eng.html",
    imagePosition: "center 30%"
},
{
    title: "MEGA Silk Way",
    description: "Huge shopping mall near EXPO.",
    position: { lat: 51.0892, lng: 71.4045 },
    region: "Astana",
    category: "Shopping Malls",
    image: "images/mega-astana.jpg",
    link: "detail-mega-eng.html"
},
{
    title: "Palace of Peace and Reconciliation",
    description: "Pyramid symbolizing tolerance and unity.",
    position: { lat: 51.1231084, lng: 71.4636327 },
    region: "Astana",
    category: "Modern Attractions",
    image: "images/palace-astana.jpg",
    link: "detail-palace-eng.html",
    imagePosition: "center 30%"
},
{
    title: "Library of the First President",
    description: "Modern building housing a museum.",
    position: { lat: 51.1166567, lng: 71.442891 },
    region: "Astana",
    category: "Modern Attractions",
    image: "images/library-1.jpg",
    link: "detail-library-eng.html",
    imagePosition: "center 30%"
},
{
    title: "Mangilik El Arch",
    description: "Triumphal arch with panoramic views.",
    position: { lat: 51.1042916, lng: 71.4300961 },
    region: "Astana",
    category: "Architectural Monuments",
    image: "images/arka-astana.jpg",
    link: "detail-ark-eng.html"
},
{
    title: "Astana Riverwalk",
    description: "Scenic walking area along the Ishim River.",
    position: { lat: 51.1568345, lng: 71.4268470 },
    region: "Astana",
    category: "Parks & Natural Areas",
    image: "images/river-1.jpg",
    link: "detail-river-eng.html",
    imagePosition: "center 30%"
},
{
    title: "Ak Orda Presidential Palace",
    description: "Official residence of the President of Kazakhstan.",
    position: { lat: 51.1257401, lng: 71.4463504 },
    region: "Astana",
    category: "Architectural Monuments",
    image: "images/akorda-1.jpg",
    link: "detail-akorda-eng.html",
    imagePosition: "center 70%"
},
{
    title: "Ailand",
    description: "Water park, dolphinarium, and oceanarium.",
    position: { lat: 51.1476613, lng: 71.4159771 },
    region: "Astana",
    category: "Entertainment & Cultural Sites",
    image: "images/ailand-2.jpg",
    link: "detail-ailand-eng.html"
},


    // === ALMATY ===
{
    title: "Shymbulak",
    description: "Ski resort in the mountains of Almaty.",
    position: { lat: 43.1577486, lng: 77.0661976 },
    region: "Almaty",
    category: "Ski Resorts",
    image: "images/shymbulak-bg.jpg",
    link: "detail-shymbulak-eng.html"
},
{
    title: "Medeu",
    description: "High-mountain skating rink near Shymbulak.",
    position: { lat: 43.1579719, lng: 77.0567687 },
    region: "Almaty",
    category: "Ski Resorts",
    image: "images/medeu-2.jpg",
    link: "detail-medeu-eng.html"
},
{
    title: "Kolsai Lakes",
    description: "Scenic mountain lakes.",
    position: { lat: 42.9390934, lng: 78.3243566 },
    region: "Almaty",
    category: "Natural Attractions",
    image: "images/kolsay-2.jpg",
    link: "detail-kolsai-eng.html"
},
{
    title: "Kaindy Lake",
    description: "Lake with a sunken forest.",
    position: { lat: 42.984461, lng: 78.4657918 },
    region: "Almaty",
    category: "Natural Attractions",
    image: "images/kaindy-bg.jpg",
    link: "detail-kaindy-eng.html"
},
{
    title: "Charyn Canyon",
    description: "Kazakhstan’s mini Grand Canyon.",
    position: { lat: 43.3598684, lng: 79.0309748 },
    region: "Almaty",
    category: "Natural Attractions",
    image: "images/charyn-bg.webp",
    link: "detail-charyn-eng.html"
},
{
    title: "Kok Tobe",
    description: "Hill with panoramic view and park.",
    position: { lat: 43.2340538, lng: 76.9732659 },
    region: "Almaty",
    category: "Modern Attractions",
    image: "images/koktobe.jpg",
    link: "detail-koktobe-eng.html"
},
{
    title: "Arbat Street",
    description: "Walking street with creative vibes.",
    position: { lat: 43.2618181, lng: 76.9403495 },
    region: "Almaty",
    category: "Cultural Attractions",
    image: "images/arbat-bg.jpg",
    link: "detail-arbat-eng.html"
},
{
    title: "MEGA Park & Alma-Ata",
    description: "Shopping and leisure center in the heart of the city.",
    position: { lat: 43.2016282, lng: 76.8903586 },
    region: "Almaty",
    category: "Shopping Malls",
    image: "images/megaalmaty-1.jpg",
    link: "detail-megaalmaty-eng.html"
},
{
    title: "Presidential Park",
    description: "Huge park in the southern part of the city.",
    position: { lat: 43.1936527, lng: 76.8842271 },
    region: "Almaty",
    category: "Natural Attractions",
    image: "images/park-bg.jpg",
    link: "detail-park-eng.html"
},
{
    title: "Saka Mounds",
    description: "Ancient burial mounds of the Saka people.",
    position: { lat: 43.9232848, lng: 78.2070669 },
    region: "Almaty",
    category: "Historical Monuments",
    image: "images/saks-bg.jpg",
    link: "detail-saks-eng.html"
},
{
    title: "Nomad City",
    description: "Ethno-village near Almaty.",
    position: { lat: 44.0368762, lng: 76.9925312 },
    region: "Almaty",
    category: "Historical Monuments",
    image: "images/nomad-bg.webp",
    link: "detail-nomad-eng.html"
},
{
    title: "Republic Square",
    description: "Main square with monumental architecture.",
    position: { lat: 43.2384923, lng: 76.9454507 },
    region: "Almaty",
    category: "Modern Attractions",
    image: "images/republic.jpg",
    link: "detail-republic-eng.html"
},

    // === AKMOLA REGION ===
{
    title: "Burabay",
    description: "Resort area with lakes and forests.",
    position: { lat: 53.0836, lng: 70.2864 },
    region: "Kokshetau",
    category: "Natural Attractions",
    image: "images/burabay-bg.jpg",
    link: "detail-burabay-eng.html"
},
{
    title: "Okzhetpes Rock",
    description: "Famous rock in Lake Burabay.",
    position: { lat: 53.0839, lng: 70.2734 },
    region: "Kokshetau",
    category: "Natural Attractions",
    image: "images/okzhetpes.jpg",
    link: "detail-okzhetpes-eng.html"
},
{
    title: "Zhumbaktas Rock",
    description: "A mysterious rock formation in Borovoe.",
    position: { lat: 53.0847, lng: 70.2750 },
    region: "Kokshetau",
    category: "Natural Attractions",
    image: "images/zhumbaktas-1.jpg",
    link: "detail-zhumbaktas-eng.html",
    imagePosition: "center 70%"
},
{
    title: "ALZHIR Memorial",
    description: "Monument to victims of political repression.",
    position: { lat: 51.0062, lng: 71.3439 },
    region: "Kokshetau",
    category: "Historical Sites",
    image: "images/alzhir-bg.jpg",
    link: "detail-alzhir-eng.html"
},
{
    title: "Kokshetau History Museum",
    description: "Regional museum of local history.",
    position: { lat: 53.2864, lng: 69.3892 },
    region: "Kokshetau",
    category: "Historical Sites",
    image: "images/museumsaken.jpg",
    link: "detail-kokshetau-museum-eng.html"
},

    // === SHYMKENT & TURKESTAN ===
{
    title: "Seyitzhan Qari Grand Mosque",
    description: "A large modern mosque in Shymkent.",
    position: { lat: 42.35579, lng: 69.6470 },
    region: "Shymkent and Turkistan",
    category: "Cultural and Religious Sites",
    image: "images/seyitzhan.jpg",
    link: "detail-seyitzhan-eng.html"
},
{
    title: "Mausoleum of Khoja Ahmed Yasawi",
    description: "UNESCO-listed majestic mausoleum in Turkistan.",
    position: { lat: 43.2979, lng: 68.2740 },
    region: "Shymkent and Turkistan",
    category: "Cultural and Religious Sites",
    image: "images/turkistan.jpg",
    link: "detail-yassawi-eng.html"
},
{
    title: "Turkistan Caravanserai",
    description: "Modern tourist complex next to the mausoleum.",
    position: { lat: 43.29389, lng: 68.2744 },
    region: "Shymkent and Turkistan",
    category: "Modern Attractions",
    image: "images/karavan-1.jpg",
    link: "detail-karavan-saray-eng.html"
},
{
    title: "Shymkent Zoo",
    description: "One of the largest zoos in Central Asia.",
    position: { lat: 42.37693, lng: 69.6257 },
    region: "Shymkent and Turkistan",
    category: "Entertainment and Culture",
    image: "images/zoo-1.jpg",
    link: "detail-zoo-eng.html"
},
{
    title: "Shymkent Regional Museum",
    description: "Museum of local history and culture.",
    position: { lat: 42.38284, lng: 69.5900 },
    region: "Shymkent and Turkistan",
    category: "Historical Sites",
    image: "images/museumshym-1.jpg",
    link: "detail-museumshym-eng.html"
},
{
    title: "Otyrar",
    description: "Ancient fortress city with a rich history.",
    position: { lat: 42.85078, lng: 68.3012 },
    region: "Shymkent and Turkistan",
    category: "Historical Sites",
    image: "images/otyrar-1.webp",
    link: "detail-otyrar-eng.html"
},
{
    title: "Shymkent Plaza",
    description: "Modern shopping and entertainment center downtown.",
    position: { lat: 42.31871, lng: 69.5907 },
    region: "Shymkent and Turkistan",
    category: "Shopping Malls",
    image: "images/shymkentplaza-1.jpg",
    link: "detail-shymkentplaza-eng.html"
},
{
    title: "Arystan Bab",
    description: "A sacred site near Turkistan.",
    position: { lat: 42.8530, lng: 68.2506 },
    region: "Shymkent and Turkistan",
    category: "Cultural and Religious Sites",
    image: "images/arystanbab-1.png",
    link: "detail-arystanbab-eng.html"
},

// === SEMEY ===
{
    title: "Agash Mosque (Wooden Mosque)",
    description: "A unique 19th-century wooden mosque in Semey.",
    position: { lat: 50.40499, lng: 80.26348 },
    region: "Semey",
    category: "Cultural and Religious Sites",
    image: "images/agash-mosque-3.jpg",
    link: "detail-agash-mosque-eng.html"
},
{
    title: "Twin Minaret Mosque",
    description: "A historic mosque with two minarets.",
    position: { lat: 50.40157, lng: 80.10979 },
    region: "Semey",
    category: "Cultural and Religious Sites",
    image: "images/minaret-mosque-1.jpg",
    link: "detail-minaret-mosque-eng.html"
},
{
    title: "Abai Qunanbaiuly Monument",
    description: "Monument to the great Kazakh poet and philosopher.",
    position: { lat: 50.40134, lng: 80.21747 },
    region: "Semey",
    category: "Historical Landmarks",
    image: "images/abay-monument-1.png",
    link: "detail-abay-monument-eng.html"
},
{
    title: "Kabanbay Batyr Monument",
    description: "Monument to the national Kazakh hero.",
    position: { lat: 50.43150, lng: 80.25964 },
    region: "Semey",
    category: "Historical Landmarks",
    image: "images/kabanbay-monument-2.png",
    link: "detail-kabanbay-monument-eng.html"
},
{
    title: "Suspension Bridge",
    description: "A famous bridge over the Irtysh River.",
    position: { lat: 50.40869, lng: 80.22145 },
    region: "Semey",
    category: "Modern Attractions",
    image: "images/bridge-1.jpg",
    link: "detail-bridge-eng.html"
},
{
    title: "Abai Museum-Reserve",
    description: "A museum dedicated to the life and work of Abai.",
    position: { lat: 50.40992, lng: 80.25199 },
    region: "Semey",
    category: "Cultural and Religious Sites",
    image: "images/abai-museum-1.png",
    link: "detail-abai-museum-eng.html"
},
{
    title: "Central City Park",
    description: "A green leisure area for the whole family.",
    position: { lat: 50.41139, lng: 80.25470 },
    region: "Semey",
    category: "Parks and Nature",
    image: "images/city-park-1.png",
    link: "detail-city-park-eng.html"
},

// === KYZYLORDA ===
{
    title: "Aitbay Mosque",
    description: "One of the oldest mosques in the city, built in the 19th century.",
    position: { lat: 44.83928, lng: 65.49098 },
    region: "Kyzylorda",
    category: "Cultural and Religious Sites",
    image: "images/images/aitbay-1.png",
    link: "detail-aitbay-eng.html"
},
{
    title: "Baikonur Cosmodrome",
    description: "The legendary spaceport where the first human launched into space.",
    position: { lat: 45.96426, lng: 63.27713 },
    region: "Kyzylorda",
    category: "Historical Landmarks",
    image: "images/images/baikonur-1.jpg",
    link: "detail-baikonur-eng.html"
},
{
    title: "Kyzylorda Regional Museum",
    description: "Exhibitions on the region’s history, culture, and nature.",
    position: { lat: 44.84319, lng: 65.49341 },
    region: "Kyzylorda",
    category: "Cultural and Religious Sites",
    image: "images/museum-qyzylorda-1.png",
    link: "detail-museumkzo-eng.html"
},
{
    title: "Korkyt-Ata Memorial",
    description: "A memorial complex dedicated to the great thinker and musician.",
    position: { lat: 45.60402, lng: 63.93259 },
    region: "Kyzylorda",
    category: "Historical Landmarks",
    image: "images/korkyt-1.png",
    link: "detail-korkyt-eng.html"
},
{
    title: "Central Square",
    description: "The city's main square with architectural landmarks.",
    position: { lat: 44.84276, lng: 65.50216 },
    region: "Kyzylorda",
    category: "Modern Attractions",
    image: "images/central-square-1.png",
    link: "detail-square-eng.html"
},
{
    title: "Batyrkhan Shukenov Monument",
    description: "A monument to the famous Kazakh pop singer.",
    position: { lat: 44.84490, lng: 65.49422 },
    region: "Kyzylorda",
    category: "Historical Landmarks",
    image: "images/images/batyrkhan-1.png",
    link: "detail-batyrkhan-eng.html"
},
{
    title: "Arai City Mall",
    description: "A popular shopping and entertainment center.",
    position: { lat: 44.80615, lng: 65.51737 },
    region: "Kyzylorda",
    category: "Shopping Centers",
    image: "images/arai-city-1.png",
    link: "detail-aray-eng.html"
},
{
    title: "Kyzylorda Embankment",
    description: "A spacious riverside promenade along the Syr Darya.",
    position: { lat: 44.78019, lng: 65.51211 },
    region: "Kyzylorda",
    category: "Parks and Nature",
    image: "images/images/naberezh-1.png",
    link: "detail-naberezh-eng.html"
},
{
    title: "Aral Sea",
    description: "A historically significant salt lake.",
    position: { lat: 45.50654, lng: 58.55908 },
    region: "Kyzylorda",
    category: "Natural Attractions",
    image: "images/aral-1.png",
    link: "detail-aral-eng.html"
},

// === AKTAU ===
{
    title: "Beket Ata Mosque",
    description: "A sacred pilgrimage site carved into the rock.",
    position: { lat: 43.59480, lng: 54.07843 },
    region: "Aktau",
    category: "Cultural and Religious Sites",
    image: "images/beketata-1.jpg",
    link: "detail-beketata-eng.html"
},
{
    title: "Rocky Trail",
    description: "A unique natural hiking route through rocky formations.",
    position: { lat: 43.63133, lng: 51.15846 },
    region: "Aktau",
    category: "Natural Attractions",
    image: "images/skala-1.jpg",
    link: "detail-skala-eng.html"
},
{
    title: "Mangystau Regional Museum",
    description: "Exhibitions on Mangystau’s culture and history.",
    position: { lat: 43.64857, lng: 51.15471 },
    region: "Aktau",
    category: "Cultural and Religious Sites",
    image: "images/museum-aktau-1.png",
    link: "detail-museumaktau-eng.html"
},
{
    title: "Boszhira Valley",
    description: "Stunning and surreal landscape in the Mangystau region.",
    position: { lat: 43.41513, lng: 54.07001 },
    region: "Aktau",
    category: "Natural Attractions",
    image: "images/images/boszhira-1.jpg",
    link: "detail-boszhira-eng.html"
},
{
    title: "Ustyurt State Nature Reserve",
    description: "Protected natural area with unique flora and fauna.",
    position: { lat: 43.12714, lng: 54.62125 },
    region: "Aktau",
    category: "Natural Attractions",
    image: "images/ustyurt-1.jpg",
    link: "detail-ustyurt-eng.html"
},
{
    title: "Caspian Sea",
    description: "Coastal resorts and beaches along the Caspian shore.",
    position: { lat: 43.64591, lng: 51.08527 },
    region: "Aktau",
    category: "Natural Attractions",
    image: "images/caspian-1.jpg",
    link: "detail-caspian-eng.html"
},
{
    title: "Sherkala Mountain",
    description: "Legendary mountain shaped like a yurt.",
    position: { lat: 44.25674, lng: 52.00144 },
    region: "Aktau",
    category: "Natural Attractions",
    image: "images/sherkala-1.jpg",
    link: "detail-sherkala-eng.html"
},
{
    title: "Mangystau Regional Mosque",
    description: "A prominent modern mosque in the heart of Aktau.",
    position: { lat: 43.66045, lng: 51.15696 },
    region: "Aktau",
    category: "Cultural and Religious Sites",
    image: "images/regionalmosque.jpg",
    link: "detail-regionalmosque-eng.html"
},
{
    title: "Annunciation Church",
    description: "Orthodox church located in Aktau.",
    position: { lat: 43.66147, lng: 51.17176 },
    region: "Aktau",
    category: "Cultural and Religious Sites",
    image: "images/church-1.png",
    link: "detail-church-eng.html"
},
{
    title: "Caravelle Monument",
    description: "Monument dedicated to explorers and seafarers.",
    position: { lat: 43.63538, lng: 51.16611 },
    region: "Aktau",
    category: "Historical Landmarks",
    image: "images/karavella-1.jpg",
    link: "detail-karavella-eng.html"
},
{
    title: "MiG-21 Monument",
    description: "A monument honoring military aviation history.",
    position: { lat: 43.64200, lng: 51.17600 },
    region: "Aktau",
    category: "Historical Landmarks",
    image: "images/mig-1.png",
    link: "detail-mig-eng.html"
},
{
    title: "Tetysblu Theme Park",
    description: "A modern water and amusement park in Aktau.",
    position: { lat: 43.50424, lng: 51.29491 },
    region: "Aktau",
    category: "Entertainment and Culture",
    image: "images/tetysblu-1.png",
    link: "detail-tetysblu-eng.html"
},
{
    title: "Aktau Embankment",
    description: "Scenic promenade with views of the Caspian Sea.",
    position: { lat: 43.66021, lng: 51.13057 },
    region: "Aktau",
    category: "Parks and Nature",
    image: "images/aktau-naberezhnaya-1",
    link: "detail-naberezhnaya-eng.html"
},

// === TARAZ ===
{
    title: "Ancient Taraz Museum-Reserve",
    description: "A complex of archaeological monuments and museum in the city center.",
    position: { lat: 42.89720, lng: 71.39218 },
    region: "Taraz",
    category: "Historical Landmarks",
    image: "images/taraz-museum-bg.jpg",
    link: "detail-taraz-museum-complex-eng.html"
},
{
    title: "Karakhan Mausoleum",
    description: "An architectural monument dating back to the 10th–11th centuries.",
    position: { lat: 42.89877, lng: 71.38246 },
    region: "Taraz",
    category: "Cultural and Religious Sites",
    image: "images/karakhan-bg.png",
    link: "detail-karakhan-eng.html"
},
{
    title: "Akyrtas Palace Complex",
    description: "A mysterious archaeological site near Taraz.",
    position: { lat: 42.91819, lng: 71.44304 },
    region: "Taraz",
    category: "Historical Landmarks",
    image: "images/akyrtas-bg.png",
    link: "detail-akyrtas-eng.html"
},
{
    title: "Museum of Ancient Taraz",
    description: "Exhibitions dedicated to the ancient city of Taraz.",
    position: { lat: 42.89720, lng: 71.39218 },
    region: "Taraz",
    category: "Cultural and Religious Sites",
    image: "images/ancient-taraz-bg.png",
    link: "detail-ancient-taraz-eng.html"
},
{
    title: "Babaji Khatun Mausoleum",
    description: "A unique 11th-century architectural monument.",
    position: { lat: 42.82731, lng: 71.16913 },
    region: "Taraz",
    category: "Cultural and Religious Sites",
    image: "images/babaji-bg.png",
    link: "detail-babaji-eng.html"
},
{
    title: "Aisha Bibi Mausoleum",
    description: "A famous architectural monument with a romantic legend.",
    position: { lat: 42.83690, lng: 71.18784 },
    region: "Taraz",
    category: "Cultural and Religious Sites",
    image: "images/ayshabibi-bg.jpg",
    link: "detail-ayshabibi-eng.html"
},
{
    title: "Kenes Khan Mosque (Quran-Shaped)",
    description: "An unusual mosque designed as an open Quran.",
    position: { lat: 42.91645, lng: 71.35019 },
    region: "Taraz",
    category: "Cultural and Religious Sites",
    image: "images/keneshan-bg.webp",
    link: "detail-keneshan-eng.html"
},
{
    title: "T. Rysqulov Park",
    description: "A large city park with attractions and green areas.",
    position: { lat: 42.89878, lng: 71.36724 },
    region: "Taraz",
    category: "Parks and Nature",
    image: "images/rysqulovpark-bg.png",
    link: "detail-rysqulovpark-eng.html"
},
{
    title: "Presidential Park",
    description: "A modern recreation zone with alleys and fountains.",
    position: { lat: 42.90093, lng: 71.33775 },
    region: "Taraz",
    category: "Parks and Nature",
    image: "images/presidentpark-taraz-bg.jpg",
    link: "detail-presidentpark-taraz-eng.html"
}

];

renderMarkers(locations);

document.getElementById("search-input").addEventListener("input", (e) => {
const val = e.target.value.toLowerCase();
const result = locations.filter(loc => loc.title.toLowerCase().includes(val));
renderMarkers(result);
});
// Обработчик для кнопок регионов
document.querySelectorAll(".filter-buttons button").forEach(button => {
  button.addEventListener("click", (e) => {
    const region = e.target.getAttribute("data-region");

    if (region === "all") {
      // Если нажата кнопка "Все", сбрасываем карту в начальное состояние
      resetMapToInitialState();
    } else {
      // Фильтруем по выбранному региону
      filterByRegion(region);
    }
  });
});

// Функция фильтрации по региону
function filterByRegion(region) {
  let filteredLocations = locations;
  
  // Если выбран конкретный регион, фильтруем по нему
  if (region !== "all") {
    filteredLocations = locations.filter(loc => loc.region === region);
  }
  
  // Обновляем маркеры на карте
  renderMarkers(filteredLocations);

  // Если регион выбран, центрируем и приближаем карту
  if (regionCenters[region]) {
    const center = regionCenters[region];
    map.panTo(center);  // Центрируем карту на регион
    map.setZoom(10);    // Устанавливаем уровень зума (можно варьировать)
  }
}

// Функция для сброса карты в исходное состояние (кнопка "Все")
function resetMapToInitialState() {
  // Отображаем все маркеры
  renderMarkers(locations);
  
  // Центрируем карту на начальную точку (например, весь Казахстан)
  map.panTo({ lat: 47.9, lng: 67.4 });
  
  // Устанавливаем исходный уровень зума
  map.setZoom(5); // Это значение можно изменить в зависимости от желаемого масштаба
}

// Пример начальных данных для центра карты
const regionCenters = {
  "Astana": { lat: 51.1516, lng: 71.4195 }, 
  "Аlmaty": { lat: 43.2220, lng: 76.8512 },
  "Коkshetau": { lat: 53.0840, lng: 70.2750 },
  "Shymkent and Turkistan": { lat: 42.9500, lng: 69.0000 },
  "Semey": { lat: 50.4333, lng: 80.2667 },
  "Kyzlorda": { lat: 44.8500, lng: 65.5167 },
  "Аktau": { lat: 43.6525, lng: 51.1575 },
  "Taraz": { lat: 42.9000, lng: 71.3670 },

  "all": { lat: 47.9, lng: 67.4 } // Координаты для всей карты
};

document.getElementById("category-select").addEventListener("change", function() {
  const selectedCategory = this.value;
  const filteredLocations = locations.filter(location => {
      // Для фильтрации по категории, если выбрано "Все", показываем все
      return selectedCategory === "All" || location.category.includes(selectedCategory);
  });
  renderMarkers(filteredLocations);
});


// Функция для отрисовки маркеров на карте
function renderMarkers(locations) {
  markers.forEach(marker => marker.setMap(null)); // Удаляем старые маркеры
  markers = [];
  openInfoWindows.forEach(win => win.close());
  openInfoWindows = [];

  locations.forEach(loc => {
      const marker = new google.maps.Marker({
          position: loc.position,
          map,
          title: loc.title
      });

      const content = document.createElement("div");
      content.innerHTML = `
          <div style="max-width: 260px; font-family: 'Inter', sans-serif; padding: 10px;">
              <div style="width: 100%; height: 140px; overflow: hidden; border-radius: 8px; margin-bottom: 10px;">
                  <img src="${loc.image}" alt="${loc.title}" style="width: 100%; height: 100%; object-fit: cover; object-position: ${loc.imagePosition || 'center 50%'}; display: block;" />
              </div>
              <h3 style="margin: 0 0 5px 0; font-size: 18px; color: #333;">${loc.title}</h3>
              <p style="margin: 0 0 10px 0; font-size: 14px; color: #555;">${loc.description}</p>
              <a href="${loc.link}" style="display: inline-block; background: #E9A400; color: white; padding: 6px 12px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 14px;"> detail</a>
              <br><br>
              <button class="route-btn" style="background: #4285F4; color: white; border: none; padding: 6px 12px; border-radius: 4px; margin-top: 5px; cursor: pointer;">📍 Route </button>
          </div>
      `;

      const infoWindow = new google.maps.InfoWindow({ content });

      marker.addListener("click", () => {
          closeAllInfoWindows();
          infoWindow.open(map, marker);
          openInfoWindows.push(infoWindow);
      });

      google.maps.event.addListener(infoWindow, "domready", () => {
          const routeBtn = content.querySelector(".route-btn");
          if (routeBtn) {
              routeBtn.addEventListener("click", () => {
                  infoWindow.close();
                  document.getElementById("travel-mode").value = "WALKING";
                  currentDestination = loc.position;
                  getRoute(loc.position.lat, loc.position.lng);
              });
          }
      });

      markers.push(marker);
  });
}

}
  window.initMap = initMap;
