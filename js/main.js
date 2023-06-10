// header
// $(function(){
//     setGnb();
//     function setGnb(){
//         // 마우스가 들어갔을때, 탭키가 실행됐을 때 함수가 실행됨.
//         $('.innerHeader .gnb > li > a').on('mouseenter focus', function(){
//             $('.innerHeader').addClass('on');
//             $('.innerHeader .gnb > li > .inner').addClass('on');
//             $('header').css({'border':'none'});
//         });
//         // 마우스가 떠나갈 때 실행됨.
//         $('header').on('mouseleave', function(){
//             $('.innerHeader').removeClass('on');
//             $('.innerHeader .gnb > li > .inner').removeClass('on');
//             $('header').css({'border':'1px solid rgba(255,255,255,0.1)'});
//         });
//     }
// });
const gnb = document.querySelector('.gnb>li>a');
const gnbSub = document.querySelectorAll('.gnb > li > .gnb_cate');
const Header = document.querySelector('header');


document.addEventListener('scroll', function(){
    let scroll = window.scrollY
    if(scroll > 50) {
        Header.classList.add('on');
    } else {
        Header.classList.remove('on');
    }
})

gnb.addEventListener('mouseover', function(){
    gnbSub.classList.add('on');
    Header.style.background = '#fff';
});
        // 마우스가 떠나갈 때 실행됨.
gnb.addEventListener('mouseleave', function(){
    gnbSub.classList.remove('on');
    Header.style.background = 'none';
});