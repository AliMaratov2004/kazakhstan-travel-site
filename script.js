document.addEventListener("DOMContentLoaded", function () {
    // --- Карусель на главной ---
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
            text: "Символ столицы, 97-метровая башня с панорамным видом на город.",
            position: "center",
            link: "detail-baiterek.html"
        },
        {
            image: "images/astanamosque.jpg",
            title: "ГЛАВНАЯ МЕЧЕТЬ АСТАНЫ",
            text: "Самая большая мечеть в Центральной Азии, впечатляющая архитектура и интерьер.",
            position: "left",
            link: "detail-mosque.html"
        },
        {
            image: "images/kolsaylake.jpg",
            title: "ОЗЕРО КОЛЬСАЙ (АЛМАТЫ)",
            text: "Живописные горные озёра с невероятными видами.",
            position: "center",
            link: "detail-kolsay.html" // или detail-kolsay.html, если создашь
        },
        {
            image: "images/shymbulakwinter.jpg",
            title: "ШЫМБУЛАК (АЛМАТЫ)",
            text: "Самый высокий горный каток в мире и популярный горнолыжный курорт.",
            position: "center",
            link: "detail-shymbulak.html"
        },
        {
            image: "images/turkistan.jpg",
            title: "МОВЗОЛЕЙ ХОДЖИ АХМЕДА ЯСАВИ (ТУРКИСТАН)",
            text: "Великий архитектурный памятник XIV века, объект наследия ЮНЕСКО.",
            position: "center",
            link: "detail-yassawi.html"
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
        city: "АСТАНА",
        title: "Лучшие места Столицы",
        text: "Погрузитесь в атмосферу столицы Казахстана: от грандиозных современных символов, таких как Байтерек и Главная Мечеть, до исторических мест.",
        images: ["images/expo.jpg", "images/khanshatyr.jpg", "images/astanamosque.jpg", "images/museum.jpg", "images/bayterek-night.jpg"]
      },
      {
        city: "АЛМАТЫ",
        title: "Лучшие места Алматы",
        text: "Алматы – это сердце южного Казахстана, город с потрясающим сочетанием современности, природы и истории.",
        images: ["images/medeu.jpg", "images/koktobe.jpg", "images/kayndy.jpg", "images/kolsay.jpg", "images/charyn.png"]
      },
      {
        city: "АКМОЛИНСКИЙ ОБЛОСТЬ",
        title: "Лучшие места Акмолинской облости",
        text: "Акмолинская область – это регион с природными красотами, озёрами и историей.",
        images: ["images/alzhyr.jpg", "images/movbatyrb.jpg", "images/museumsaken.jpg", "images/kokshetau.jpg", "images/burabay.jpg"]
      },
      {
        city: "ШЫМКЕНТ И ТУРКИСТАН",
        title: "Лучшие достопримечательности Шымкента и Туркестанской области",
        text: "Юг Казахстана – богатый историей и культурой регион с мавзолеями и святыми местами.",
        images: ["images/karavan.png", "images/zoo.jpg", "images/otyrar.jpg", "images/shymplaza.jpg", "images/turkistan.jpg"]
      }
    ];
    
    const destinationLinks = [
      ["detail-nuralem.html", "detail-hanshatyr.html", "detail-mosque.html", "detail-museum.html", "detail-baiterek.html"],
      ["detail-medeu.html", "detail-koktobe.html", "detail-kaindy.html", "detail-kolsay.html", "detail-charyn.html"],
      ["detail-alzhir.html", "detail-museumbatyr.html", "detail-museumsaken.html", "detail-tele.html", "detail-burabay.html"],
      ["detail-karavan-saray.html", "detail-zoo.html", "detail-otyrar.html", "detail-shymkentplaza.html", "detail-yassawi.html"]
    ];
    
    const regionLinks = ["astana.html", "almaty.html", "akmola.html", "shymkent-turkistan.html"];
    
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
            title: "4 СЕЗОНА",
            text: "Зима в Казахстане — это время снежных пейзажей, активных зимних видов спорта и уютных традиций. Горнолыжные курорты, такие как Шымбулак в Алматы, Ак-Булак, Табаган и Нуртау в Усть-Каменогорске, привлекают любителей лыж и сноуборда. Каток Медео, расположенный на высоте 1691 м над уровнем моря, предлагает катание среди заснеженных гор. Те, кто ищет экстрим, отправляются на зимнюю рыбалку на Балхаше, Зайсане или Каспийском море, а также на сафари по заснеженной степи на снегоходах. В степных регионах можно прокатиться на собачьих и оленьих упряжках, наслаждаясь тишиной бескрайних просторов. После активного отдыха приятно расслабиться в горячих источниках Чунджи или Рахмановских ключах, окружённых снежными вершинами. Зима — это также сезон традиционных праздников: в Казахстане широко отмечают Наурыз Кышы, европейское Рождество и Новый год. Городские площади украшаются иллюминацией, проходят ярмарки, а в горах устраиваются ледовые фестивали.",
            background: "images/winter-bg.jpg"
        },
        {
            title: "ВЕСНА",
            text: "Весна в Казахстане — это время пробуждения природы, цветущих степей и многовековых традиций. В марте страна отмечает главный национальный праздник — Наурыз, символизирующий обновление и весеннее равноденствие. В городах проводятся театрализованные шествия, народные гуляния и спортивные состязания. Весенний Казахстан покрывается коврами тюльпанов и ирисов, особенно в таких местах, как степи Алматинской области и национальный парк Алтын-Эмель. Это идеальное время для путешествий в Чарынский каньон, где можно увидеть, как природа оживает после зимнего сна. Также весна знаменует начало фестивального сезона, включая этнографические мероприятия и музыкальные фестивали под открытым небом. Любители активного отдыха могут отправиться в походы по горным тропам Тянь-Шаня и Жетысу, где природа расцветает, а горные реки наполняются тающим снегом. В степных регионах весной проводят скачки, кокпар и другие конные соревнования.",
            background: "images/spring-bg.jpg"
        },
        {
            title: "ЛЕТО",
            text: "Лето в Казахстане — это контраст жарких степей, прохладных горных рек и бескрайних пляжей. Это время, когда можно отправиться в экспедицию по величественным горам Тянь-Шаня, окунуться в бирюзовые воды Кольсайских озёр или насладиться пляжным отдыхом на Каспийском море. В это время популярны путешествия в заповедники и национальные парки, такие как Катон-Карагай и Баянаул, где туристы наслаждаются горными пейзажами, водопадами и лесами. Для любителей активного отдыха доступны конные маршруты по степям, рафтинг по бурным рекам, а также квадроциклетные туры по песчаным дюнам Алтын-Эмеля. Лето — это также сезон фестивалей: ежегодный этнофестиваль \"Кочевник\" знакомит гостей с традиционной культурой кочевников, а джазовые концерты в Алматы проходят под открытым небом. Казахстанские каньоны, такие как Бозжира и Капчагай, в летнее время привлекают фотографов и исследователей необычных природных форм.",
            background: "images/summer-bg.jpg"
        },
        {
            title: "ОСЕНЬ",
            text: "Осень в Казахстане — это золото степей, багряные краски лесов и изобилие урожая. В это время города утопают в тёплых оттенках осенней листвы, а в регионах начинается сезон сбора фруктов и винограда. Это лучшее время для гастрономического туризма: рынки наполняются свежими яблоками, дынями и арбузами, а в винодельческих регионах Мангистау и Жетысу проходят фестивали вина. Осень — это также лучшее время для посещения горных районов, таких как Кок-Тюбе и Медео, где туманные рассветы создают сказочную атмосферу. Туристы отправляются в национальный парк Баянаул или на озеро Каинды, знаменитое своими затопленными елями, чтобы насладиться уединённой природой. В степных регионах начинается сезон традиционных скачек, а в старинных городах, таких как Туркестан и Тараз, проходят исторические реконструкции. Осень также знаменует начало охотничьего сезона, в том числе знаменитой охоты с беркутами.",
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
        () => alert("Не удалось определить местоположение.")
      );
    } else {
      alert("Геолокация не поддерживается вашим браузером.");
    }
  }

  let walkingPolyline = null;

  function getRoute(destLat, destLng) {
    if (!userPosition) {
      alert("Сначала нажмите кнопку 'Моё местоположение'!");
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
        alert("Не удалось построить маршрут: " + status);
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
      `🚌 Автобусный маршрут №50 | ⏱ ~${minutes} мин | 📏 ~${(totalDistance / 1000).toFixed(1)} км`;
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
        title: "Байтерек",
        description: "Символ столицы Казахстана.",
        position: { lat: 51.128316, lng: 71.4305155 },
        region: "Астана",
        category: "Современные достопримечательности",
        image: "images/bayterek-night.jpg",
        link: "detail-baiterek.html"
      },
    {
        title: "Nur-Alem",
        description: "Футуристический музей энергии EXPO.",
        position: { lat: 51.0902, lng: 71.4180 },
        region: "Астана",
        category: "Современные достопримечательности", 
        category: "Развлекательные и культурные места ", 
        image: "images/nuralem-1.jpg",
        link: "detail-nuralem.html",
        imagePosition: "center 70%" 
    },
    {
        title: "Главная мечеть Астаны",
        description: "Одна из крупнейших мечетей в Центральной Азии.",
        position: { lat: 51.0730730, lng: 71.4113276 }, 
        region: "Астана",
        category: "Культурные и религиозные места", 
        image: "images/mosque-1.jpg",
        link: "detail-mosque.html",
        imagePosition: "center 60%" 
    },
    {
        title: "Хан Шатыр",
        description: "Футуристический торгово-развлекательный центр.",
        position: { lat: 51.1325301, lng: 71.4037303 },
        region: "Астана",
        category: "ТРЦ", 
        image: "images/hanshatyr-1.jpg",
        link: "detail-hanshatyr.html",
        imagePosition: "center 90%" 
    },
    {
        title: "Национальный музей РК",
        description: "Крупнейший музей в стране.",
        position: { lat: 51.1184908, lng: 71.4696516 },
        region: "Астана",
        category: "Культурные и религиозные места", 
        image: "images/museum-1.jpg",
        link: "detail-museum.html",
        imagePosition: "center 30%" 
    },
    {
        title: "MEGA Silk Way",
        description: "Огромный торговый центр возле EXPO.",
        position: { lat: 51.0892, lng: 71.4045 },
        region: "Астана",
        category: "ТРЦ", 
        image: "images/mega-astana.jpg",
        link: "detail-mega.html"
    },
    {
        title: "Дворец Мира и Согласия",
        description: "Пирамида – символ толерантности.",
        position: { lat: 51.1231084, lng: 71.4636327 },
        region: "Астана",
        category: "Современные достопримечательности", 
        image: "images/palace-astana.jpg",
        link: "detail-palace.html",
        imagePosition: "center 30%"  // 👈 индивидуально
    },
    {
        title: "Библиотека Первого Президента",
        description: "Современное здание с музеем внутри.",
        position: { lat: 51.1166567, lng: 71.442891 },
        region: "Астана",
        category: "Современные достопримечательности", 
        image: "images/library-1.jpg",
        link: "detail-library.html",
        imagePosition: "center 30%" 
    },
    {
        title: "Арка 'Мәңгілік Ел'",
        description: "Триумфальная арка с панорамой.",
        position: { lat: 51.1042916, lng: 71.4300961 },
        region: "Астана",
        category: "Архитектурные памятники:", 
        image: "images/arka-astana.jpg",
        link: "detail-ark.html"
    },
    {
        title: "Набережная Астаны",
        description: "Прогулочная зона вдоль реки Есиль.",
        position: { lat: 51.1568345, lng: 71.4268470 },
        region: "Астана",
        category: "Парки и природные зоны", 
        image: "images/river-1.jpg",
        link: "detail-river.html",
        imagePosition: "center 30%" 
    },
    {
        title: "Резиденция Ак Орда",
        description: "Официальная резиденция Президента РК.",
        position: { lat: 51.1257401, lng: 71.4463504 },
        region: "Астана",
        category: "Архитектурные памятники:",
        image: "images/akorda-1.jpg",
        link: "detail-akorda.html",
        imagePosition: "center 70%" 
    },
    {
        title: "Ailand",
        description: "Аквапарк, дельфинарий и океанариум.",
        position: { lat: 51.1476613, lng: 71.4159771 },
        region: "Астана",
        category: "Развлекательные и культурные места:",
        image: "images/ailand-2.jpg",
        link: "detail-ailand.html"
    },

    // === АЛМАТЫ ===
    {
        title: "Шымбулак",
        description: "Горнолыжный курорт в горах Алматы.",
        position: { lat: 43.1577486, lng: 77.0661976 },
        region: "Алматы",
        category: "Горнолыжные курорты:",
        image: "images/shymbulak-bg.jpg",
        link: "detail-shymbulak.html"
    },
    {
        title: "Медеу",
        description: "Высокогорный каток рядом с Шымбулаком.",
        position: { lat: 43.1579719, lng: 77.0567687 },
        region: "Алматы",
        category: "Горнолыжные курорты:",
        image: "images/medeu-2.jpg",
        link: "detail-medeu.html"
    },
    {
        title: "Озёра Кольсай",
        description: "Живописные горные озёра.",
        position: { lat: 42.9390934, lng: 78.3243566 },
        region: "Алматы",
        category: "Природные достопримечательности:",
        image: "images/kolsay-2.jpg",
        link: "detail-kolsai.html"
    },
    {
        title: "Озеро Каинды",
        description: "Озеро с затопленным лесом.",
        position: { lat: 42.984461, lng: 78.4657918 },
        region: "Алматы",
        category: "Природные достопримечательности:",
        image: "images/kaindy-bg.jpg",
        link: "detail-kaindy.html"
    },
    {
        title: "Чарынский каньон",
        description: "Мини-гранд каньон Казахстана.",
        position: { lat: 43.3598684, lng: 79.0309748 },
        region: "Алматы",
        category: "Природные достопримечательности:",
        image: "images/charyn-bg.webp",
        link: "detail-charyn.html"
    },
    {
        title: "Кок Тобе",
        description: "Гора с панорамой и парком.",
        position: { lat: 43.2340538, lng: 76.9732659 },
        region: "Алматы",
        category: "Природные достопримечательности:",
        category: "Современные достопримечательности:",
        image: "images/koktobe.jpg",
        link: "detail-koktobe.html"
    },
    {
        title: "Арбат",
        description: "Прогулочная улица с творческой атмосферой.",
        position: { lat: 43.2618181, lng: 76.9403495 },
        region: "Алматы",
        category: "Современные достопримечательности:",
        category: "Культурные достопримечательности:",
        image: "images/arbat-bg.jpg",
        link: "detail-arbat.html"
    },
    {
        title: "MEGA Park & Alma-Ata",
        description: "ТЦ и место отдыха в центре.",
        position: { lat: 43.2016282, lng: 76.8903586 },
        region: "Алматы",
        category: "ТРЦ:",
        image: "images/megaalmaty-1.jpg",
        link: "detail-megaalmaty.html"
    },
    {
        title: "Президентский парк",
        description: "Огромный парк в южной части города.",
        position: { lat: 43.1936527, lng: 76.8842271 },
        region: "Алматы",
        category: "Природные достопримечательности:",
        category: "Культурные достопримечательности:",
        image: "images/park-bg.jpg",
        link: "detail-park.html"
    },
    {
        title: "Сакские курганы",
        description: "Исторические захоронения саков.",
        position: { lat: 43.9232848, lng: 78.2070669 },
        region: "Алматы",
        category: "Исторические достопримечательности:",
        category: "Архитектурные памятники:",
        image: "images/saks-bg.jpg",
        link: "detail-saks.html"
    },
    {
        title: "Город кочевников",
        description: "Этноаул недалеко от Алматы.",
        position: { lat: 44.0368762, lng: 76.9925312 },
        region: "Алматы",
        category: "Исторические достопримечательности:",
        category: "Архитектурные памятники:",
        image: "images/nomad-bg.webp",
        link: "detail-nomad.html"
    },
    {
        title: "Площадь Республики",
        description: "Главная площадь с архитектурными памятниками.",
        position: { lat: 43.2384923, lng: 76.9454507 },
        region: "Алматы",
        category: "Современные достопримечательности:",
        category: "Культурные достопримечательности:",
        image: "images/republic.jpg",
        link: "detail-republic.html"
    },

    // === АКМОЛИНСКАЯ ОБЛАСТЬ ===
    {
        title: "Бурабай",
        description: "Курортная зона с озёрами и лесами.",
        position: { lat: 53.0836, lng: 70.2864 },
        region: "Кокшетау",
        category: "Природные достопримечательности:",
        image: "images/burabay-bg.jpg",
        link: "detail-burabay.html"
    },
    {
        title: "Скала Окжетпес",
        description: "Известная скала в озере Бурабай.",
        position: { lat: 53.0839, lng: 70.2734 },
        region: "Кокшетау",
        category: "Природные достопримечательности:",
        image: "images/okzhetpes.jpg",
        link: "detail-okzhetpes.html"
    },
    {
        title: "Скала Жұмбақтас",
        description: "Скала-загадка в Боровом.",
        position: { lat: 53.0847, lng: 70.2750 },
        region: "Кокшетау",
        category: "Природные достопримечательности:",
        image: "images/zhumbaktas-1.jpg",
        link: "detail-zhumbaktas.html",
        imagePosition: "center 70%" 
    },
    {
        title: "Мемориал АЛЖИР",
        description: "Памятник жертвам репрессий.",
        position: { lat: 51.0062, lng: 71.3439 },
        region: "Кокшетау",
        category: "Исторические достопримечательности:",
        image: "images/alzhir-bg.jpg",
        link: "detail-alzhir.html"
    },
    {
        title: "Музей истории Кокшетау",
        description: "Местный краеведческий музей.",
        position: { lat: 53.2864, lng: 69.3892 },
        region: "Кокшетау",
        category: "Исторические достопримечательности:",
        image: "images/museumsaken.jpg",
        link: "detail-kokshetau-museum.html"
    },
    // === ШЫМКЕНТ И ТУРКЕСТАН ===
{
    title: "Большая мечеть им. Сейітжана қари",
    description: "Крупная современная мечеть в Шымкенте.",
    position: { lat: 42.35579, lng: 69.6470 },
    region: "Шымкент и Туркистан",
    category: "Культурные и религиозные места",
    image: "images/seyitzhan.jpg",
    link: "detail-seyitzhan.html"
},
{
    title: "Мавзолей Ходжи Ахмеда Ясави",
    description: "Величественный мавзолей ЮНЕСКО в Туркестане.",
    position: { lat: 43.2979, lng: 68.2740 },
    region: "Шымкент и Туркистан",
    category: "Культурные и религиозные места",
    image: "images/turkistan.jpg",
    link: "detail-yassawi.html"
},
{
    title: "Караван-сарай Туркестана",
    description: "Современный туристический комплекс рядом с мавзолеем.",
    position: { lat: 43.29389, lng: 68.2744 },
    region: "Шымкент и Туркистан",
    category: "Современные достопримечательности",
    image: "images/karavan-1.jpg",
    link: "detail-karavan-saray.html"
},
{
    title: "Зоопарк Шымкента",
    description: "Один из крупнейших зоопарков Центральной Азии.",
    position: { lat: 42.37693, lng: 69.6257 },
    region: "Шымкент и Туркистан",
    category: "Развлекательные и культурные места",
    image: "images/zoo-1.jpg",
    link: "detail-zoo.html"
},
{
    title: "Краеведческий музей Шымкента",
    description: "Музей истории и культуры региона.",
    position: { lat: 42.38284, lng: 69.5900 },
    region: "Шымкент и Туркистан",
    category: "Исторические достопримечательности",
    image: "images/museumshym-1.jpg",
    link: "detail-museumshym.html"
},
{
    title: "Отырар",
    description: "Древний город-крепость с богатой историей.",
    position: { lat: 42.85078, lng: 68.3012 },
    region: "Шымкент и Туркистан",
    category: "Исторические достопримечательности",
    image: "images/otyrar-1.webp",
    link: "detail-otyrar.html"
},
{
    title: "Shymkent Plaza",
    description: "Современный ТРЦ в центре города.",
    position: { lat: 42.31871, lng: 69.5907 },
    region: "Шымкент и Туркистан",
    category: "ТРЦ",
    image: "images/shymkentplaza-1.jpg",
    link: "detail-shymkentplaza.html"
},
{
    title: "Арыстан Баб",
    description: "Святое место рядом с Туркестаном.",
    position: { lat: 42.8530, lng: 68.2506 },
    region: "Шымкент и Туркистан",
    category: "Культурные и религиозные места",
    image: "images/arystanbab-1.png",
    link: "detail-arystanbab.html"
},
// === СЕМЕЙ ===
{
    title: "Деревянная мечеть Семея (Агаш)",
    description: "Уникальная деревянная мечеть конца XIX века.",
    position: { lat: 50.40499, lng: 80.26348 },
    region: "Семей",
    category: "Культурные и религиозные места",
    image: "images/agash-mosque-3.jpg",
    link: "detail-agash-mosque.html"
},
{
    title: "Двухминаретная соборная мечеть",
    description: "Историческая мечеть с двумя минаретами.",
    position: { lat: 50.40157, lng: 80.10979 },
    region: "Семей",
    category: "Культурные и религиозные места",
    image: "images/minaret-mosque-1.jpg",
    link: "detail-minaret-mosque.html"
},
{
    title: "Памятник Абаю Кунанбаеву",
    description: "Монумент великому казахскому поэту и мыслителю.",
    position: { lat: 50.40134, lng: 80.21747 },
    region: "Семей",
    category: "Исторические достопримечательности",
    image: "images/abay-monument-1.png",
    link: "detail-abay-monument.html"
},
{
    title: "Памятник Кабанбай Батыру",
    description: "Памятник национальному герою.",
    position: { lat: 50.43150, lng: 80.25964 },
    region: "Семей",
    category: "Исторические достопримечательности",
    image: "images/kabanbay-monument-2.png",
    link: "detail-kabanbay-monument.html"
},
{
    title: "Подвесной мост",
    description: "Знаменитый подвесной мост через реку Иртыш.",
    position: { lat: 50.40869, lng: 80.22145 },
    region: "Семей",
    category: "Современные достопримечательности",
    image: "images/bridge-1.jpg",
    link: "detail-bridge.html"
},
{
    title: "Музей-заповедник Абая",
    description: "Музей, посвящённый жизни и творчеству Абая.",
    position: { lat: 50.40992, lng: 80.25199 },
    region: "Семей",
    category: "Культурные и религиозные места",
    image: "images/abai-museum-1.png",
    link: "detail-abai-museum.html"
},
{
    title: "Центральный городской парк",
    description: "Место отдыха для всей семьи.",
    position: { lat: 50.41139, lng: 80.25470 },
    region: "Семей",
    category: "Парки и природные зоны",
    image: "images/city-park-1.png",
    link: "detail-city-park.html"
},
// === КЫЗЫЛОРДА ===
{
    title: "Мечеть Айтбая",
    description: "Одна из старейших мечетей города, построенная в XIX веке.",
    position: { lat: 44.83928, lng: 65.49098 },
    region: "Кызылорда",
    category: "Культурные и религиозные места",
    image: "images/images/aitbay-1.png",
    link: "detail-aitbay.html"
},
{
    title: "Космодром Байконур",
    description: "Знаменитый космодром, первый запуск человека в космос.",
    position: { lat: 45.96426, lng: 63.27713 },
    region: "Кызылорда",
    category: "Исторические достопримечательности",
    image: "images/images/baikonur-1.jpg",
    link: "detail-baikonur.html"
},
{
    title: "Краеведческий музей",
    description: "Экспозиции по истории, культуре и природе региона.",
    position: { lat: 44.84319, lng: 65.49341 },
    region: "Кызылорда",
    category: "Культурные и религиозные места",
    image: "images/museum-qyzylorda-1.png",
    link: "detail-museumkzo.html"
},
{
    title: "Мемориал Коркыт-Ата",
    description: "Мемориальный комплекс, посвящённый великому мыслителю и музыканту.",
    position: { lat: 45.60402, lng: 63.93259 },
    region: "Кызылорда",
    category: "Исторические достопримечательности",
    image: "images/korkyt-1.png",
    link: "detail-korkyt.html"
},
{
    title: "Центральная площадь",
    description: "Главная площадь города с архитектурными объектами.",
    position: { lat: 44.84276, lng: 65.50216 },
    region: "Кызылорда",
    category: "Современные достопримечательности",
    image: "images/central-square-1.png",
    link: "detail-square.html"
},
{
    title: "Памятник Батырхану Шукенову",
    description: "Памятник известному казахстанскому исполнителю.",
    position: { lat: 44.84490, lng: 65.49422 },
    region: "Кызылорда",
    category: "Исторические достопримечательности",
    image: "images/images/batyrkhan-1.png",
    link: "detail-batyrkhan.html"
},
{
    title: "ТРЦ Арай Сити Мол",
    description: "Популярный торгово-развлекательный центр.",
    position: { lat: 44.80615, lng: 65.51737 },
    region: "Кызылорда",
    category: "ТРЦ",
    image: "images/arai-city-1.png",
    link: "detail-aray.html"
},
{
    title: "Набережная Кызылорды",
    description: "Просторная прогулочная зона вдоль реки Сырдарья.",
    position: { lat: 44.78019, lng: 65.51211 },
    region: "Кызылорда",
    category: "Парки и природные зоны",
    image: "images/images/naberezh-1.png",
    link: "detail-naberezh.html"
},
{
    title: "Озеро Арал",
    description: "Исторически значимое солёное озеро.",
    position: { lat: 45.50654, lng: 58.55908 },
    region: "Кызылорда",
    category: "Природные достопримечательности",
    image: "images/aral-1.png",
    link: "detail-aral.html"
},
// === АКТАУ ===
{
    title: "Мечеть Бекет Ата",
    description: "Священное место паломничества, высеченное в скале.",
    position: { lat: 43.59480, lng: 54.07843 },
    region: "Актау",
    category: "Культурные и религиозные места",
    image: "images/beketata-1.jpg",
    link: "detail-beketata.html"
},
{
    title: "Скальная Тропа",
    description: "Уникальный природный маршрут по скалистым образованиям.",
    position: { lat: 43.63133, lng: 51.15846 },
    region: "Актау",
    category: "Природные достопримечательности",
    image: "images/skala-1.jpg",
    link: "detail-skala.html"
},
{
    title: "Мангистауский историко-краеведческий музей",
    description: "Экспозиции о культуре и истории Мангистау.",
    position: { lat: 43.64857, lng: 51.15471 },
    region: "Актау",
    category: "Культурные и религиозные места",
    image: "images/museum-aktau-1.png",
    link: "detail-museumaktau.html"
},
{
    title: "Урочище Босжира",
    description: "Захватывающий природный ландшафт в Мангистау.",
    position: { lat: 43.41513, lng: 54.07001 },
    region: "Актау",
    category: "Природные достопримечательности",
    image: "images/images/boszhira-1.jpg",
    link: "detail-boszhira.html"
},
{
    title: "Устюртский государственный заповедник",
    description: "Охраняемая природная территория с уникальной флорой и фауной.",
    position: { lat: 43.12714, lng: 54.62125 },
    region: "Актау",
    category: "Природные достопримечательности",
    image: "images/ustyurt-1.jpg",
    link: "detail-ustyurt.html"
},
{
    title: "Каспийское море",
    description: "Побережье моря с курортами и пляжами.",
    position: { lat: 43.64591, lng: 51.08527 },
    region: "Актау",
    category: "Природные достопримечательности",
    image: "images/caspian-1.jpg",
    link: "detail-caspian.html"
},
{
    title: "Гора Шеркала",
    description: "Легендарная гора в форме юрты.",
    position: { lat: 44.25674, lng: 52.00144 },
    region: "Актау",
    category: "Природные достопримечательности",
    image: "images/sherkala-1.jpg",
    link: "detail-sherkala.html"
},
{
    title: "Мангистауская областная мечеть",
    description: "Современная мечеть в центре Актау.",
    position: { lat: 43.66045, lng: 51.15696 },
    region: "Актау",
    category: "Культурные и религиозные места",
    image: "images/regionalmosque.jpg",
    link: "detail-regionalmosque.html"
},
{
    title: "Благовещенский храм",
    description: "Православная церковь в Актау.",
    position: { lat: 43.66147, lng: 51.17176 },
    region: "Актау",
    category: "Культурные и религиозные места",
    image: "images/church-1.png",
    link: "detail-church.html"
},
{
    title: "Монумент Каравелла",
    description: "Памятник исследователям и мореплавателям.",
    position: { lat: 43.63538, lng: 51.16611 },
    region: "Актау",
    category: "Исторические достопримечательности",
    image: "images/karavella-1.jpg",
    link: "detail-karavella.html"
},
{
    title: "Памятник «Самолет МИГ-21»",
    description: "Монумент, посвящённый военной авиации.",
    position: { lat: 43.64200, lng: 51.17600 },
    region: "Актау",
    category: "Исторические достопримечательности",
    image: "images/mig-1.png",
    link: "detail-mig.html"
},
{
    title: "Tetysblu Theme Park",
    description: "Современный аквапарк и парк развлечений.",
    position: { lat: 43.50424, lng: 51.29491 },
    region: "Актау",
    category: "Развлекательные и культурные места",
    image: "images/tetysblu-1.png",
    link: "detail-tetysblu.html"
},
{
    title: "Набережная Актау",
    description: "Просторная набережная с видом на Каспий.",
    position: { lat: 43.66021, lng: 51.13057 },
    region: "Актау",
    category: "Парки и природные зоны",
    image: "images/aktau-naberezhnaya-1",
    link: "detail-naberezhnaya.html"
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
  "Кокшетау": { lat: 53.0840, lng: 70.2750 },
  "Шымкент и Туркистан": { lat: 42.9500, lng: 69.0000 },
  "Семей": { lat: 50.4333, lng: 80.2667 },
  "Кызылорда": { lat: 44.8500, lng: 65.5167 },
  "Актау": { lat: 43.6525, lng: 51.1575 },
  "Тараз": { lat: 42.9000, lng: 71.3670 },

  "all": { lat: 47.9, lng: 67.4 } // Координаты для всей карты
};

document.getElementById("category-select").addEventListener("change", function() {
  const selectedCategory = this.value;
  const filteredLocations = locations.filter(location => {
      // Для фильтрации по категории, если выбрано "Все", показываем все
      return selectedCategory === "Все" || location.category.includes(selectedCategory);
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
