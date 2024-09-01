



$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.header-fixed').addClass("sticky");
    }
    else{
    $('.header-fixed').removeClass("sticky");
    }
});

// Всплывающее меню
document.addEventListener('DOMContentLoaded', function () {
    const villageIcon = document.querySelector('.dropdown-icon-villages');
    const serviceIcon = document.querySelector('.dropdown-icon-service');

    villageIcon.addEventListener('click', function (event) {
        event.preventDefault();
        const dropdownMenu = this.closest('.menu__list').querySelector('.menu__list-dropdown-villages');
        const isVisible = dropdownMenu.style.display === 'flex';
        document.querySelectorAll('.menu__list-dropdown-villages, .menu__list-dropdown-service').forEach(menu => {
            menu.style.display = 'none';
        });
        dropdownMenu.style.display = isVisible ? 'none' : 'flex';
    });

    serviceIcon.addEventListener('click', function (event) {
        event.preventDefault();
        const dropdownMenu = this.closest('.menu__list').querySelector('.menu__list-dropdown-service');
        const isVisible = dropdownMenu.style.display === 'flex';
        document.querySelectorAll('.menu__list-dropdown-villages, .menu__list-dropdown-service').forEach(menu => {
            menu.style.display = 'none';
        });
        dropdownMenu.style.display = isVisible ? 'none' : 'flex';
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.menu__list')) {
            document.querySelectorAll('.menu__list-dropdown-villages, .menu__list-dropdown-service').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });
});

//Всплывающее мобильное меню
document.addEventListener('DOMContentLoaded', function () {
    const villageIconMob = document.querySelector('.dropdown-icon-villages-mob');
    const serviceIconMob = document.querySelector('.dropdown-icon-service-mob');

    villageIconMob.addEventListener('click', function (event) {
        event.preventDefault();
        const dropdownMenu = this.closest('.menu-mobile__list-item').querySelector('.menu__list-dropdown-villages-mob');
        dropdownMenu.classList.toggle('hidden');
    });

    serviceIconMob.addEventListener('click', function (event) {
        event.preventDefault();
        const dropdownMenu = this.closest('.menu-mobile__list-item').querySelector('.menu__list-dropdown-service-mob');
        dropdownMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.menu-mobile__list-item')) {
            document.querySelectorAll('.menu__list-dropdown-villages-mob, .menu__list-dropdown-service-mob').forEach(dropdown => {
                dropdown.classList.add('hidden');
            });
        }
    });
});

// Окно избранное
document.querySelector('.social-like').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('popup-close').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});


// Окно мобильное меню Гамбургер
document.querySelector('.menu__btn').addEventListener('click', function () {
    document.getElementById('popup-menu').style.display = 'flex';
});

document.getElementById('popup-close-menu').addEventListener('click', function () {
    document.getElementById('popup-menu').style.display = 'none';
});

// Слайдер в шапке
const swiperTop = new Swiper('.top__swiper', {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
});

//Слайдер в шапке мобильный
const swiperTopMobile = new Swiper('.top-mobile__swiper', {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
});

// Слайдер Преимущества мобильный
const swiperTopMob = new Swiper('.top__swiper-mob', {
    loop: true,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
});

//Слайдер Поселки
var swiperVillages = new Swiper(".slider-villages", {
    spaceBetween: 5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//Слайдер Построенные коттеджи
var swiperBuiltCottages = new Swiper(".slider-built-cottages", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    touchRatio: 0,
    simulateTouch: false,
});

// Слайдер карточка в Построенные коттеджи
var swiperBuiltCottagesMini = new Swiper(".slider-built-cottage__mini", {
    spaceBetween: 5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//Слайдер Проекты домов
var swiperProjectsHomes = new Swiper(".slider-projects-home", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    touchRatio: 0,
    simulateTouch: false,
});

// Слайдер карточка в Проекты домов
var swiperProjectsHomesMini = new Swiper(".slider-projects-home__mini", {
    spaceBetween: 5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//Слайд Видео обзоры
var swiperReviews = new Swiper(".slider-reviews", {
    slidesPerView: 'auto',
    spaceBetween: 16,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: '.reviews-video .swiper-button-next.reviews-next',
        prevEl: '.reviews-video .swiper-button-prev.reviews-prev',
    },
});

// Слайд партнеры
const swiperBid = new Swiper('.bid__slider', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    
});

// Слайд отзывы
const swiperReviewsResidents = new Swiper(".slider-reviews-residents", {
    slidesPerView: 'auto',
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.reviews-residents .swiper-button-next.reviews-next',
        prevEl: '.reviews-residents .swiper-button-prev.reviews-prev',
    },

    breakpoints: {

        320:{
        
            slidesPerView:1.2,
            loop: true,
        },

        375:{
        
            slidesPerView:1.2,
            loop: true,
        },

       390:{
        
            slidesPerView:1.2,
            loop: true,
        },

        415:{
        
            slidesPerView:1.2,
            loop: true,
        },
        450:{
        
            slidesPerView:1.2,
            loop: true,
        },

        700:{
            slidesPerView: 2,
            loop: true,
       
        },

        768:{
            slidesPerView: 2,
            loop: true,
       
        },

        992:{
            slidesPerView: 2,
            loop: true,
       
        },

        1020:{
          slidesPerView: 2,
          loop: true,
     
        },

        1500:{
            slidesPerView: 3,
            loop: true,
       
          }
      },
    
});

//Карта
let center = [55.5671253801259, 37.73439638473503];
let zhkbukovayaalleya = [55.88025303025825, 38.292098999999986];
let zhkvoskresenskoe = [55.53414050447952, 37.449847999999996];
let kprodinki = [55.82502951488325, 38.10440949999989];

function init() {
    let map = new ymaps.Map('map-t', {
        center: center,
        zoom: 9,
        type: 'yandex#hybrid'
    });

    let balloonContentLayout = ymaps.templateLayoutFactory.createClass(
        document.getElementById('balloon-content').innerHTML, {
        build: function () {
            balloonContentLayout.superclass.build.call(this);
            new Swiper('.slider-villages', {
                spaceBetween: 5,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    });

    let placemarkOptions = {
        iconLayout: 'default#image',
        iconImageHref: 'images/icon-houses.svg',
        iconImageSize: [22, 22],
        iconImageOffset: [-10, -10],
        balloonContentLayout: balloonContentLayout,
        balloonPanelMaxMapArea: 0,
        balloonOffset: [100, 0]
    };

    let placemark1 = new ymaps.Placemark(zhkbukovayaalleya, {}, placemarkOptions);
    let placemark2 = new ymaps.Placemark(zhkvoskresenskoe, {}, placemarkOptions);
    let placemark3 = new ymaps.Placemark(kprodinki, {}, placemarkOptions);

    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
    map.controls.remove('typeSelector');

    map.geoObjects.add(placemark1);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);
}

ymaps.ready(init);

//Слайд Последние новости
const swiperLatestNews = new Swiper(".slider-latest-news", {
    slidesPerView: 'auto',
    slidesPerView: 3,
    
    spaceBetween: 16,
    loop: true,
    navigation: {
        nextEl: '.latest-news .swiper-button-next.reviews-next',
        prevEl: '.latest-news .swiper-button-prev.reviews-prev',
    },

    breakpoints: {

        320:{
        
            slidesPerView:1.2,
            loop: true,
        },

        375:{
        
            slidesPerView:1.2,
            loop: true,
        },

       390:{
        
            slidesPerView:1.2,
            loop: true,
        },

        415:{
        
            slidesPerView:1.2,
            loop: true,
        },
        450:{
        
            slidesPerView:1.2,
            loop: true,
        },

        700:{
            slidesPerView: 2,
            loop: true,
       
        },

        768:{
            slidesPerView: 2,
            loop: true,
       
        },

        992:{
            slidesPerView: 2,
            loop: true,
       
        },

        1020:{
          slidesPerView: 2,
          loop: true,
     
        },

        1500:{
            slidesPerView: 3,
            loop: true,
       
          }
      },
});


//Переход на секцию
/* document.querySelector('.header-down').addEventListener('click', function () {
    document.getElementById('villages').scrollIntoView({ behavior: 'smooth' });
}); */

function initializeScrollToSection() {
    document.addEventListener('DOMContentLoaded', function() {
        const scrollButton = document.querySelector('.header-down');
        const targetSection = document.getElementById('villages');

        // Проверка на наличие элементов перед добавлением обработчика
        if (scrollButton && targetSection) {
            scrollButton.addEventListener('click', function () {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        }
    });
}

// Вызов функции для инициализации
initializeScrollToSection();

/* Страница посёлка - Фотогалерея  */

function initializeGallery() {
    document.addEventListener('DOMContentLoaded', function() {
        const galleryCards = document.querySelectorAll('.gallery__content-card');

        galleryCards.forEach((card) => {
            const images = card.querySelectorAll('.gallery__card-image');
            const radioButtons = card.querySelectorAll('.gallery__content__custom-radio input');
            const prevBtn = card.querySelector('.gallery__prev-btn');
            const nextBtn = card.querySelector('.gallery__next-btn');

            let currentIndex = 0;

            function updateGallery(index) {
                images.forEach((img, imgIndex) => {
                    img.classList.toggle('active', imgIndex === index);
                });
                radioButtons.forEach((radio, radioIndex) => {
                    radio.checked = (radioIndex === index);
                });
                currentIndex = index;
            }

            function handleRadioChange(e) {
                const index = parseInt(e.target.dataset.index, 10);
                updateGallery(index);
            }

            function handlePrevClick() {
                const newIndex = (currentIndex - 1 + images.length) % images.length;
                updateGallery(newIndex);
            }

            function handleNextClick() {
                const newIndex = (currentIndex + 1) % images.length;
                updateGallery(newIndex);
            }

            radioButtons.forEach(radio => {
                radio.addEventListener('change', handleRadioChange);
            });

            if (prevBtn) {
                prevBtn.addEventListener('click', handlePrevClick);
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', handleNextClick);
            }

            // Инициализация галереи
            updateGallery(0);
        });
    });
}

// Вызов функции для инициализации галереи
initializeGallery();

/* Страница посёлка - смена фотографий в header */

function initializeImageSlider() {
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('.page__header-images__img');
        const progressBars = document.querySelectorAll('.progress-bar .progress');
        let currentIndex = 0;
        const slideInterval = 5000; // Время на каждое изображение в мс (5 секунд)
        let intervalId;

        // Показ следующего изображения
        function showNextImage() {
            // Убираем активный класс с текущего изображения и сбрасываем прогресс для всех баров
            images[currentIndex].classList.remove('active');
            resetProgressBars();

            // Переход к следующему изображению
            currentIndex = (currentIndex + 1) % images.length;

            // Показ следующего изображения и запуск прогресс-бара
            images[currentIndex].classList.add('active');
            updateProgressBar(currentIndex);
        }

        // Сброс прогресс-баров
        function resetProgressBars() {
            progressBars.forEach(bar => {
                bar.classList.remove('active');
                bar.style.width = '0'; // Сбросить прогресс
            });
        }

        // Обновление прогресс-бара для текущего изображения
        function updateProgressBar(index) {
            setTimeout(() => {
                progressBars[index].classList.add('active');
                progressBars[index].style.width = '100%'; // Прогресс до 100% за slideInterval
            }, 50); // Задержка для корректной анимации
        }

        // Запуск слайдера
        function startSlider() {
            updateProgressBar(currentIndex); // Запустить первый прогресс-бар
            intervalId = setInterval(showNextImage, slideInterval);
        }

        startSlider();
    });
}

// Вызов функции для инициализации слайдера
initializeImageSlider();


/* Страница посёлка - COTTAGES */

function initializeCottagesSwitcher() {
    document.addEventListener('DOMContentLoaded', () => {
        // Получаем ссылки на кнопки и блоки
        const button1 = document.getElementById('cottages-btn1');
        const button2 = document.getElementById('cottages-btn2');
        const block1 = document.getElementById('cattages-block1');
        const block2 = document.getElementById('cattages-block2');

        // Универсальная функция для переключения блоков
        function toggleBlocks(activeButton, inactiveButton, activeBlock, inactiveBlock) {
            activeBlock.classList.add('active');
            activeButton.classList.add('active');
            inactiveBlock.classList.remove('active');
            inactiveButton.classList.remove('active');
        }

        // Обработчики для кнопок
        if (button1 && block1 && button2 && block2) {
            button1.addEventListener('click', () => {
                toggleBlocks(button1, button2, block1, block2);
            });

            button2.addEventListener('click', () => {
                toggleBlocks(button2, button1, block2, block1);
            });
        }
    });
}

// Вызов функции для инициализации переключения блоков
initializeCottagesSwitcher();

document.querySelectorAll('.infrastructure__content-item__btn').forEach(button => {
    button.addEventListener('click', function() {
        const groupClass = button.getAttribute('data-group');
        const containers = document.querySelectorAll(`.infrastructure__content-icons__icon.${groupClass}`);
        
        containers.forEach(container => {
            const images = container.querySelectorAll('svg');
            
            // Toggle active class between first and second image
            if (images.length > 1) {
                if (images[0].classList.contains('active')) {
                    images[0].classList.remove('active');
                    images[1].classList.add('active');
                } else {
                    images[1].classList.remove('active');
                    images[0].classList.add('active');
                }
            }
        });
        
        // Remove active class from all buttons
        document.querySelectorAll('.infrastructure__content-item__btn').forEach(btn => btn.classList.remove('active'));
        
        // Add active class to the clicked button
        button.classList.add('active');
    });
});

/* Каталог домов */

/* Этапы строительства - desctop */

function initializeSlider() {
    document.addEventListener('DOMContentLoaded', function() {
        const sliderContainer = document.querySelector('.stages__slaider-container-desctop');

        if (!sliderContainer) return; // Проверка на наличие контейнера

        // Обработка события прокрутки колесом мыши
        function handleWheelScroll(e) {
            e.preventDefault();
            // Прокрутка контейнера по горизонтали
            sliderContainer.scrollLeft += e.deltaY !== 0 ? e.deltaY : e.deltaX;
        }

        // Переменные для хранения начальной позиции пальца и текущего смещения
        let startX;
        let scrollLeftStart;

        // Обработка начала касания
        function handleTouchStart(e) {
            startX = e.touches[0].pageX;
            scrollLeftStart = sliderContainer.scrollLeft;
        }

        // Обработка движения пальца
        function handleTouchMove(e) {
            e.preventDefault(); // Отключаем стандартное поведение, чтобы избежать вертикальной прокрутки
            const touchX = e.touches[0].pageX;
            const deltaX = touchX - startX;
            sliderContainer.scrollLeft = scrollLeftStart - deltaX;
        }

        // Добавление обработчиков событий
        sliderContainer.addEventListener('wheel', handleWheelScroll);
        sliderContainer.addEventListener('touchstart', handleTouchStart);
        sliderContainer.addEventListener('touchmove', handleTouchMove);
    });
}

// Вызов функции для инициализации слайдера
initializeSlider();

/* Вычисление отступа */

function initializeMarginSync() {
    document.addEventListener("DOMContentLoaded", function() {
        // Получаем элементы блоков
        const block1 = document.querySelector('.container');
        const block2 = document.querySelector('.stages__slide1');

        // Проверка на наличие блоков
        if (!block1 || !block2) return;

        // Функция для синхронизации margin-left у второго блока с добавлением 10px
        function syncMargins() {
            const block1MarginLeft = window.getComputedStyle(block1).marginLeft;
            const marginValue = parseInt(block1MarginLeft) + 10; // Добавляем 10px
            block2.style.marginLeft = `${marginValue}px`; // Применяем margin-left
        }

        // Первоначальная установка отступа
        syncMargins();

        // Отслеживаем изменения стилей с помощью MutationObserver
        const observer = new MutationObserver(syncMargins);

        // Настраиваем observer на изменение атрибутов стилей
        observer.observe(block1, {
            attributes: true, // Наблюдать за изменением атрибутов
            attributeFilter: ['style'], // Следить только за изменениями стилей
        });

        // Опционально: динамически отслеживать изменения через setInterval (на случай inline-стилей)
        const syncInterval = setInterval(syncMargins, 100); // Проверять каждые 100 мс

        // Очистка observer и setInterval при выгрузке страницы
        window.addEventListener('unload', () => {
            observer.disconnect();
            clearInterval(syncInterval);
        });
    });
}

// Вызов функции для синхронизации отступов
initializeMarginSync();

/* Этапы строительства - mobile */

document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.stages__slider-mobile');
    const slides = document.querySelectorAll('.stages__slide-mobile');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let startX = 0;
    let currentTranslateX = 0;
    let isSwiping = false;

    // Обновляем ширину слайдов в зависимости от экрана
    function updateSliderPosition() {
      sliderWrapper.style.transform = `translateX(-${currentIndex * 100}vw)`; // используем vw для адаптивности
    }

    function handleTouchStart(event) {
      startX = event.touches[0].clientX;
      isSwiping = true;
      currentTranslateX = -currentIndex * window.innerWidth;
      sliderWrapper.style.transition = 'none'; // отключаем плавность во время свайпа
    }

    function handleTouchMove(event) {
      if (!isSwiping) return;

      event.preventDefault();
      const touchX = event.touches[0].clientX;
      const deltaX = touchX - startX;

      // Перемещаем слайдер по оси X в зависимости от движения пальца
      const translateX = currentTranslateX + deltaX;
      sliderWrapper.style.transform = `translateX(${translateX}px)`;
    }

    function handleTouchEnd(event) {
      const endX = event.changedTouches[0].clientX;
      const deltaX = startX - endX;

      // Если свайп был более чем на 50px, то листаем
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0 && currentIndex < totalSlides - 1) {
          currentIndex++;
        } else if (deltaX < 0 && currentIndex > 0) {
          currentIndex--;
        }
      }

      // Возвращаем слайдер на границу слайда с плавностью
      sliderWrapper.style.transition = 'transform 0.3s ease-in-out'; // добавляем плавность после завершения свайпа
      updateSliderPosition();
      isSwiping = false;
    }

    // Добавляем обработчики событий для свайпа
    sliderWrapper.addEventListener('touchstart', handleTouchStart, { passive: false });
    sliderWrapper.addEventListener('touchmove', handleTouchMove, { passive: false });
    sliderWrapper.addEventListener('touchend', handleTouchEnd);

    // Обновляем позицию слайдера при изменении размера окна
    window.addEventListener('resize', updateSliderPosition);
});

/* Идеально для жизни и отдыха вдали от города */

document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.pros-bloсks');
    const slides = document.querySelectorAll('.pros-bloсks__block');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let startX = 0;
    let currentTranslateX = 0;
    let isSwiping = false;

    // Обновляем ширину слайдов в зависимости от экрана
    function updateSliderPosition() {
      sliderWrapper.style.transform = `translateX(-${currentIndex * 100}vw)`; // используем vw для адаптивности
    }

    function handleTouchStart(event) {
      startX = event.touches[0].clientX;
      isSwiping = true;
      currentTranslateX = -currentIndex * window.innerWidth;
      sliderWrapper.style.transition = 'none'; // отключаем плавность во время свайпа
    }

    function handleTouchMove(event) {
      if (!isSwiping) return;

      event.preventDefault();
      const touchX = event.touches[0].clientX;
      const deltaX = touchX - startX;

      // Перемещаем слайдер по оси X в зависимости от движения пальца
      const translateX = currentTranslateX + deltaX;
      sliderWrapper.style.transform = `translateX(${translateX}px)`;
    }

    function handleTouchEnd(event) {
      const endX = event.changedTouches[0].clientX;
      const deltaX = startX - endX;

      // Если свайп был более чем на 50px, то листаем
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0 && currentIndex < totalSlides - 1) {
          currentIndex++;
        } else if (deltaX < 0 && currentIndex > 0) {
          currentIndex--;
        }
      }

      // Возвращаем слайдер на границу слайда с плавностью
      sliderWrapper.style.transition = 'transform 0.3s ease-in-out'; // добавляем плавность после завершения свайпа
      updateSliderPosition();
      isSwiping = false;
    }

    // Добавляем обработчики событий для свайпа
    sliderWrapper.addEventListener('touchstart', handleTouchStart, { passive: false });
    sliderWrapper.addEventListener('touchmove', handleTouchMove, { passive: false });
    sliderWrapper.addEventListener('touchend', handleTouchEnd);

    // Обновляем позицию слайдера при изменении размера окна
    window.addEventListener('resize', updateSliderPosition);
});

/* Варианты приобретения */

document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.purchaseOptions__content');
    const slides = document.querySelectorAll('.purchaseOptions__card');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let startX = 0;
    let currentTranslateX = 0;
    let isSwiping = false;

    // Обновляем ширину слайдов в зависимости от экрана
    function updateSliderPosition() {
      sliderWrapper.style.transform = `translateX(-${currentIndex * 100}vw)`; // используем vw для адаптивности
    }

    function handleTouchStart(event) {
      startX = event.touches[0].clientX;
      isSwiping = true;
      currentTranslateX = -currentIndex * window.innerWidth;
      sliderWrapper.style.transition = 'none'; // отключаем плавность во время свайпа
    }

    function handleTouchMove(event) {
      if (!isSwiping) return;

      event.preventDefault();
      const touchX = event.touches[0].clientX;
      const deltaX = touchX - startX;

      // Перемещаем слайдер по оси X в зависимости от движения пальца
      const translateX = currentTranslateX + deltaX;
      sliderWrapper.style.transform = `translateX(${translateX}px)`;
    }

    function handleTouchEnd(event) {
      const endX = event.changedTouches[0].clientX;
      const deltaX = startX - endX;

      // Если свайп был более чем на 50px, то листаем
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0 && currentIndex < totalSlides - 1) {
          currentIndex++;
        } else if (deltaX < 0 && currentIndex > 0) {
          currentIndex--;
        }
      }

      // Возвращаем слайдер на границу слайда с плавностью
      sliderWrapper.style.transition = 'transform 0.3s ease-in-out'; // добавляем плавность после завершения свайпа
      updateSliderPosition();
      isSwiping = false;
    }

    // Добавляем обработчики событий для свайпа
    sliderWrapper.addEventListener('touchstart', handleTouchStart, { passive: false });
    sliderWrapper.addEventListener('touchmove', handleTouchMove, { passive: false });
    sliderWrapper.addEventListener('touchend', handleTouchEnd);

    // Обновляем позицию слайдера при изменении размера окна
    window.addEventListener('resize', updateSliderPosition);
});

/* Мы строим дома из высококачественных материалов */

document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.materials__cards');
    const slides = document.querySelectorAll('.materials__card');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let startX = 0;
    let currentTranslateX = 0;
    let isSwiping = false;

    // Обновляем ширину слайдов в зависимости от экрана
    function updateSliderPosition() {
      sliderWrapper.style.transform = `translateX(-${currentIndex * 100}vw)`; // используем vw для адаптивности
    }

    function handleTouchStart(event) {
      startX = event.touches[0].clientX;
      isSwiping = true;
      currentTranslateX = -currentIndex * window.innerWidth;
      sliderWrapper.style.transition = 'none'; // отключаем плавность во время свайпа
    }

    function handleTouchMove(event) {
      if (!isSwiping) return;

      event.preventDefault();
      const touchX = event.touches[0].clientX;
      const deltaX = touchX - startX;

      // Перемещаем слайдер по оси X в зависимости от движения пальца
      const translateX = currentTranslateX + deltaX;
      sliderWrapper.style.transform = `translateX(${translateX}px)`;
    }

    function handleTouchEnd(event) {
      const endX = event.changedTouches[0].clientX;
      const deltaX = startX - endX;

      // Если свайп был более чем на 50px, то листаем
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0 && currentIndex < totalSlides - 1) {
          currentIndex++;
        } else if (deltaX < 0 && currentIndex > 0) {
          currentIndex--;
        }
      }

      // Возвращаем слайдер на границу слайда с плавностью
      sliderWrapper.style.transition = 'transform 0.3s ease-in-out'; // добавляем плавность после завершения свайпа
      updateSliderPosition();
      isSwiping = false;
    }

    // Добавляем обработчики событий для свайпа
    sliderWrapper.addEventListener('touchstart', handleTouchStart, { passive: false });
    sliderWrapper.addEventListener('touchmove', handleTouchMove, { passive: false });
    sliderWrapper.addEventListener('touchend', handleTouchEnd);

    // Обновляем позицию слайдера при изменении размера окна
    window.addEventListener('resize', updateSliderPosition);
});



