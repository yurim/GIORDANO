$('.gnb>li').hover(function (e) {
    e.preventDefault();
    $('header').css({"background-color":"#fff","border-bottom":"solid 1px #eaeaea"});
    $('.logo a').css('filter', 'inherit');
    $('.gnb').css("color","#1A1A1A");
    $('.member a').css("filter","inherit");
    $(this).find('.sub').show()
}, function (e) {
    e.preventDefault();
    scroll = $(window).scrollTop();
    ofTop = $('.pick_wrap').offset().top - 60;
    if (scroll >= ofTop) {
        $('.header').addClass('on');
        $('header').css({"background-color":"#fff","border-bottom":"solid 1px #eaeaea"});
        $('.logo a').css('filter', 'inherit');
        $('.gnb').css("color","#1A1A1A");
        $('.member a').css("filter","inherit");
    } else {
        $('header').css({"background-color":"","border-bottom":""});
        $('.logo a').css('filter', '');
        $('.gnb').css("color","");
        $('.member a').css("filter","");
    }
    $('.gnb>li').find('.sub').hide()
});
function menu() {
    scroll = $(window).scrollTop();

    ofTop = $('.pick_wrap').offset().top - 60;
    if (scroll >= ofTop) {
        $('.header').addClass('on');
        $('header').css({"background-color":"#fff","border-bottom":"solid 1px #eaeaea"});
        $('.logo a').css('filter', 'inherit');
        $('.gnb').css("color","#1A1A1A");
        $('.member a').css("filter","inherit");
    } else {
        $('header').css({"background-color":"","border-bottom":""});
        $('.logo a').css('filter', '');
        $('.gnb').css("color","");
        $('.member a').css("filter","");
    }
}

$(window).scroll(function () {
    menu();
});

window.onbeforeunload = function () { $('.loading').show(); }
$(window).load(function () {
    $('.loading').hide();
});
