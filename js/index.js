const swiper = new Swiper('.swiper', {
    loop: loop,
    slidesPerView: 3, // Отображаем по три слайда за раз
    spaceBetween: 30, // Расстояние между слайдами
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return current + ' / ' + total;
        }
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    // Адаптивность: изменения параметров в зависимости от размеров экрана
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    }
});
