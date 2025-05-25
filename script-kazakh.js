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
        {
          image: "images/kolsaylake.jpg",
          title: "Көлсай көлі (АЛМАТЫ)",
          text: "Керемет көріністері бар көркем тау көлдері.",
          position: "center",
          link: "#" // или detail-kolsay.html, если создашь
      },
      {
          image: "images/shymbulakwinter.jpg",
          title: "ШЫМБҰЛАҚ (АЛМАТЫ)",
          text: "Әлемдегі ең биік тау мұз айдыны және танымал тау шаңғысы курорты.",
          position: "center",
          link: "#"
      },
      {
          image: "images/turkistan.jpg",
          title: "ҚОЖА АХМЕТ ЯССАУИ КЕСЕНЕСІ (ТУРКИСТАН)",
          text: "XIV ғасырдың ұлы сәулет ескерткіші, ЮНЕСКО мұрасы.",
          position: "center",
          link: "#"
      }
        // ... басқа слайдтар
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

  // --- Карусель "Лучшие места" ---
    const destinationsTitle = document.querySelector(".destinations-content h2");
    const destinationsSubtitle = document.querySelector(".destinations-content h3");
    const destinationsText = document.querySelector(".destinations-content p");
    const thumbnailsContainer = document.querySelector(".destinations-thumbnails");
    const prevDestButton = document.querySelector(".prev-dest");
    const nextDestButton = document.querySelector(".next-dest");
    const detailsBtn = document.getElementById("dest-details-btn");


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
const destinationLinks = [
      ["detail-nuralem-kazakh.html", "detail-hanshatyr-kazakh.html", "detail-mosque-kazakh.html", "detail-museum-kazakh.html", "detail-baiterek-kazakh.html"],
      ["detail-medeu-kazakh.html", "detail-koktobe-kazakh.html", "detail-kaindy-kazakh.html", "detail-kolsay-kazakh.html", "detail-charyn-kazakh.html"],
      ["detail-alzhir-kazakh.html", "detail-museumbatyr-kazakh.html", "detail-museumsaken-kazakh.html", "detail-tele-kazakh.html", "detail-burabay-kazakh.html"],
      ["detail-karavan-saray-kazakh.html", "detail-zoo-kazakh.html", "detail-otyrar-kazakh.html", "detail-shymkentplaza-kazakh.html", "detail-yassawi-kazakh.html"]
    ];
    
    const regionLinks = ["astana-kazakh.html", "almaty-kazakh.html", "akmola-kazakh.html", "shymkent-turkistan-kazakh.html"];
    
    let destCurrentIndex = 0;cc

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
      title: "4 мезгіл",
      text: "Қазақстандағы қыс-қарлы пейзаждар, белсенді қысқы спорт түрлері мен жайлы дәстүрлер уақыты. Алматыдағы Шымбұлақ, Өскемендегі Ақбұлақ, Табаған және Нұратау сияқты тау шаңғысы курорттары шаңғы мен сноуборд әуесқойларын тартады. Теңіз деңгейінен 1691 м биіктікте орналасқан Медео мұз айдыны қарлы таулар арасында сырғанауды ұсынады. Экстремалды іздейтіндер Балқашта, Зайсанда немесе Каспий теңізінде қысқы балық аулауға, сондай-ақ қарлы далада қармен жүретін көліктермен сафариге барады. Дала аймақтарында сіз ит пен бұғы шанасына мініп, шексіз кеңістіктің тыныштығын тамашалай аласыз. Ашық ауада болғаннан кейін, Шонжы ыстық бұлақтарында немесе қарлы шыңдармен қоршалған Рахман кілттерінде демалу жақсы. Қыс - бұл дәстүрлі мерекелер маусымы: Қазақстанда Наурыз қысы, еуропалық Рождество және жаңа жыл кеңінен атап өтіледі. Қала алаңдары жарықтандырумен безендірілген, жәрмеңкелер өтеді, ал тауларда мұз фестивальдері өтеді.",
      background: "images/winter-bg.jpg"
  },
  {
      title: "КӨКТЕМ",
      text: "Қазақстандағы көктем-табиғаттың, гүлденген даланың және ғасырлар бойғы дәстүрлердің ояну уақыты. Наурыз айында еліміз жаңару мен көктемгі күн мен түннің теңелуін бейнелейтін басты ұлттық мереке-Наурыз мерекесін атап өтеді. Қалаларда театрландырылған шерулер, халықтық мерекелер мен спорттық жарыстар өткізіледі. Көктемгі Қазақстан қызғалдақ пен ирис кілемдерімен, әсіресе Алматы облысының далалары мен Алтын Эмл ұлттық паркі сияқты жерлерде жабылады. Бұл Шарын каньонына саяхаттаудың тамаша уақыты, онда сіз қысқы ұйқыдан кейін табиғаттың өмірге келгенін көре аласыз. Сондай-ақ көктем этнографиялық іс-шаралар мен ашық аспан астындағы музыкалық фестивальдерді қоса алғанда, фестиваль маусымының басталуын білдіреді. Ашық әуесқойлар табиғат гүлдеп, тау өзендері еріген қарға толып жатқан Тянь-Шань және Жетісу таулы соқпақтарымен жорықтарға шыға алады. Дала аймақтарында көктемде ат жарысы, көкпар және басқа да ат жарыстары өткізіледі.",
      background: "images/spring-bg.jpg"
  },
  {
      title: "ЖАЗ",
      text: "Қазақстандағы жаз-ыстық дала, салқын таулы өзендер мен шексіз жағажайлардың қарама-қайшылығы. Бұл Тянь-Шаньның керемет тауларына экспедицияға баруға, Көлсай көлдерінің көгілдір суларына сүңгуге немесе Каспий теңізінде жағажай демалысын тамашалауға болатын уақыт. Осы уақытта Катонқарағай мен Баянауыл сияқты қорықтар мен ұлттық саябақтарға саяхат танымал, мұнда туристер таулы ландшафттарды, сарқырамалар мен ормандарды тамашалайды. Ашық әуесқойлар үшін дала бойынша атпен жүру маршруттары, дауылды өзендерде рафтинг, сондай-ақ алтын Эмл құм төбелерінде квадроциклді турлар бар. Жаз - бұл фестиваль маусымы: жыл сайынғы этнофестивалі қонақтарды көшпенділердің дәстүрлі мәдениетімен таныстырады, ал Алматыда джаз концерттері ашық аспан астында өтеді. Бозжира және Қапшағай сияқты қазақстандық каньондар жазда фотографтар мен ерекше табиғи нысандарды зерттеушілерді тартады.",
      background: "images/summer-bg.jpg"
  },
  {
      title: "КҮЗ",
      text: "Қазақстандағы күз-даланың алтыны, ормандардың қызыл түстері және егіннің көптігі. Осы уақытта қалалар күзгі жапырақтардың жылы реңктеріне батып кетеді, ал Аймақтарда жемістер мен жүзім жинау маусымы басталады. Бұл гастрономиялық туризм үшін ең жақсы уақыт: базарлар жаңа алма, қауын және қарбызға толы, ал Маңғыстау мен Жетісудың шарап өсіретін аймақтарында Шарап фестивалі өтеді. Күз-бұл Көк-түбе және Медео сияқты таулы аймақтарға барудың ең жақсы уақыты, мұнда тұманды таң ертегідей атмосфера жасайды. Туристер Баянауыл ұлттық саябағына немесе су басқан шыршаларымен танымал Қайыңды көліне оңаша табиғатты тамашалау үшін барады. Дала өңірлерінде дәстүрлі ат жарысы маусымы басталады, ал Түркістан мен Тараз сияқты көне қалаларда Тарихи қайта құру жұмыстары жүргізілуде. Күз сонымен қатар аң аулау маусымының басталуын, соның ішінде әйгілі бүркіт аулауды білдіреді.",
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
              `⏱ Жолға кететін уақыт: ${leg.duration.text} | 📏 Қашықтық: ${leg.distance.text}`;
          });
        }
  
        const leg = result.routes[0].legs[0];
        document.getElementById("route-info").innerText =
          `⏱ Жолға кететін уақыт: ${leg.duration.text} | 📏 Қашықтық: ${leg.distance.text}`;
      } else {
        alert("Маршрут құру мүмкін емес: " + status);
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
                <a href="${loc.link}" style="display: inline-block; background: #E9A400; color: white; padding: 6px 12px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 14px;">Подробнее</a>
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
    // === АСТАНА ===
    {
      title: "Бәйтерек",
      description: "Қазақстан астанасының символы.",
      position: { lat: 51.128316, lng: 71.4305155 },
      region: "Астана",
      category: "Заманауи көрнекті орындар",
      image: "images/bayterek-night.jpg",
      link: "detail-baiterek-kazakh.html"
    },
    {
      title: "Нұр-Әлем",
      description: "ЭКСПО-дағы болашақ энергиясы музейі.",
      position: { lat: 51.0902, lng: 71.4180 },
      region: "Астана",
      category: "Мәдени және ойын-сауық орындары",
      image: "images/nuralem-1.jpg",
      link: "detail-nuralem-kazakh.html",
      imagePosition: "center 70%"
    },
    {
      title: "Астананың Бас мешіті",
      description: "Орталық Азиядағы ең үлкен мешіттердің бірі.",
      position: { lat: 51.0730730, lng: 71.4113276 },
      region: "Астана",
      category: "Мәдени және діни орындар",
      image: "images/mosque-1.jpg",
      link: "detail-mosque-kazakh.html",
      imagePosition: "center 60%"
    },
    {
      title: "Хан Шатыр",
      description: "Заманауи сауда-ойын-сауық орталығы.",
      position: { lat: 51.1325301, lng: 71.4037303 },
      region: "Астана",
      category: "Сауда орталықтары",
      image: "images/hanshatyr-1.jpg",
      link: "detail-hanshatyr-kazakh.html",
      imagePosition: "center 90%"
    },
    {
      title: "ҚР Ұлттық музейі",
      description: "Елдегі ең ірі музей.",
      position: { lat: 51.1184908, lng: 71.4696516 },
      region: "Астана",
      category: "Мәдени және діни орындар",
      image: "images/museum-1.jpg",
      link: "detail-museum-kazakh.html",
      imagePosition: "center 30%"
    },
    {
      title: "MEGA Silk Way",
      description: "EXPO жанындағы ірі сауда орталығы.",
      position: { lat: 51.0892, lng: 71.4045 },
      region: "Астана",
      category: "Сауда орталықтары",
      image: "images/mega-astana.jpg",
      link: "detail-mega-kazakh.html"
    },
    {
      title: "Бейбітшілік және келісім сарайы",
      description: "Толеранттылық символы саналатын пирамида.",
      position: { lat: 51.1231084, lng: 71.4636327 },
      region: "Астана",
      category: "Заманауи көрнекті орындар",
      image: "images/palace-astana.jpg",
      link: "detail-palace-kazakh.html",
      imagePosition: "center 30%"
    },
    {
      title: "Тұңғыш Президент кітапханасы",
      description: "Музейі бар заманауи ғимарат.",
      position: { lat: 51.1166567, lng: 71.442891 },
      region: "Астана",
      category: "Заманауи көрнекті орындар",
      image: "images/library-1.jpg",
      link: "detail-library-kazakh.html",
      imagePosition: "center 30%"
    },
    {
      title: "\"Мәңгілік Ел\" аркасы",
      description: "Панорамалық көрінісі бар салтанатты арка.",
      position: { lat: 51.1042916, lng: 71.4300961 },
      region: "Астана",
      category: "Сәулет ескерткіштері",
      image: "images/arka-astana.jpg",
      link: "detail-ark-kazakh.html"
    },
    {
      title: "Астана жағалауы",
      description: "Есіл өзені бойындағы серуендік аймақ.",
      position: { lat: 51.1568345, lng: 71.4268470 },
      region: "Астана",
      category: "Парктер мен табиғи аймақтар",
      image: "images/river-1.jpg",
      link: "detail-river-kazakh.html",
      imagePosition: "center 30%"
    },
    {
      title: "Ақ Орда резиденциясы",
      description: "Қазақстан Президентінің ресми резиденциясы.",
      position: { lat: 51.1257401, lng: 71.4463504 },
      region: "Астана",
      category: "Сәулет ескерткіштері",
      image: "images/akorda-1.jpg",
      link: "detail-akorda-kazakh.html",
      imagePosition: "center 70%"
    },
    {
      title: "Ailand",
      description: "Аквапарк, дельфинарий және океанариум.",
      position: { lat: 51.1476613, lng: 71.4159771 },
      region: "Астана",
      category: "Мәдени және ойын-сауық орындары",
      image: "images/ailand-2.jpg",
      link: "detail-ailand-kazakh.html"
    },

    // === АЛМАТЫ ===
    {
        title: "Шымбұлақ",
        description: "Алматы тауларында орналасқан тау шаңғысы курорты.",
        position: { lat: 43.1577486, lng: 77.0661976 },
        region: "Алматы",
        category: "Тау шаңғысы курорттары:",
        image: "images/shymbulak-bg.jpg",
        link: "detail-shymbulak-kazakh.html"
    },
    {
        title: "Медеу",
        description: "Шымбұлаққа жақын орналасқан биік таулы мұз айдыны.",
        position: { lat: 43.1579719, lng: 77.0567687 },
        region: "Алматы",
        category: "Тау шаңғысы курорттары:",
        image: "images/medeu-2.jpg",
        link: "detail-medeu-kazakh.html"
    },
    {
        title: "Көлсай көлдері",
        description: "Көркем тау көлдері.",
        position: { lat: 42.9390934, lng: 78.3243566 },
        region: "Алматы",
        category: "Табиғи көрікті жерлер:",
        image: "images/kolsay-2.jpg",
        link: "detail-kolsai-kazakh.html"
    },
    {
        title: "Қайыңды көлі",
        description: "Суға батып кеткен орманмен танымал көл.",
        position: { lat: 42.984461, lng: 78.4657918 },
        region: "Алматы",
        category: "Табиғи көрікті жерлер:",
        image: "images/kaindy-bg.jpg",
        link: "detail-kaindy-kazakh.html"
    },
    {
        title: "Шарын шатқалы",
        description: "Қазақстанның шағын Гранд Каньоны.",
        position: { lat: 43.3598684, lng: 79.0309748 },
        region: "Алматы",
        category: "Табиғи көрікті жерлер:",
        image: "images/charyn-bg.webp",
        link: "detail-charyn-kazakh.html"
    },
    {
        title: "Көк Төбе",
        description: "Панорамалық көрінісі бар тау және саябақ.",
        position: { lat: 43.2340538, lng: 76.9732659 },
        region: "Алматы",
        category: "Табиғи көрікті жерлер:",
        image: "images/koktobe.jpg",
        link: "detail-koktobe-kazakh.html"
    },
    {
        title: "Арбат",
        description: "Шығармашылық атмосферасы бар жаяу жүргіншілер көшесі.",
        position: { lat: 43.2618181, lng: 76.9403495 },
        region: "Алматы",
        category: "Қазіргі заманғы көрікті жерлер:",
        image: "images/arbat-bg.jpg",
        link: "detail-arbat-kazakh.html"
    },
    {
        title: "MEGA Park & Alma-Ata",
        description: "Қала орталығындағы сауда және демалыс орны.",
        position: { lat: 43.2016282, lng: 76.8903586 },
        region: "Алматы",
        category: "Сауда орталықтары:",
        image: "images/megaalmaty-1.jpg",
        link: "detail-megaalmaty-kazakh.html"
    },
    {
        title: "Президенттік саябақ",
        description: "Қаланың оңтүстік бөлігінде орналасқан үлкен саябақ.",
        position: { lat: 43.1936527, lng: 76.8842271 },
        region: "Алматы",
        category: "Табиғи көрікті жерлер:",
        image: "images/park-bg.jpg",
        link: "detail-park-kazakh.html"
    },
    {
        title: "Сақ қорғандары",
        description: "Сақтардың тарихи жерлеу орындары.",
        position: { lat: 43.9232848, lng: 78.2070669 },
        region: "Алматы",
        category: "Тарихи ескерткіштер:",
        image: "images/saks-bg.jpg",
        link: "detail-saks-kazakh.html"
    },
    {
        title: "Көшпенділер қаласы",
        description: "Алматы маңындағы этноауыл.",
        position: { lat: 44.0368762, lng: 76.9925312 },
        region: "Алматы",
        category: "Тарихи ескерткіштер:",
        image: "images/nomad-bg.webp",
        link: "detail-nomad-kazakh.html"
    },
    {
        title: "Республика алаңы",
        description: "Архитектуралық ескерткіштері бар басты алаң.",
        position: { lat: 43.2384923, lng: 76.9454507 },
        region: "Алматы",
        category: "Қазіргі заманғы көрікті жерлер:",
        image: "images/republic.jpg",
        link: "detail-republic-kazakh.html"
    },
    
    // === Ақмола облысы ===
    {
        title: "Бурабай",
        description: "Көлдер мен ормандарға бай шипажай аймағы.",
        position: { lat: 53.0836, lng: 70.2864 },
        region: "Ақмола",
        category: "Табиғи көрікті жерлер:",
        image: "images/burabay-bg.jpg",
        link: "detail-burabay-kazakh.html"
    },
    {
        title: "Оқжетпес жартасы",
        description: "Бурабай көліндегі әйгілі жартас.",
        position: { lat: 53.0839, lng: 70.2734 },
        region: "Ақмола",
        category: "Табиғи көрікті жерлер:",
        image: "images/okzhetpes.jpg",
        link: "detail-okzhetpes-kazakh.html"
    },
    {
        title: "Жұмбақтас",
        description: "Бурабайдағы жұмбақ жартас.",
        position: { lat: 53.0847, lng: 70.2750 },
        region: "Ақмола",
        category: "Табиғи көрікті жерлер:",
        image: "images/zhumbaktas-1.jpg",
        link: "detail-zhumbaktas-kazakh.html",
        imagePosition: "center 70%"
    },
    {
        title: "АЛЖИР мемориалы",
        description: "Саяси қуғын-сүргін құрбандарына арналған ескерткіш.",
        position: { lat: 51.0062, lng: 71.3439 },
        region: "Ақмола",
        category: "Тарихи ескерткіштер:",
        image: "images/alzhir-bg.jpg",
        link: "detail-alzhir-kazakh.html"
    },
    {
        title: "Көкшетау тарихы музейі",
        description: "Жергілікті өлкетану музейі.",
        position: { lat: 53.2864, lng: 69.3892 },
        region: "Ақмола",
        category: "Тарихи ескерткіштер:",
        image: "images/museumsaken.jpg",
        link: "detail-kokshetau-museum-kazakh.html"
    },
    // === ШЫМКЕНТ ЖӘНЕ ТҮРКІСТАН ===
{
  title: "Сейітжан қари мешіті",
  description: "Шымкенттегі үлкен заманауи мешіт.",
  position: { lat: 42.35579, lng: 69.6470 },
  region: "Шымкент және Түркістан",
  category: "Мәдени және діни орындар",
  image: "images/seyitzhan.jpg",
  link: "detail-seyitzhan-kazakh.html"
},
{
  title: "Қожа Ахмет Ясауи кесенесі",
  description: "Түркістандағы ЮНЕСКО нысаны — ұлы кесене.",
  position: { lat: 43.2979, lng: 68.2740 },
  region: "Шымкент және Түркістан",
  category: "Мәдени және діни орындар",
  image: "images/turkistan.jpg",
  link: "detail-yassawi-kazakh.html"
},
{
  title: "Түркістан Қараван-Сарайы",
  description: "Мавзолейге жақын орналасқан заманауи туристік кешен.",
  position: { lat: 43.29389, lng: 68.2744 },
  region: "Шымкент және Түркістан",
  category: "Заманауи көрікті жерлер",
  image: "images/karavan-1.jpg",
  link: "detail-karavan-saray-kazakh.html"
},
{
  title: "Шымкент хайуанаттар бағы",
  description: "Орталық Азиядағы ең ірі зоопарктердің бірі.",
  position: { lat: 42.37693, lng: 69.6257 },
  region: "Шымкент және Түркістан",
  category: "Ойын-сауық және мәдени орындар",
  image: "images/zoo-1.jpg",
  link: "detail-zoo-kazakh.html"
},
{
  title: "Шымкент өлкетану музейі",
  description: "Өңірдің тарихы мен мәдениетін таныстыратын музей.",
  position: { lat: 42.38284, lng: 69.5900 },
  region: "Шымкент және Түркістан",
  category: "Тарихи көрікті жерлер",
  image: "images/museumshym-1.jpg",
  link: "detail-museumshym-kazakh.html"
},
{
  title: "Отырар",
  description: "Бай тарихы бар көне қала-қамал.",
  position: { lat: 42.85078, lng: 68.3012 },
  region: "Шымкент және Түркістан",
  category: "Тарихи көрікті жерлер",
  image: "images/otyrar-1.webp",
  link: "detail-otyrar-kazakh.html"
},
{
  title: "Shymkent Plaza",
  description: "Қаланың орталығындағы заманауи сауда орталығы.",
  position: { lat: 42.31871, lng: 69.5907 },
  region: "Шымкент және Түркістан",
  category: "Сауда және ойын-сауық орталықтары",
  image: "images/shymkentplaza-1.jpg",
  link: "detail-shymkentplaza-kazakh.html"
},
{
  title: "Арыстан Баб кесенесі",
  description: "Түркістан маңындағы қасиетті зиярат орны.",
  position: { lat: 42.8530, lng: 68.2506 },
  region: "Шымкент және Түркістан",
  category: "Мәдени және діни орындар",
  image: "images/arystanbab-1.png",
  link: "detail-arystanbab-kazakh.html"
},
// === СЕМЕЙ ===
{
  title: "Семейдегі ағаш мешіт (Ағаш мешіті)",
  description: "XIX ғасырдың соңында салынған ерекше ағаш мешіт.",
  position: { lat: 50.40499, lng: 80.26348 },
  region: "Семей",
  category: "Мәдени және діни орындар",
  image: "images/agash-mosque-3.jpg",
  link: "detail-agash-mosque-kazakh.html"
},
{
  title: "Екі мұнаралы мешіт",
  description: "Екі мұнарасы бар тарихи мешіт.",
  position: { lat: 50.40157, lng: 80.10979 },
  region: "Семей",
  category: "Мәдени және діни орындар",
  image: "images/minaret-mosque-1.jpg",
  link: "detail-minaret-mosque-kazakh.html"
},
{
  title: "Абай Құнанбайұлы ескерткіші",
  description: "Ұлы ақын әрі ойшыл Абайға арналған монумент.",
  position: { lat: 50.40134, lng: 80.21747 },
  region: "Семей",
  category: "Тарихи көрікті жерлер",
  image: "images/abay-monument-1.png",
  link: "detail-abay-monument-kazakh.html"
},
{
  title: "Қабанбай батыр ескерткіші",
  description: "Ұлттық қаһарманға арналған ескерткіш.",
  position: { lat: 50.43150, lng: 80.25964 },
  region: "Семей",
  category: "Тарихи көрікті жерлер",
  image: "images/kabanbay-monument-2.png",
  link: "detail-kabanbay-monument-kazakh.html"
},
{
  title: "Аспалы көпір",
  description: "Ертіс өзені арқылы өтетін әйгілі аспалы көпір.",
  position: { lat: 50.40869, lng: 80.22145 },
  region: "Семей",
  category: "Заманауи көрікті жерлер",
  image: "images/bridge-1.jpg",
  link: "detail-bridge-kazakh.html"
},
{
  title: "Абай музей-қорығы",
  description: "Абайдың өмірі мен шығармашылығына арналған музей.",
  position: { lat: 50.40992, lng: 80.25199 },
  region: "Семей",
  category: "Мәдени және діни орындар",
  image: "images/abai-museum-1.png",
  link: "detail-abai-museum-kazakh.html"
},
{
  title: "Орталық қалалық саябақ",
  description: "Барлық отбасыға арналған демалыс орны.",
  position: { lat: 50.41139, lng: 80.25470 },
  region: "Семей",
  category: "Саябақтар және табиғи аймақтар",
  image: "images/city-park-1.png",
  link: "detail-city-park-kazakh.html"
},
// === ҚЫЗЫЛОРДА ===
{
  title: "Айтбай мешіті",
  description: "XIX ғасырда салынған қаланың көне мешіттерінің бірі.",
  position: { lat: 44.83928, lng: 65.49098 },
  region: "Қызылорда",
  category: "Мәдени және діни орындар",
  image: "images/images/aitbay-1.png",
  link: "detail-aitbay-kazakh.html"
},
{
  title: "Байқоңыр ғарыш айлағы",
  description: "Тұңғыш ғарышкер ұшқан әлемге әйгілі ғарыш айлағы.",
  position: { lat: 45.96426, lng: 63.27713 },
  region: "Қызылорда",
  category: "Тарихи көрікті жерлер",
  image: "images/images/baikonur-1.jpg",
  link: "detail-baikonur-kazakh.html"
},
{
  title: "Қызылорда облыстық өлкетану музейі",
  description: "Өңірдің тарихы, мәдениеті және табиғатына арналған экспозициялар.",
  position: { lat: 44.84319, lng: 65.49341 },
  region: "Қызылорда",
  category: "Мәдени және діни орындар",
  image: "images/museum-qyzylorda-1.png",
  link: "detail-museumkzo-kazakh.html"
},
{
  title: "Қорқыт Ата мемориалы",
  description: "Ұлы ойшыл және қобызшы Қорқыт Атаға арналған кешен.",
  position: { lat: 45.60402, lng: 63.93259 },
  region: "Қызылорда",
  category: "Тарихи көрікті жерлер",
  image: "images/korkyt-1.png",
  link: "detail-korkyt-kazakh.html"
},
{
  title: "Орталық алаң",
  description: "Архитектуралық нысандармен безендірілген қаланың басты алаңы.",
  position: { lat: 44.84276, lng: 65.50216 },
  region: "Қызылорда",
  category: "Заманауи көрікті жерлер",
  image: "images/central-square-1.png",
  link: "detail-square-kazakh.html"
},
{
  title: "Батырхан Шүкенов ескерткіші",
  description: "Қазақ эстрадасының жарқын жұлдызына арналған ескерткіш.",
  position: { lat: 44.84490, lng: 65.49422 },
  region: "Қызылорда",
  category: "Тарихи көрікті жерлер",
  image: "images/images/batyrkhan-1.png",
  link: "detail-batyrkhan-kazakh.html"
},
{
  title: "Arai City Mall",
  description: "Танымал сауда-ойын-сауық орталығы.",
  position: { lat: 44.80615, lng: 65.51737 },
  region: "Қызылорда",
  category: "Сауда орталықтары",
  image: "images/arai-city-1.png",
  link: "detail-aray-kazakh.html"
},
{
  title: "Қызылорда набережнаясы",
  description: "Сырдария өзені бойындағы кең серуен аймағы.",
  position: { lat: 44.78019, lng: 65.51211 },
  region: "Қызылорда",
  category: "Саябақтар және табиғи аймақтар",
  image: "images/images/naberezh-1.png",
  link: "detail-naberezh-kazakh.html"
},
{
  title: "Арал теңізі",
  description: "Тарихи маңызы бар тұзды көл.",
  position: { lat: 45.50654, lng: 58.55908 },
  region: "Қызылорда",
  category: "Табиғи көрікті жерлер",
  image: "images/aral-1.png",
  link: "detail-aral-kazakh.html"
},
// === АҚТАУ ===
{
  title: "Бекет Ата мешіті",
  description: "Қасиетті жерасты мешіті, зиярат орны.",
  position: { lat: 43.59480, lng: 54.07843 },
  region: "Ақтау",
  category: "Мәдени және діни орындар",
  image: "images/beketata-1.jpg",
  link: "detail-beketata-kazakh.html"
},
{
  title: "Жартас жолы",
  description: "Табиғи жартастар арасындағы ерекше бағыт.",
  position: { lat: 43.63133, lng: 51.15846 },
  region: "Ақтау",
  category: "Табиғи көрікті жерлер",
  image: "images/skala-1.jpg",
  link: "detail-skala-kazakh.html"
},
{
  title: "Маңғыстау тарихи-өлкетану музейі",
  description: "Маңғыстау өлкесінің тарихы мен мәдениетін таныстыратын экспозициялар.",
  position: { lat: 43.64857, lng: 51.15471 },
  region: "Ақтау",
  category: "Мәдени және діни орындар",
  image: "images/museum-aktau-1.png",
  link: "detail-museumaktau-kazakh.html"
},
{
  title: "Бозжыра шатқалы",
  description: "Маңғыстаудың таңғажайып табиғи ландшафты.",
  position: { lat: 43.41513, lng: 54.07001 },
  region: "Ақтау",
  category: "Табиғи көрікті жерлер",
  image: "images/images/boszhira-1.jpg",
  link: "detail-boszhira-kazakh.html"
},
{
  title: "Үстірт қорығы",
  description: "Сирек кездесетін флора мен фаунаға бай қорғалатын аймақ.",
  position: { lat: 43.12714, lng: 54.62125 },
  region: "Ақтау",
  category: "Табиғи көрікті жерлер",
  image: "images/ustyurt-1.jpg",
  link: "detail-ustyurt-kazakh.html"
},
{
  title: "Каспий теңізі",
  description: "Жағажайлар мен демалыс орындары орналасқан теңіз жағалауы.",
  position: { lat: 43.64591, lng: 51.08527 },
  region: "Ақтау",
  category: "Табиғи көрікті жерлер",
  image: "images/caspian-1.jpg",
  link: "detail-caspian-kazakh.html"
},
{
  title: "Шеркала тауы",
  description: "Киелі аңыздарға толы ерекше пішінді тау.",
  position: { lat: 44.25674, lng: 52.00144 },
  region: "Ақтау",
  category: "Табиғи көрікті жерлер",
  image: "images/sherkala-1.jpg",
  link: "detail-sherkala-kazakh.html"
},
{
  title: "Маңғыстау облыстық мешіті",
  description: "Ақтаудың орталығындағы заманауи сәулетті мешіт.",
  position: { lat: 43.66045, lng: 51.15696 },
  region: "Ақтау",
  category: "Мәдени және діни орындар",
  image: "images/regionalmosque.jpg",
  link: "detail-regionalmosque-kazakh.html"
},
{
  title: "Благовещен шіркеуі",
  description: "Ақтаудағы православиелік ғибадат орны.",
  position: { lat: 43.66147, lng: 51.17176 },
  region: "Ақтау",
  category: "Мәдени және діни орындар",
  image: "images/church-1.png",
  link: "detail-church-kazakh.html"
},
{
  title: "Каравелла монументі",
  description: "Теңіз саяхатшыларына арналған ескерткіш.",
  position: { lat: 43.63538, lng: 51.16611 },
  region: "Ақтау",
  category: "Тарихи көрікті жерлер",
  image: "images/karavella-1.jpg",
  link: "detail-karavella-kazakh.html"
},
{
  title: "МИГ-21 ұшағының ескерткіші",
  description: "Әскери авиацияға арналған монумент.",
  position: { lat: 43.64200, lng: 51.17600 },
  region: "Ақтау",
  category: "Тарихи көрікті жерлер",
  image: "images/mig-1.png",
  link: "detail-mig-kazakh.html"
},
{
  title: "Tetysblu тақырыптық паркі",
  description: "Ақтаудағы заманауи аквапарк пен ойын-сауық кешені.",
  position: { lat: 43.50424, lng: 51.29491 },
  region: "Ақтау",
  category: "Ойын-сауық және мәдени орындар",
  image: "images/tetysblu-1.png",
  link: "detail-tetysblu-kazakh.html"
},
{
  title: "Ақтау набережнаясы",
  description: "Каспий теңізіне көрініс беретін кең жағалау жолы.",
  position: { lat: 43.66021, lng: 51.13057 },
  region: "Ақтау",
  category: "Саябақтар және табиғи аймақтар",
  image: "images/aktau-naberezhnaya-1",
  link: "detail-naberezhnaya-kazakh.html"
},
// === ТАРАЗ ===
{
    title: "Музей-заповедник «Памятники древнего Тараза»",
    description: "Комплекс археологических памятников и музей в центре Тараза.",
    position: { lat: 42.89720, lng: 71.39218 },
    region: "Тараз",
    category: "Исторические достопримечательности",
    image: "images/taraz-museum-bg.jpg",
    link: "detail-taraz-museum-complex.html"
},
{
    title: "Мавзолей Карахана",
    description: "Архитектурный памятник X-XI веков.",
    position: { lat: 42.89877, lng: 71.38246 },
    region: "Тараз",
    category: "Культурные и религиозные места",
    image: "images/karakhan-bg.png",
    link: "detail-karakhan.html"
},
{
    title: "Дворцовый комплекс Акыртас",
    description: "Загадочный археологический памятник вблизи Тараза.",
    position: { lat: 42.91819, lng: 71.44304 },
    region: "Тараз",
    category: "Исторические достопримечательности",
    image: "images/akyrtas-bg.png",
    link: "detail-akyrtas.html"
},
{
    title: "Музей «Древний Тараз»",
    description: "Экспозиции, посвященные древнему городу.",
    position: { lat: 42.89720, lng: 71.39218 },
    region: "Тараз",
    category: "Культурные и религиозные места",
    image: "images/ancient-taraz-bg.png",
    link: "detail-ancient-taraz.html"
},
{
    title: "Мавзолей Бабаджи-хатун",
    description: "Уникальный памятник архитектуры XI века.",
    position: { lat: 42.82731, lng: 71.16913 },
    region: "Тараз",
    category: "Культурные и религиозные места",
    image: "images/babaji-bg.png",
    link: "detail-babaji.html"
},
{
    title: "Мавзолей Айша-Биби",
    description: "Известный архитектурный памятник с романтической легендой.",
    position: { lat: 42.83690, lng: 71.18784 },
    region: "Тараз",
    category: "Культурные и религиозные места",
    image: "images/ayshabibi-bg.jpg",
    link: "detail-ayshabibi.html"
},
{
    title: "Мечеть в виде Корана (Кенесхан кажы)",
    description: "Необычная мечеть, выполненная в форме раскрытой книги.",
    position: { lat: 42.91645, lng: 71.35019 },
    region: "Тараз",
    category: "Культурные и религиозные места",
    image: "images/keneshan-bg.webp",
    link: "detail-keneshan.html"
},
{
    title: "Парк культуры и отдыха им. Т. Рыскулова",
    description: "Большой городской парк с аттракционами и зелёными зонами.",
    position: { lat: 42.89878, lng: 71.36724 },
    region: "Тараз",
    category: "Парки и природные зоны",
    image: "images/rysqulovpark-bg.png",
    link: "detail-rysqulovpark.html"
},
{
    title: "Президентский парк",
    description: "Современная зона отдыха с аллеями и фонтанами.",
    position: { lat: 42.90093, lng: 71.33775 },
    region: "Тараз",
    category: "Парки и природные зоны",
    image: "images/presidentpark-taraz-bg.jpg",
    link: "detail-presidentpark-taraz.html"
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
  "Астана": { lat: 51.1516, lng: 71.4195 }, 
  "Алматы": { lat: 43.2220, lng: 76.8512 },
  "Көкшетау": { lat: 53.0840, lng: 70.2750 },
  "Шымкент және Түркістан": { lat: 42.9500, lng: 69.0000 },
  "Семей": { lat: 50.4333, lng: 80.2667 },
  "Қызылорда": { lat: 44.8500, lng: 65.5167 },
  "Ақтау": { lat: 43.6525, lng: 51.1575 },
  "Тараз": { lat: 42.9000, lng: 71.3670 },
  "all": { lat: 47.9, lng: 67.4 } // Координаты для всей карты
};

document.getElementById("category-select").addEventListener("change", function() {
  const selectedCategory = this.value;
  const filteredLocations = locations.filter(location => {
      // Для фильтрации по категории, если выбрано "Все", показываем все
      return selectedCategory === "Барлығы" || location.category.includes(selectedCategory);
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
              <a href="${loc.link}" style="display: inline-block; background: #E9A400; color: white; padding: 6px 12px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 14px;">Подробнее</a>
              <br><br>
              <button class="route-btn" style="background: #4285F4; color: white; border: none; padding: 6px 12px; border-radius: 4px; margin-top: 5px; cursor: pointer;">📍 Маршрут</button>
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
  window.initMap = initMap;
}


