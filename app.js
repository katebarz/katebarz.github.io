///////////////////HIGHLIGHT MENU ON SCROLL//////////////////
let sections = $('section'),
    nav = $('nav'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function() {
    let cur_pos = $(this).scrollTop();

    sections.each(function() {
        let top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight() - 50;

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            $(this).attr('id') > 1?$('nav').addClass('scrolled-nav'): $('nav').removeClass('scrolled-nav');
        }
    });

    function showText(x) {
        if (x.matches && pageYOffset > 700) { // If media query matches
            $('#text').hide();
             pageYOffset > 1350?$('#slide-btn').hide():false;
        } else {
            $('#text').show();
            $('#slide-btn').show();
        }
    }
    var x = window.matchMedia("(max-width: 991px)")
    showText(x) // Call listener function at run time
    x.addListener(showText)
});

///////////////////HIGHLIGHT MENU ON CLICK//////////////////
nav.find('a').on('click', function() {
    let $el = $(this),
        id = $el.attr('href');
    $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height
    }, 500);

    return false;
});
//////////////////MENU TOGGLE////////////////////
$('#toggle-btn').on('click', function() {
    $('nav ul').toggleClass('active');
    $('#toggle-btn').toggleClass('menu-toggle_active');
    $('#text').fadeToggle("1000");
    $('#slide-btn').fadeToggle("1000");
    //$('#text').toggleClass('text-toogle');
})
///////////////////TYPE WRITER/////////////////////
let i = 0;
let txt = 'Lorem ipsum dummy text blabla.';
let speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
///////////////////SLIDE BUTTON////////////////////
$("#slide-btn").on('click', function() {
    $('html,body').animate({
            scrollTop: $("#2").offset().top - 50
        },
        'slow');
});
/////////////////////////////////////////////