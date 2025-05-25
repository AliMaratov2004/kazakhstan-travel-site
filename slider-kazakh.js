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
            title: "БАЙТЕРЕК (АСТАНА)",
            text: "Астананың символы — қаланың панорамалық көрінісімен 97 метрлік мұнара.",
            position: "center",
            link: "detail-baiterek.html"
        },
        {
            image: "images/astanamosque.jpg",
            title: "АСТАНА БАС МЕШІТІ",
            text: "Орталық Азиядағы ең үлкен мешіт, әсерлі архитектурасымен танымал.",
            position: "left",
            link: "detail-mosque.html"
        },
        // ... басқа слайдтар
    ];

    function updateCarousel() {
        if (!carouselContainer) return;
        carouselContainer.innerHTML = "";
        slides.slice(1, 4).forEach((slide) => {
            const img = document.createElement("img");
            img.src = slide.image;
            img.classList.add("carousel-item");
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


    // --- Прокрутка вниз к спонсорам ---
    const sponsorsSection = document.querySelector(".sponsors");
const scrollDownButton = document.querySelector(".scroll-down");

if (scrollDownButton && sponsorsSection) {
    scrollDownButton.addEventListener("click", function () {
        sponsorsSection.scrollIntoView({ behavior: "smooth" });
    });
}

// --- "Үздік орындар" каруселі ---
const destinationsTitle = document.querySelector(".destinations-content h2");
const destinationsSubtitle = document.querySelector(".destinations-content h3");
const destinationsText = document.querySelector(".destinations-content p");
const thumbnailsContainer = document.querySelector(".destinations-thumbnails");
const prevDestButton = document.querySelector(".prev-dest");
const nextDestButton = document.querySelector(".next-dest");

let destinations = [
    {
        city: "АСТАНА",
        title: "Астананың үздік орындары",
        text: "Қазақстан астанасының атмосферасына енiңiз: заманауи символдар – Бәйтерек пен Бас мешіттен бастап тарихи нысандарға дейін.",
        images: ["images/expo.jpg", "images/khanshatyr.jpg", "images/astanamosque.jpg", "images/museum.jpg", "images/bayterek-night.jpg"]
    },
    {
        city: "АЛМАТЫ",
        title: "Алматының ең көрнекті жерлері",
        text: "Алматы – Қазақстанның оңтүстігіндегі жүрек. Мұнда табиғат, заманауи инфрақұрылым және бай тарих үндеседі.",
        images: ["images/medeu.jpg", "images/koktobe.jpg", "images/kayndy.jpg", "images/kolsay.jpg", "images/charyn.png"]
    },
    {
        city: "АҚМОЛА ОБЛЫСЫ",
        title: "Ақмола облысының көрікті жерлері",
        text: "Ақмола – тарихи орындар мен көркем табиғат аймағы. Мұнда сіз Бурабай көлін, биік таулар мен мәдени нысандарды көре аласыз.",
        images: ["images/alzhyr.jpg", "images/movbatyrb.jpg", "images/museumsaken.jpg", "images/kokshetau.jpg", "images/burabay.jpg"]
    },
    {
        city: "ШЫМКЕНТ ЖӘНЕ ТҮРКІСТАН",
        title: "Оңтүстіктің рухани мекендері",
        text: "Қазақстанның оңтүстігі — тарихи мұра мен ежелгі сәулет ескерткіштерінің мекені. Түркістанның күмбездері мен қасиетті орындарына саяхаттаңыз.",
        images: ["images/karavan.png", "images/zoo.jpg", "images/otyrar.jpg", "images/shymplaza.jpg", "images/turkistan.jpg"]
    }
];

let currentDestination = 0;

function updateDestinations(direction) {
    if (!destinationsTitle || !destinationsSubtitle || !destinationsText || !thumbnailsContainer) return;

    destinationsTitle.textContent = destinations[currentDestination].title;
    destinationsSubtitle.textContent = destinations[currentDestination].city;
    destinationsText.textContent = destinations[currentDestination].text;
    thumbnailsContainer.innerHTML = "";

    const destinationLinks = [
        ["detail-nuralem.html", "detail-hanshatyr.html", "detail-mosque.html", "detail-museum.html", "detail-baiterek.html"],
        ["detail-medeu.html", "detail-koktobe.html", "detail-kaindy.html", "detail-kolsay.html", "detail-charyn.html"],
        ["detail-alzhir", "detail-museumbatyr", "detail-museumsaken", "detail-tele", "detail-burabay"],
        ["#", "#", "#", "#", "#"]
    ];

    destinations[currentDestination].images.forEach((imgSrc, index) => {
        const link = document.createElement("a");
        link.href = destinationLinks[currentDestination][index];

        const img = document.createElement("img");
        img.src = imgSrc;
        img.classList.add("dest-thumb");
        if (index === 4) img.classList.add("highlighted");

        link.appendChild(img);
        thumbnailsContainer.appendChild(link);
    });

    thumbnailsContainer.classList.add(direction === 'next' ? 'slide-right' : 'slide-left');
    setTimeout(() => {
        thumbnailsContainer.classList.remove('slide-right', 'slide-left');
    }, 500);
}

prevDestButton.addEventListener("click", function () {
    currentDestination = (currentDestination - 1 + destinations.length) % destinations.length;
    updateDestinations("prev");
});

nextDestButton.addEventListener("click", function () {
    currentDestination = (currentDestination + 1) % destinations.length;
    updateDestinations("next");
});

updateDestinations();

// --- Маусым ауыстыру (ЖАЗ, ҚЫС, КӨКТЕМ, КҮЗ) ---
const seasonSection = document.querySelector(".seasons");
const seasonTitle = document.querySelector(".seasons-content h2");
const seasonText = document.querySelector(".seasons-content p");
const prevSeasonButton = document.querySelector(".prev-season");
const nextSeasonButton = document.querySelector(".next-season");

let currentSeason = 0;

function updateSeason(direction) {
    if (!seasonSection || !seasonTitle || !seasonText) return;

    const flipClass = direction === "next" ? "flip-left" : "flip-right";
    seasonSection.classList.add(flipClass);

    setTimeout(() => {
        seasonTitle.textContent = seasons[currentSeason].title;
        seasonText.textContent = seasons[currentSeason].text;
        seasonSection.style.backgroundImage = `url(${seasons[currentSeason].background})`;
        seasonSection.classList.remove(flipClass);
    }, 600);
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
    title: "Сіз осындасыз",
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
        () => alert("Орналасқан жерді анықтау мүмкін болмады.")
      );
    } else {
      alert("Сіздің браузеріңіз геолокацияны қолдамайды.");
    }
  }

  let walkingPolyline = null;

  function getRoute(destLat, destLng) {
    if (!userPosition) {
      alert("Алдымен 'Менің орналасқан жерім' батырмасын басыңыз!");
      return;
    }

    // Егер автобус маршруты көрсетілсе, оны өшіреміз
    if (busRoutePolyline) {
      busRoutePolyline.setMap(null);
      busRoutePolyline = null;
    }

    const selectedMode = document.getElementById("travel-mode").value;

    const request = {
      origin: userPosition,
      destination: { lat: destLat, lng: destLng },
      travelMode: google.maps.TravelMode[selectedMode]
    };

    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        closeAllInfoWindows();
        directionsRenderer.setDirections(result);

        const leg = result.routes[0].legs[0];
        document.getElementById("route-info").innerText =
          `⏱ Жолда: ${leg.duration.text} | 📏 Қашықтық: ${leg.distance.text}`;
      } else {
        alert("Маршрутты құрастыру мүмкін болмады: " + status);
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

    // Қашықтықты есептеу
    let totalDistance = 0;
    for (let i = 1; i < routeCoordinates.length; i++) {
      totalDistance += google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(routeCoordinates[i - 1].lat, routeCoordinates[i - 1].lng),
        new google.maps.LatLng(routeCoordinates[i].lat, routeCoordinates[i].lng)
      );
    }

    // Орташа автобус жылдамдығы ~25 км/сағ
    const avgBusSpeed = 25;
    const timeInHours = totalDistance / 1000 / avgBusSpeed;
    const minutes = Math.round(timeInHours * 60);

    document.getElementById("route-info").innerText = 
      `🚌 №50 автобус маршруты | ⏱ ~${minutes} мин | 📏 ~${(totalDistance / 1000).toFixed(1)} км`;
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
                <a href="${loc.link}" style="display: inline-block; background: #E9A400; color: white; padding: 6px 12px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 14px;">Толығырақ</a>
                <br><br>
                <button class="route-btn" style="background: #4285F4; color: white; border: none; padding: 6px 12px; border-radius: 4px; margin-top: 5px; cursor: pointer;">📍 Маршрут</button>
            </div>
        `;

        const infoWindow = new google.maps.InfoWindow({ content });

        marker.addListener("click", () => {
            closeAllInfoWindows();
            infoWindow.open(map, marker);
            openInfoWindows.push(infoWindow);

            // Белгіге басқанда 3 км радиустағы ұсыныстарды тексеру
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
    // === АСТАНА ===
    {
      title: "Бәйтерек",
      description: "Қазақстан астанасының символы.",
      position: { lat: 51.128316, lng: 71.4305155 },
      region: "Астана",
      category: "Заманауи көрнекті орындар",
      image: "images/bayterek-night.jpg",
      link: "detail-baiterek.html"
    },
    {
      title: "Нұр-Әлем",
      description: "ЭКСПО-дағы болашақ энергиясы музейі.",
      position: { lat: 51.0902, lng: 71.4180 },
      region: "Астана",
      category: "Мәдени және ойын-сауық орындары",
      image: "images/nuralem-1.jpg",
      link: "detail-nuralem.html",
      imagePosition: "center 70%"
    },
    {
      title: "Астананың Бас мешіті",
      description: "Орталық Азиядағы ең үлкен мешіттердің бірі.",
      position: { lat: 51.0730730, lng: 71.4113276 },
      region: "Астана",
      category: "Мәдени және діни орындар",
      image: "images/mosque-1.jpg",
      link: "detail-mosque.html",
      imagePosition: "center 60%"
    },
    {
      title: "Хан Шатыр",
      description: "Заманауи сауда-ойын-сауық орталығы.",
      position: { lat: 51.1325301, lng: 71.4037303 },
      region: "Астана",
      category: "Сауда орталықтары",
      image: "images/hanshatyr-1.jpg",
      link: "detail-hanshatyr.html",
      imagePosition: "center 90%"
    },
    {
      title: "ҚР Ұлттық музейі",
      description: "Елдегі ең ірі музей.",
      position: { lat: 51.1184908, lng: 71.4696516 },
      region: "Астана",
      category: "Мәдени және діни орындар",
      image: "images/museum-1.jpg",
      link: "detail-museum.html",
      imagePosition: "center 30%"
    },
    {
      title: "MEGA Silk Way",
      description: "EXPO жанындағы ірі сауда орталығы.",
      position: { lat: 51.0892, lng: 71.4045 },
      region: "Астана",
      category: "Сауда орталықтары",
      image: "images/mega-astana.jpg",
      link: "detail-mega.html"
    },
    {
      title: "Бейбітшілік және келісім сарайы",
      description: "Толеранттылық символы саналатын пирамида.",
      position: { lat: 51.1231084, lng: 71.4636327 },
      region: "Астана",
      category: "Заманауи көрнекті орындар",
      image: "images/palace-astana.jpg",
      link: "detail-palace.html",
      imagePosition: "center 30%"
    },
    {
      title: "Тұңғыш Президент кітапханасы",
      description: "Музейі бар заманауи ғимарат.",
      position: { lat: 51.1166567, lng: 71.442891 },
      region: "Астана",
      category: "Заманауи көрнекті орындар",
      image: "images/library-1.jpg",
      link: "detail-library.html",
      imagePosition: "center 30%"
    },
    {
      title: "\"Мәңгілік Ел\" аркасы",
      description: "Панорамалық көрінісі бар салтанатты арка.",
      position: { lat: 51.1042916, lng: 71.4300961 },
      region: "Астана",
      category: "Сәулет ескерткіштері",
      image: "images/arka-astana.jpg",
      link: "detail-ark.html"
    },
    {
      title: "Астана жағалауы",
      description: "Есіл өзені бойындағы серуендік аймақ.",
      position: { lat: 51.1568345, lng: 71.4268470 },
      region: "Астана",
      category: "Парктер мен табиғи аймақтар",
      image: "images/river-1.jpg",
      link: "detail-river.html",
      imagePosition: "center 30%"
    },
    {
      title: "Ақ Орда резиденциясы",
      description: "Қазақстан Президентінің ресми резиденциясы.",
      position: { lat: 51.1257401, lng: 71.4463504 },
      region: "Астана",
      category: "Сәулет ескерткіштері",
      image: "images/akorda-1.jpg",
      link: "detail-akorda.html",
      imagePosition: "center 70%"
    },
    {
      title: "Ailand",
      description: "Аквапарк, дельфинарий және океанариум.",
      position: { lat: 51.1476613, lng: 71.4159771 },
      region: "Астана",
      category: "Мәдени және ойын-сауық орындары",
      image: "images/ailand-2.jpg",
      link: "detail-ailand.html"
    }

    // === АЛМАТЫ ===
    {
        title: "Шымбұлақ",
        description: "Алматы тауларында орналасқан тау шаңғысы курорты.",
        position: { lat: 43.1577486, lng: 77.0661976 },
        region: "Алматы",
        category: "Тау шаңғысы курорттары:",
        image: "images/shymbulak-bg.jpg",
        link: "detail-shymbulak.html"
    },
    {
        title: "Медеу",
        description: "Шымбұлаққа жақын орналасқан биік таулы мұз айдыны.",
        position: { lat: 43.1579719, lng: 77.0567687 },
        region: "Алматы",
        category: "Тау шаңғысы курорттары:",
        image: "images/medeu-2.jpg",
        link: "detail-medeu.html"
    },
    {
        title: "Көлсай көлдері",
        description: "Көркем тау көлдері.",
        position: { lat: 42.9390934, lng: 78.3243566 },
        region: "Алматы",
        category: "Табиғи көрікті жерлер:",
        image: "images/kolsay-2.jpg",
        link: "detail-kolsai.html"
    },
    {
        title: "Қайыңды көлі",
        description: "Суға батып кеткен орманмен танымал көл.",
        position: { lat: 42.984461, lng: 78.4657918 },
        region: "Алматы",
        category: "Табиғи көрікті жерлер:",
        image: "images/kaindy-bg.jpg",
        link: "detail-kaindy.html"
    },
    {
        title: "Шарын шатқалы",
        description: "Қазақстанның шағын Гранд Каньоны.",
        position: { lat: 43.3598684, lng: 79.0309748 },
        region: "Алматы",
        category: "Табиғи көрікті жерлер:",
        image: "images/charyn-bg.webp",
        link: "detail-charyn.html"
    },
    {
        title: "Көк Төбе",
        description: "Панорамалық көрінісі бар тау және саябақ.",
        position: { lat: 43.2340538, lng: 76.9732659 },
        region: "Алматы",
        category: "Табиғи көрікті жерлер:",
        image: "images/koktobe.jpg",
        link: "detail-koktobe.html"
    },
    {
        title: "Арбат",
        description: "Шығармашылық атмосферасы бар жаяу жүргіншілер көшесі.",
        position: { lat: 43.2618181, lng: 76.9403495 },
        region: "Алматы",
        category: "Қазіргі заманғы көрікті жерлер:",
        image: "images/arbat-bg.jpg",
        link: "detail-arbat.html"
    },
    {
        title: "MEGA Park & Alma-Ata",
        description: "Қала орталығындағы сауда және демалыс орны.",
        position: { lat: 43.2016282, lng: 76.8903586 },
        region: "Алматы",
        category: "Сауда орталықтары:",
        image: "images/megaalmaty-1.jpg",
        link: "detail-megaalmaty.html"
    },
    {
        title: "Президенттік саябақ",
        description: "Қаланың оңтүстік бөлігінде орналасқан үлкен саябақ.",
        position: { lat: 43.1936527, lng: 76.8842271 },
        region: "Алматы",
        category: "Табиғи көрікті жерлер:",
        image: "images/park-bg.jpg",
        link: "detail-park.html"
    },
    {
        title: "Сақ қорғандары",
        description: "Сақтардың тарихи жерлеу орындары.",
        position: { lat: 43.9232848, lng: 78.2070669 },
        region: "Алматы",
        category: "Тарихи ескерткіштер:",
        image: "images/saks-bg.jpg",
        link: "detail-saks.html"
    },
    {
        title: "Көшпенділер қаласы",
        description: "Алматы маңындағы этноауыл.",
        position: { lat: 44.0368762, lng: 76.9925312 },
        region: "Алматы",
        category: "Тарихи ескерткіштер:",
        image: "images/nomad-bg.webp",
        link: "detail-nomad.html"
    },
    {
        title: "Республика алаңы",
        description: "Архитектуралық ескерткіштері бар басты алаң.",
        position: { lat: 43.2384923, lng: 76.9454507 },
        region: "Алматы",
        category: "Қазіргі заманғы көрікті жерлер:",
        image: "images/republic.jpg",
        link: "detail-republic.html"
    },
    
    // === Ақмола облысы ===
    {
        title: "Бурабай",
        description: "Көлдер мен ормандарға бай шипажай аймағы.",
        position: { lat: 53.0836, lng: 70.2864 },
        region: "Ақмола",
        category: "Табиғи көрікті жерлер:",
        image: "images/burabay-bg.jpg",
        link: "detail-burabay.html"
    },
    {
        title: "Оқжетпес жартасы",
        description: "Бурабай көліндегі әйгілі жартас.",
        position: { lat: 53.0839, lng: 70.2734 },
        region: "Ақмола",
        category: "Табиғи көрікті жерлер:",
        image: "images/okzhetpes.jpg",
        link: "detail-okzhetpes.html"
    },
    {
        title: "Жұмбақтас",
        description: "Бурабайдағы жұмбақ жартас.",
        position: { lat: 53.0847, lng: 70.2750 },
        region: "Ақмола",
        category: "Табиғи көрікті жерлер:",
        image: "images/zhumbaktas-1.jpg",
        link: "detail-zhumbaktas.html",
        imagePosition: "center 70%"
    },
    {
        title: "АЛЖИР мемориалы",
        description: "Саяси қуғын-сүргін құрбандарына арналған ескерткіш.",
        position: { lat: 51.0062, lng: 71.3439 },
        region: "Ақмола",
        category: "Тарихи ескерткіштер:",
        image: "images/alzhir-bg.jpg",
        link: "detail-alzhir.html"
    },
    {
        title: "Көкшетау тарихы музейі",
        description: "Жергілікті өлкетану музейі.",
        position: { lat: 53.2864, lng: 69.3892 },
        region: "Ақмола",
        category: "Тарихи ескерткіштер:",
        image: "images/museumsaken.jpg",
        link: "detail-kokshetau-museum.html"
    }
    
];

renderMarkers(locations);

document.getElementById("search-input").addEventListener("input", (e) => {
const val = e.target.value.toLowerCase();
const result = locations.filter(loc => loc.title.toLowerCase().includes(val));
renderMarkers(result);
});
// Обработчик для кнопок регионов
// Аймақ батырмаларына тыңдағыш орнату
document.querySelectorAll(".filter-buttons button").forEach(button => {
    button.addEventListener("click", (e) => {
      const region = e.target.getAttribute("data-region");
  
      if (region === "all") {
        // Егер "Барлығы" батырмасы басылса, картаны бастапқы қалпына келтіреміз
        resetMapToInitialState();
      } else {
        // Таңдалған аймақ бойынша сүзгі қолданамыз
        filterByRegion(region);
      }
    });
  });
  
  // Аймақ бойынша сүзгілеу функциясы
  function filterByRegion(region) {
    let filteredLocations = locations;
  
    // Егер нақты аймақ таңдалса, сол бойынша сүзгілейміз
    if (region !== "all") {
      filteredLocations = locations.filter(loc => loc.region === region);
    }
  
    // Картаны жаңартамыз (маркелерді қайта саламыз)
    renderMarkers(filteredLocations);
  
    // Егер орталық координаталар анықталған болса — карта сол аймаққа бағытталады
    if (regionCenters[region]) {
      const center = regionCenters[region];
      map.panTo(center);     // Картаны аймаққа бағыттау
      map.setZoom(10);       // Масштабты орнату (қалауыңа қарай өзгерте аласың)
    }
  }
  
  // Картаны бастапқы күйіне қайтару функциясы ("Барлығы" батырмасына арналған)
  function resetMapToInitialState() {
    renderMarkers(locations); // Барлық маркерлерді көрсетеміз
    map.panTo({ lat: 47.9, lng: 67.4 }); // Қазақстанның жалпы орталығы
    map.setZoom(5); // Бастапқы масштаб
  }
  
  // Аймақтардың орталық координаталары (центрлеу үшін қолданылады)
  const regionCenters = {
    "Астана": { lat: 51.1516, lng: 71.4195 }, 
    "Алматы": { lat: 43.2220, lng: 76.8512 },
    "Ақмола": { lat: 53.0840, lng: 70.2750 },
    "all": { lat: 47.9, lng: 67.4 } // Жалпы карта орталығы
  };
  
  // Категория бойынша сүзгілеу
  document.getElementById("category-select").addEventListener("change", function () {
    const selectedCategory = this.value;
    const filteredLocations = locations.filter(location => {
      return selectedCategory === "Барлығы" || location.category.includes(selectedCategory);
    });
    renderMarkers(filteredLocations);
  });
  
  // Маркерлерді картаға салу функциясы
  function renderMarkers(locations) {
    markers.forEach(marker => marker.setMap(null)); // Ескі маркерлерді өшіреміз
    markers = [];
    openInfoWindows.forEach(win => win.close()); // Ашық infoWindow-ларды жабу
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
          <a href="${loc.link}" style="display: inline-block; background: #E9A400; color: white; padding: 6px 12px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 14px;">Толығырақ</a>
          <br><br>
          <button class="route-btn" style="background: #4285F4; color: white; border: none; padding: 6px 12px; border-radius: 4px; margin-top: 5px; cursor: pointer;">📍 Бағыт салу</button>
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
  




const bus50Route = [
{ lat: 51.17585, lng: 71.34984 },
{ lat: 51.17558, lng: 71.35067 },
{ lat: 51.17526, lng: 71.35166 },
{ lat: 51.17526, lng: 71.35167 },
{ lat: 51.17525, lng: 71.35169 },
{ lat: 51.1746, lng: 71.3537 },
{ lat: 51.17459, lng: 71.35373 },
{ lat: 51.17452, lng: 71.35396 },
{ lat: 51.1741, lng: 71.35526 },
{ lat: 51.17405, lng: 71.3554 },
{ lat: 51.17403, lng: 71.35548 },
{ lat: 51.17402, lng: 71.35549 },
{ lat: 51.17386, lng: 71.35601 },
{ lat: 51.17362, lng: 71.35676 },
{ lat: 51.1733, lng: 71.35777 },
{ lat: 51.173, lng: 71.3587 },
{ lat: 51.17281, lng: 71.35933 },
{ lat: 51.17236, lng: 71.36082 },
{ lat: 51.17205, lng: 71.36187 },
{ lat: 51.1718, lng: 71.3627 },
{ lat: 51.17145, lng: 71.36374 },
{ lat: 51.17126, lng: 71.36436 },
{ lat: 51.17105, lng: 71.36507 },
{ lat: 51.17096, lng: 71.36536 },
{ lat: 51.17066, lng: 71.36636 },
{ lat: 51.17061, lng: 71.36671 },
{ lat: 51.17054, lng: 71.36719 },
{ lat: 51.17048, lng: 71.36793 },
{ lat: 51.17048, lng: 71.36843 },
{ lat: 51.17048, lng: 71.36861 },
{ lat: 51.17048, lng: 71.36868 },
{ lat: 51.17048, lng: 71.36882 },
{ lat: 51.17048, lng: 71.36887 },
{ lat: 51.1705, lng: 71.36912 },
{ lat: 51.1705, lng: 71.36922 },
{ lat: 51.17055, lng: 71.36962 },
{ lat: 51.17062, lng: 71.36996 },
{ lat: 51.17066, lng: 71.37012 },
{ lat: 51.17071, lng: 71.37031 },
{ lat: 51.17073, lng: 71.37039 },
{ lat: 51.17093, lng: 71.37116 },
{ lat: 51.17098, lng: 71.37136 },
{ lat: 51.17117, lng: 71.37197 },
{ lat: 51.17135, lng: 71.37264 },
{ lat: 51.17148, lng: 71.37297 },
{ lat: 51.17165, lng: 71.37366 },
{ lat: 51.17167, lng: 71.37373 },
{ lat: 51.17178, lng: 71.37431 },
{ lat: 51.1719, lng: 71.37513 },
{ lat: 51.17197, lng: 71.37595 },
{ lat: 51.17201, lng: 71.37623 },
{ lat: 51.17204, lng: 71.37667 },
{ lat: 51.17206, lng: 71.37704 },
{ lat: 51.17207, lng: 71.37738 },
{ lat: 51.17204, lng: 71.37771 },
{ lat: 51.17203, lng: 71.37814 },
{ lat: 51.17201, lng: 71.37873 },
{ lat: 51.17187, lng: 71.38012 },
{ lat: 51.17185, lng: 71.38024 },
{ lat: 51.17172, lng: 71.38097 },
{ lat: 51.17149, lng: 71.38194 },
{ lat: 51.17142, lng: 71.38227 },
{ lat: 51.17135, lng: 71.38261 },
{ lat: 51.17126, lng: 71.38298 },
{ lat: 51.17093, lng: 71.38424 },
{ lat: 51.17075, lng: 71.38502 },
{ lat: 51.17062, lng: 71.38556 },
{ lat: 51.17062, lng: 71.38558 },
{ lat: 51.17051, lng: 71.38599 },
{ lat: 51.17037, lng: 71.38642 },
{ lat: 51.17019, lng: 71.38687 },
{ lat: 51.1701, lng: 71.38709 },
{ lat: 51.16992, lng: 71.38752 },
{ lat: 51.16965, lng: 71.38819 },
{ lat: 51.16945, lng: 71.38866 },
{ lat: 51.16918, lng: 71.38934 },
{ lat: 51.16908, lng: 71.38961 },
{ lat: 51.16897, lng: 71.38988 },
{ lat: 51.16882, lng: 71.39024 },
{ lat: 51.16863, lng: 71.3907 },
{ lat: 51.16812, lng: 71.39191 },
{ lat: 51.16797, lng: 71.39231 },
{ lat: 51.16787, lng: 71.39262 },
{ lat: 51.1678, lng: 71.3929 },
{ lat: 51.16773, lng: 71.39323 },
{ lat: 51.16768, lng: 71.39357 },
{ lat: 51.16766, lng: 71.39394 },
{ lat: 51.16764, lng: 71.39427 },
{ lat: 51.16765, lng: 71.39438 },
{ lat: 51.16766, lng: 71.39462 },
{ lat: 51.16768, lng: 71.39487 },
{ lat: 51.16769, lng: 71.39495 },
{ lat: 51.16772, lng: 71.39531 },
{ lat: 51.16784, lng: 71.39621 },
{ lat: 51.16793, lng: 71.39687 },
{ lat: 51.16802, lng: 71.39772 },
{ lat: 51.16808, lng: 71.39821 },
{ lat: 51.1681, lng: 71.39833 },
{ lat: 51.16819, lng: 71.3989 },
{ lat: 51.16826, lng: 71.39921 },
{ lat: 51.16835, lng: 71.40008 },
{ lat: 51.16841, lng: 71.40061 },
{ lat: 51.16845, lng: 71.4009 },
{ lat: 51.16851, lng: 71.40143 },
{ lat: 51.16852, lng: 71.40156 },
{ lat: 51.16853, lng: 71.40169 },
{ lat: 51.16864, lng: 71.40252 },
{ lat: 51.16873, lng: 71.40324 },
{ lat: 51.16876, lng: 71.40348 },
{ lat: 51.1688, lng: 71.40376 },
{ lat: 51.16883, lng: 71.40404 },
{ lat: 51.16888, lng: 71.40441 },
{ lat: 51.16889, lng: 71.40453 },
{ lat: 51.16893, lng: 71.40481 },
{ lat: 51.16896, lng: 71.4051 },
{ lat: 51.16903, lng: 71.40566 },
{ lat: 51.16913, lng: 71.40654 },
{ lat: 51.16914, lng: 71.40663 },
{ lat: 51.16925, lng: 71.40748 },
{ lat: 51.16928, lng: 71.40793 },
{ lat: 51.16904, lng: 71.40796 },
{ lat: 51.16855, lng: 71.40811 },
{ lat: 51.16817, lng: 71.40824 },
{ lat: 51.16788, lng: 71.40834 },
{ lat: 51.16694, lng: 71.40857 },
{ lat: 51.16643, lng: 71.4087 },
{ lat: 51.16626, lng: 71.40875 },
{ lat: 51.16619, lng: 71.40876 },
{ lat: 51.16545, lng: 71.40899 },
{ lat: 51.16503, lng: 71.40913 },
{ lat: 51.16497, lng: 71.40914 },
{ lat: 51.16462, lng: 71.40925 },
{ lat: 51.16432, lng: 71.40934 },
{ lat: 51.16426, lng: 71.40936 },
{ lat: 51.16379, lng: 71.40951 },
{ lat: 51.16322, lng: 71.40967 },
{ lat: 51.1631, lng: 71.40971 },
{ lat: 51.16267, lng: 71.40984 },
{ lat: 51.16229, lng: 71.40996 },
{ lat: 51.16151, lng: 71.4102 },
{ lat: 51.16143, lng: 71.41022 },
{ lat: 51.16098, lng: 71.41036 },
{ lat: 51.16082, lng: 71.41042 },
{ lat: 51.16041, lng: 71.41052 },
{ lat: 51.15988, lng: 71.41068 },
{ lat: 51.1597, lng: 71.41074 },
{ lat: 51.15953, lng: 71.41079 },
{ lat: 51.15899, lng: 71.41095 },
{ lat: 51.15852, lng: 71.41109 },
{ lat: 51.15816, lng: 71.4112 },
{ lat: 51.15799, lng: 71.41126 },
{ lat: 51.15781, lng: 71.41131 },
{ lat: 51.15778, lng: 71.41132 },
{ lat: 51.15728, lng: 71.41147 },
{ lat: 51.15703, lng: 71.41155 },
{ lat: 51.15694, lng: 71.41158 },
{ lat: 51.15684, lng: 71.4116 },
{ lat: 51.15649, lng: 71.4117 },
{ lat: 51.15631, lng: 71.41175 },
{ lat: 51.15596, lng: 71.41184 },
{ lat: 51.15582, lng: 71.41188 },
{ lat: 51.15578, lng: 71.41189 },
{ lat: 51.1556, lng: 71.41193 },
{ lat: 51.15542, lng: 71.41198 },
{ lat: 51.15479, lng: 71.41215 },
{ lat: 51.15437, lng: 71.41227 },
{ lat: 51.15399, lng: 71.41235 },
{ lat: 51.15356, lng: 71.41242 },
{ lat: 51.15345, lng: 71.41243 },
{ lat: 51.15343, lng: 71.41243 },
{ lat: 51.15295, lng: 71.41246 },
{ lat: 51.15273, lng: 71.41248 },
{ lat: 51.15209, lng: 71.41252 },
{ lat: 51.152, lng: 71.41252 },
{ lat: 51.15146, lng: 71.41256 },
{ lat: 51.15041, lng: 71.41256 },
{ lat: 51.15032, lng: 71.41256 },
{ lat: 51.15023, lng: 71.41255 },
{ lat: 51.15005, lng: 71.41254 },
{ lat: 51.14969, lng: 71.41252 },
{ lat: 51.14951, lng: 71.41251 },
{ lat: 51.14907, lng: 71.41249 },
{ lat: 51.14898, lng: 71.41248 },
{ lat: 51.14844, lng: 71.41241 },
{ lat: 51.14754, lng: 71.41225 },
{ lat: 51.14737, lng: 71.41222 },
{ lat: 51.147, lng: 71.41215 },
{ lat: 51.14692, lng: 71.41214 },
{ lat: 51.14631, lng: 71.41201 },
{ lat: 51.14617, lng: 71.41195 },
{ lat: 51.14603, lng: 71.4119 },
{ lat: 51.14504, lng: 71.41158 },
{ lat: 51.14456, lng: 71.41139 },
{ lat: 51.14434, lng: 71.41131 },
{ lat: 51.14392, lng: 71.41114 },
{ lat: 51.14362, lng: 71.41103 },
{ lat: 51.14327, lng: 71.41089 },
{ lat: 51.14233, lng: 71.41053 },
{ lat: 51.14226, lng: 71.4105 },
{ lat: 51.14191, lng: 71.41037 },
{ lat: 51.14121, lng: 71.41011 },
{ lat: 51.14104, lng: 71.41005 },
{ lat: 51.14069, lng: 71.40992 },
{ lat: 51.13933, lng: 71.40942 },
{ lat: 51.13835, lng: 71.409 },
{ lat: 51.13778, lng: 71.40876 },
{ lat: 51.13732, lng: 71.40858 },
{ lat: 51.13711, lng: 71.40849 },
{ lat: 51.13706, lng: 71.40846 },
{ lat: 51.13659, lng: 71.40829 },
{ lat: 51.13606, lng: 71.40809 },
{ lat: 51.13596, lng: 71.40805 },
{ lat: 51.13537, lng: 71.40783 },
{ lat: 51.13519, lng: 71.40776 },
{ lat: 51.13508, lng: 71.40771 },
{ lat: 51.13455, lng: 71.4075 },
{ lat: 51.13439, lng: 71.40744 },
{ lat: 51.13429, lng: 71.4074 },
{ lat: 51.13323, lng: 71.407 },
{ lat: 51.13236, lng: 71.40666 },
{ lat: 51.13165, lng: 71.40637 },
{ lat: 51.12984, lng: 71.40567 },
{ lat: 51.12977, lng: 71.40564 },
{ lat: 51.1297, lng: 71.4056 },
{ lat: 51.12774, lng: 71.40481 },
{ lat: 51.12721, lng: 71.40462 },
{ lat: 51.1271, lng: 71.40458 },
{ lat: 51.12694, lng: 71.40452 },
{ lat: 51.12633, lng: 71.40425 },
{ lat: 51.12545, lng: 71.40393 },
{ lat: 51.12405, lng: 71.40341 },
{ lat: 51.12261, lng: 71.40288 },
{ lat: 51.1216, lng: 71.40251 },
{ lat: 51.12137, lng: 71.40243 },
{ lat: 51.12108, lng: 71.40232 },
{ lat: 51.12052, lng: 71.40212 },
{ lat: 51.11967, lng: 71.40185 },
{ lat: 51.1176, lng: 71.40116 },
{ lat: 51.11758, lng: 71.40137 },
{ lat: 51.11755, lng: 71.40162 },
{ lat: 51.11753, lng: 71.40176 },
{ lat: 51.11724, lng: 71.40385 },
{ lat: 51.11722, lng: 71.40402 },
{ lat: 51.11716, lng: 71.40447 },
{ lat: 51.11709, lng: 71.40489 },
{ lat: 51.11699, lng: 71.40569 },
{ lat: 51.11691, lng: 71.40624 },
{ lat: 51.11685, lng: 71.40665 },
{ lat: 51.11681, lng: 71.40696 },
{ lat: 51.11677, lng: 71.40721 },
{ lat: 51.11667, lng: 71.4078 },
{ lat: 51.11659, lng: 71.40839 },
{ lat: 51.11648, lng: 71.40915 },
{ lat: 51.11636, lng: 71.41008 },
{ lat: 51.11632, lng: 71.41031 },
{ lat: 51.11619, lng: 71.41133 },
{ lat: 51.11617, lng: 71.41149 },
{ lat: 51.11601, lng: 71.41267 },
{ lat: 51.1159, lng: 71.41336 },
{ lat: 51.11589, lng: 71.41345 },
{ lat: 51.11578, lng: 71.4143 },
{ lat: 51.11566, lng: 71.41513 },
{ lat: 51.11559, lng: 71.41562 },
{ lat: 51.11554, lng: 71.41598 },
{ lat: 51.11547, lng: 71.4165 },
{ lat: 51.11529, lng: 71.41774 },
{ lat: 51.1158, lng: 71.41791 },
{ lat: 51.11627, lng: 71.41809 },
{ lat: 51.11645, lng: 71.41815 },
{ lat: 51.11697, lng: 71.41834 },
{ lat: 51.11748, lng: 71.41853 },
{ lat: 51.11791, lng: 71.41879 },
{ lat: 51.11834, lng: 71.41905 },
{ lat: 51.11841, lng: 71.41909 },
{ lat: 51.11872, lng: 71.41927 },
{ lat: 51.1196, lng: 71.41987 },
{ lat: 51.12002, lng: 71.42014 },
{ lat: 51.12068, lng: 71.42058 },
{ lat: 51.12124, lng: 71.421 },
{ lat: 51.1214, lng: 71.42112 },
{ lat: 51.12156, lng: 71.42125 },
{ lat: 51.12181, lng: 71.42141 },
{ lat: 51.1223, lng: 71.42173 },
{ lat: 51.12241, lng: 71.4218 },
{ lat: 51.12396, lng: 71.42282 },
{ lat: 51.1242, lng: 71.42292 },
{ lat: 51.12455, lng: 71.42306 },
{ lat: 51.12472, lng: 71.42313 },
{ lat: 51.12508, lng: 71.42328 },
{ lat: 51.12524, lng: 71.42335 },
{ lat: 51.12534, lng: 71.42339 },
{ lat: 51.12575, lng: 71.42356 },
{ lat: 51.12581, lng: 71.42358 },
{ lat: 51.12631, lng: 71.42378 },
{ lat: 51.12634, lng: 71.42379 },
{ lat: 51.12666, lng: 71.42394 },
{ lat: 51.12681, lng: 71.424 },
{ lat: 51.12676, lng: 71.42426 },
{ lat: 51.12662, lng: 71.42508 },
{ lat: 51.12649, lng: 71.42591 },
{ lat: 51.12638, lng: 71.4266 },
{ lat: 51.12637, lng: 71.4266 },
{ lat: 51.12633, lng: 71.42687 },
{ lat: 51.12633, lng: 71.42688 },
{ lat: 51.12625, lng: 71.42737 },
{ lat: 51.1262, lng: 71.42771 },
{ lat: 51.12616, lng: 71.42795 },
{ lat: 51.12614, lng: 71.42808 },
{ lat: 51.12591, lng: 71.42946 },
{ lat: 51.1259, lng: 71.42957 },
{ lat: 51.12577, lng: 71.43046 },
{ lat: 51.12564, lng: 71.43129 },
{ lat: 51.12561, lng: 71.43145 },
{ lat: 51.12569, lng: 71.43147 },
{ lat: 51.1261, lng: 71.43166 },
{ lat: 51.12645, lng: 71.4318 },
{ lat: 51.12647, lng: 71.43181 },
{ lat: 51.1268, lng: 71.43194 },
{ lat: 51.12698, lng: 71.43201 },
{ lat: 51.12715, lng: 71.43208 },
{ lat: 51.1272, lng: 71.4321 },
{ lat: 51.12743, lng: 71.4322 },
{ lat: 51.12761, lng: 71.43227 },
{ lat: 51.12793, lng: 71.43239 },
{ lat: 51.12797, lng: 71.43241 },
{ lat: 51.1281, lng: 71.43246 },
{ lat: 51.12814, lng: 71.43248 },
{ lat: 51.12849, lng: 71.43261 },
{ lat: 51.12867, lng: 71.43268 },
{ lat: 51.12884, lng: 71.43275 },
{ lat: 51.12888, lng: 71.43276 },
{ lat: 51.12902, lng: 71.43282 },
{ lat: 51.12919, lng: 71.43288 },
{ lat: 51.1292, lng: 71.43289 },
{ lat: 51.12972, lng: 71.43309 },
{ lat: 51.12986, lng: 71.43314 },
{ lat: 51.12989, lng: 71.43316 },
{ lat: 51.1299, lng: 71.43316 },
{ lat: 51.13024, lng: 71.43329 },
{ lat: 51.13016, lng: 71.43385 },
{ lat: 51.13012, lng: 71.43413 },
{ lat: 51.13002, lng: 71.43483 },
{ lat: 51.12997, lng: 71.43522 },
{ lat: 51.12996, lng: 71.43526 },
{ lat: 51.12984, lng: 71.43606 },
{ lat: 51.12977, lng: 71.43654 },
{ lat: 51.12972, lng: 71.43682 },
{ lat: 51.12968, lng: 71.4371 },
{ lat: 51.12964, lng: 71.43734 },
{ lat: 51.12954, lng: 71.43792 },
{ lat: 51.12944, lng: 71.43856 },
{ lat: 51.12932, lng: 71.4388 },
{ lat: 51.12926, lng: 71.43889 },
{ lat: 51.12919, lng: 71.43895 },
{ lat: 51.12911, lng: 71.43899 },
{ lat: 51.12901, lng: 71.43907 },
{ lat: 51.12767, lng: 71.43852 },
{ lat: 51.12745, lng: 71.43845 },
{ lat: 51.12643, lng: 71.43811 },
{ lat: 51.12555, lng: 71.43773 },
{ lat: 51.12475, lng: 71.43746 },
{ lat: 51.12466, lng: 71.43742 },
{ lat: 51.1244, lng: 71.43734 },
{ lat: 51.1227, lng: 71.43661 },
{ lat: 51.12245, lng: 71.4365 },
{ lat: 51.12215, lng: 71.43638 },
{ lat: 51.12198, lng: 71.43631 },
{ lat: 51.1217, lng: 71.4362 },
{ lat: 51.12147, lng: 71.43606 },
{ lat: 51.12137, lng: 71.43593 },
{ lat: 51.12137, lng: 71.43592 },
{ lat: 51.12132, lng: 71.4358 },
{ lat: 51.1213, lng: 71.43566 },
{ lat: 51.1213, lng: 71.43564 },
{ lat: 51.12133, lng: 71.43547 },
{ lat: 51.12137, lng: 71.43541 },
{ lat: 51.1214, lng: 71.43534 },
{ lat: 51.12146, lng: 71.43526 },
{ lat: 51.1215, lng: 71.43522 },
{ lat: 51.12166, lng: 71.43508 },
{ lat: 51.12173, lng: 71.43505 },
{ lat: 51.12183, lng: 71.43507 },
{ lat: 51.12183, lng: 71.43508 },
{ lat: 51.1219, lng: 71.43514 },
{ lat: 51.12197, lng: 71.43522 },
{ lat: 51.122, lng: 71.43537 },
{ lat: 51.12206, lng: 71.4358 },
{ lat: 51.12198, lng: 71.43631 },
{ lat: 51.12197, lng: 71.43638 },
{ lat: 51.12196, lng: 71.43648 },
{ lat: 51.12193, lng: 71.43666 },
{ lat: 51.12188, lng: 71.43694 },
{ lat: 51.12161, lng: 71.43859 },
{ lat: 51.12146, lng: 71.43944 },
{ lat: 51.12134, lng: 71.44027 },
{ lat: 51.12129, lng: 71.44055 },
{ lat: 51.12125, lng: 71.44083 },
{ lat: 51.12121, lng: 71.44111 },
{ lat: 51.12116, lng: 71.44138 },
{ lat: 51.12112, lng: 71.44166 },
{ lat: 51.12091, lng: 71.44305 },
{ lat: 51.12088, lng: 71.44321 },
{ lat: 51.12088, lng: 71.44322 },
{ lat: 51.12088, lng: 71.44323 },
{ lat: 51.12086, lng: 71.44333 },
{ lat: 51.12085, lng: 71.44339 },
{ lat: 51.12078, lng: 71.44389 },
{ lat: 51.12065, lng: 71.44472 },
{ lat: 51.12052, lng: 71.44556 },
{ lat: 51.12047, lng: 71.44584 },
{ lat: 51.12039, lng: 71.44639 },
{ lat: 51.12034, lng: 71.44667 },
{ lat: 51.12026, lng: 71.44723 },
{ lat: 51.1202, lng: 71.44757 },
{ lat: 51.12013, lng: 71.44806 },
{ lat: 51.12009, lng: 71.44834 },
{ lat: 51.12004, lng: 71.44862 },
{ lat: 51.12, lng: 71.4489 },
{ lat: 51.11989, lng: 71.4496 },
{ lat: 51.11987, lng: 71.44973 },
{ lat: 51.11969, lng: 71.45084 },
{ lat: 51.11962, lng: 71.45126 },
{ lat: 51.1194, lng: 71.45267 },
{ lat: 51.11917, lng: 71.45398 },
{ lat: 51.11915, lng: 71.45414 },
{ lat: 51.11938, lng: 71.45423 },
{ lat: 51.11959, lng: 71.45435 },
{ lat: 51.11967, lng: 71.45441 },
{ lat: 51.11975, lng: 71.45447 },
{ lat: 51.11991, lng: 71.45461 },
{ lat: 51.12011, lng: 71.45483 },
{ lat: 51.12014, lng: 71.45487 },
{ lat: 51.12026, lng: 71.45507 },
{ lat: 51.12029, lng: 71.45511 },
{ lat: 51.12042, lng: 71.4554 },
{ lat: 51.12046, lng: 71.45555 },
{ lat: 51.12052, lng: 71.45575 },
{ lat: 51.12061, lng: 71.45615 },
{ lat: 51.12065, lng: 71.4566 },
{ lat: 51.12063, lng: 71.45722 },
{ lat: 51.12062, lng: 71.45738 },
{ lat: 51.12061, lng: 71.45751 },
{ lat: 51.12042, lng: 71.46048 },
{ lat: 51.12035, lng: 71.46156 },
{ lat: 51.12031, lng: 71.46229 },
{ lat: 51.12027, lng: 71.46287 },
{ lat: 51.12021, lng: 71.46376 },
{ lat: 51.12016, lng: 71.46462 },
{ lat: 51.12015, lng: 71.4649 },
{ lat: 51.12013, lng: 71.46519 },
{ lat: 51.12008, lng: 71.46604 },
{ lat: 51.12003, lng: 71.4669 },
{ lat: 51.12002, lng: 71.46714 },
{ lat: 51.11997, lng: 71.46747 },
{ lat: 51.11995, lng: 71.46762 },
{ lat: 51.11974, lng: 71.46901 },
{ lat: 51.11972, lng: 71.46914 },
{ lat: 51.1197, lng: 71.46929 },
{ lat: 51.11951, lng: 71.47053 },
{ lat: 51.11949, lng: 71.47068 },
{ lat: 51.11933, lng: 71.47174 },
{ lat: 51.11909, lng: 71.47338 },
{ lat: 51.11895, lng: 71.47419 },
{ lat: 51.11883, lng: 71.47498 },
{ lat: 51.1188, lng: 71.47518 },
{ lat: 51.11878, lng: 71.47528 },
{ lat: 51.11853, lng: 71.47683 },
{ lat: 51.11821, lng: 71.47887 },
{ lat: 51.11794, lng: 71.48053 },
{ lat: 51.11766, lng: 71.48236 },
{ lat: 51.1174, lng: 71.48403 },
{ lat: 51.11737, lng: 71.4842 },
{ lat: 51.11697, lng: 71.48675 },
{ lat: 51.11697, lng: 71.48676 },
{ lat: 51.11632, lng: 71.49092 },
{ lat: 51.11624, lng: 71.49141 },
{ lat: 51.11576, lng: 71.49447 },
{ lat: 51.11567, lng: 71.49503 },
{ lat: 51.11563, lng: 71.49531 },
{ lat: 51.11559, lng: 71.49558 },
{ lat: 51.11534, lng: 71.49717 },
{ lat: 51.11532, lng: 71.49734 },
{ lat: 51.11507, lng: 71.49889 },
{ lat: 51.11476, lng: 71.50074 },
{ lat: 51.11468, lng: 71.50127 },
{ lat: 51.11454, lng: 71.50216 },
{ lat: 51.11445, lng: 71.50278 },
{ lat: 51.11433, lng: 71.50356 },
{ lat: 51.11431, lng: 71.50365 },
{ lat: 51.1142, lng: 71.50437 },
{ lat: 51.11408, lng: 71.50521 },
{ lat: 51.11403, lng: 71.50558 },
{ lat: 51.11389, lng: 71.50652 },
{ lat: 51.11358, lng: 71.50846 },
{ lat: 51.11357, lng: 71.50858 },
{ lat: 51.11343, lng: 71.50941 },
{ lat: 51.11322, lng: 71.5107 },
{ lat: 51.11309, lng: 71.51152 },
{ lat: 51.11308, lng: 71.51161 },
{ lat: 51.113, lng: 71.5121 },
{ lat: 51.11296, lng: 71.51235 },
{ lat: 51.11285, lng: 71.51308 },
{ lat: 51.11284, lng: 71.51316 },
{ lat: 51.11262, lng: 71.51455 },
{ lat: 51.11219, lng: 71.51733 },
{ lat: 51.11205, lng: 71.51816 },
{ lat: 51.11201, lng: 71.51844 },
{ lat: 51.11192, lng: 71.51899 },
{ lat: 51.11192, lng: 71.519 },
{ lat: 51.11188, lng: 71.51927 },
{ lat: 51.11173, lng: 71.52022 },
{ lat: 51.11165, lng: 71.52071 },
{ lat: 51.11158, lng: 71.52116 },
{ lat: 51.11148, lng: 71.5218 },
{ lat: 51.11135, lng: 71.52264 },
{ lat: 51.11121, lng: 71.52351 },
{ lat: 51.11117, lng: 71.52378 },
{ lat: 51.11109, lng: 71.52431 },
{ lat: 51.111, lng: 71.52489 },
{ lat: 51.11099, lng: 71.5249 },
{ lat: 51.11096, lng: 71.52518 },
{ lat: 51.11074, lng: 71.52657 },
{ lat: 51.11062, lng: 71.52731 },
{ lat: 51.11056, lng: 71.5276 },
{ lat: 51.11053, lng: 71.52791 },
{ lat: 51.11042, lng: 71.52851 },
{ lat: 51.11033, lng: 71.52906 },
{ lat: 51.11016, lng: 71.53015 },
{ lat: 51.11016, lng: 71.53017 },
{ lat: 51.11002, lng: 71.531 },
{ lat: 51.11002, lng: 71.53103 },
{ lat: 51.10981, lng: 71.53231 },
{ lat: 51.10974, lng: 71.53272 },
{ lat: 51.10963, lng: 71.53336 },
{ lat: 51.10961, lng: 71.53365 },
{ lat: 51.10957, lng: 71.53391 },
{ lat: 51.10952, lng: 71.53427 },
{ lat: 51.10945, lng: 71.53453 },
{ lat: 51.10957, lng: 71.53456 },
{ lat: 51.10978, lng: 71.53464 },
{ lat: 51.10994, lng: 71.53468 },
{ lat: 51.11012, lng: 71.53474 },
{ lat: 51.11045, lng: 71.53482 },
{ lat: 51.11045, lng: 71.53483 },
{ lat: 51.11091, lng: 71.53501 },
]

  window.initMap = initMap;
}
