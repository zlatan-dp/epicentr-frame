document.addEventListener('DOMContentLoaded', function () {
    // Ініціалізація Swiper
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 2000, // Автоскролінг кожні 2 секунди
            disableOnInteraction: true, // Зупинити автоскролінг при взаємодії
        },
        speed: 800, // Швидкість переходу між слайдами
        on: {
            init: function () {
                // Додати класи при ініціалізації
                updateAdjacentBullets();
            },
            slideChange: function () {
                // Додати класи при зміні слайду
                updateAdjacentBullets();
            },
        },
    });

    // Вимикаємо автоскролінг одразу після ініціалізації
    swiper.autoplay.stop();

    // Налаштування Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                swiper.autoplay.start(); // Увімкнути автоскролінг, коли секція видима
            } else {
                swiper.autoplay.stop(); // Зупинити автоскролінг, коли секція невидима
            }
        });
    });

    // Спостереження за секцією, що містить слайдер
    const swiperSection = document.querySelector('.swiper-container');
    observer.observe(swiperSection);
});

// Функція для оновлення класів "prev-bullet" і "next-bullet"
function updateAdjacentBullets() {
    const bullets = document.querySelectorAll('.swiper-pagination-bullet');
    bullets.forEach(bullet => bullet.classList.remove('prev-bullet', 'next-bullet'));

    const activeBullet = document.querySelector('.swiper-pagination-bullet-active');
    if (activeBullet) {
        const prevBullet = activeBullet.previousElementSibling;
        const nextBullet = activeBullet.nextElementSibling;

        if (prevBullet) prevBullet.classList.add('prev-bullet');
        if (nextBullet) nextBullet.classList.add('next-bullet');
    }
}

// document.addEventListener('DOMContentLoaded', function () {
//     const swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//        },
//        autoplay: {
//         delay: 2000, // Автоскролінг кожні 2 секунди
//         disableOnInteraction: true, // Зупинити автоскролінг при взаємодії
//     },
//     speed: 800,
//        on: {
//         init: function () {
//             // Додати класи при ініціалізації
//             updateAdjacentBullets();
//         },
//         slideChange: function () {
//             // Додати класи при зміні слайду
//             updateAdjacentBullets();
//         },
//     },
//     });
//  });

//  // Функція для оновлення класів "prev-bullet" і "next-bullet"
// function updateAdjacentBullets() {
//     const bullets = document.querySelectorAll('.swiper-pagination-bullet');
//     bullets.forEach(bullet => bullet.classList.remove('prev-bullet', 'next-bullet'));

//     const activeBullet = document.querySelector('.swiper-pagination-bullet-active');
//     if (activeBullet) {
//         const prevBullet = activeBullet.previousElementSibling;
//         const nextBullet = activeBullet.nextElementSibling;

//         if (prevBullet) prevBullet.classList.add('prev-bullet');
//         if (nextBullet) nextBullet.classList.add('next-bullet');
//     }
// }

// // Вимикаємо автоскролінг при завантаженні
// swiper.autoplay.stop();

// // Налаштування Intersection Observer
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             swiper.autoplay.start(); // Увімкнути автоскролінг, коли секція видима
//         } else {
//             swiper.autoplay.stop(); // Зупинити автоскролінг, коли секція невидима
//         }
//     });
// });
 
//  // Спостереження за секцією, що містить слайдер
// const swiperSection = document.querySelector('.swiper-container');
// observer.observe(swiperSection);