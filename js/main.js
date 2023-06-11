$('.gnb>li').hover(function () {
    $('header').css({"background-color":"#fff","border-bottom":"solid 1px #eaeaea"});
    $('.logo a').css('filter', 'inherit');
    $('.gnb').css("color","#1A1A1A");
    $('.member a').css("filter","inherit");
    $(this).find('.sub').show()
}, function () {
    $('header').css({"background-color":"","border-bottom":""});
    $('.logo a').css('filter', '');
    $('.gnb').css("color","");
    $('.member a').css("filter","");
    $('.gnb>li').find('.sub').hide()
});

const Header = document.querySelector('header');
document.addEventListener('scroll', function(e){
    e.preventDefault();
    let scroll = window.scrollY
    if(scroll > 50) {
        Header.classList.add('on');
        Header.style.background = "#fff";
        Header.style.borderBottom = '1px solid #eaeaea';
    } else {
        Header.classList.remove('on');
        Header.style.background = null;
        Header.style.borderBottom = null;
    }
});

