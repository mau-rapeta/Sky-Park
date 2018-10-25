
$(document).ready(function() {

// Scroll smooth 
$('.scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 800);
            return false;
        }
    }
});

// Mobile menu functionality
    var toggle = 1;
    $('#navi-toggle').click(function() {
        console.log("menu movil");
        if(toggle == 1) {
            $('.navigation__button').addClass('checked');
            $('.navMobile').css('left', '0');
            toggle = 0;
        }else {
            toggle = 1;
            $('.navigation__button').removeClass('checked');
            $('.navMobile').css('left', '-100%');
        }
    });

    $('.navMobile__link').click(function() {
        toggle = 1;
        $('.navigation__button').removeClass('checked');
        $('.navMobile').css('left', '-100%');
    });
});