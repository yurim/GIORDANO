const pickWrap = new Swiper('.pick_wrap .content_box', {
    direction: "horizontal",
    slidesPerGroup : 1,
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    speed: 500, //스와이프 되는 속도
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: true
    // },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    lazy : {
        loadPrevNext : true
    },
});
const newWrap = new Swiper('.new_wrap .content_box', {
    direction: "horizontal",
    slidesPerGroup : 1,
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    loopAdditionalSlides : 1,
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
    },
    lazy : {
        loadPrevNext : true
    },
});