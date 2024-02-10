const swiper = new Swiper('.chessplayers__swiper', {
    loop: true,
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
        867: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1197: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    }
});


const swiper2 = new Swiper('.steps__swiper', {
    // Optional parameters
    loop: false,
    spaceBetween: 30,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.steps__swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.steps__swiper-button-next',
        prevEl: '.steps__swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        867: {
            slidesPerView: 2,
            spaceBetween: 20
        },
    }
});