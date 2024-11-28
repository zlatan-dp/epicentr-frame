document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
     pagination: {
        el: '.swiper-pagination',
        clickable: true,
       },
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
 
 