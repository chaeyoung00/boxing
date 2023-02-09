
$(function(){
    const gnblist=$('.gnb>ul>li');

    gnblist.on('mouseenter',function(){
        // console.log('a')
        $(this).find('.sub').stop().slideDown(300);
    })
    gnblist.on('mouseleave',function(){
        $(this).find('.sub').stop().slideUp(300);
    });
});

$(function(){
    setTimeout(function () {
$(".slide_banner").bxSlider({
auto: true,
speed: 700,
touchEnabled:false,
});
}, 20);
});

$(function(){
    $('#fullpage').fullpage({
    anchors:['first','second','third'],
    lockAnchors: true,
    navigation: true,
    navigationTooltips: ['1페이지','2페이지','3페이지'],
    showActiveTooltip: false,
    slidesNavigation: false,
    // sectionsColor:['#ffcccc','#9922cc','#66eecc','#33eeaa','#ffdd99','#ee99ee'],
    // slideSelector:'.slide',
    sectionSelector:'.section',
});
});
