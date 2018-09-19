$(function() {
    printWidth();


    $('.open-popup-link').magnificPopup({
        type:'inline'
    });

    $('.img-link').magnificPopup({
        type  : 'image'
    });

    $('[data-mask]').each(function() {
        input = $(this);
        mask = input.attr('data-mask');
        input.inputmask({"mask": mask});
    })

    $('.toggle-menu').on('click', function () {
        $('.mobile-menu').slideToggle();
    });
    //$('[data-mask]').inputmask({"mask": $(this).attr('data-mask')});

    $('body').on('click', '[data-goto]', function(e) {
        e.preventDefault();
        var selector = $(this).attr('data-goto');
        $('html, body').animate({ scrollTop: $(selector).offset().top}, 1200);
    });

    $('[data-tab]').click(function(e){

        $('[data-tab]').removeClass('active');
        $(this).addClass('active');

        var data_tab = $(this).attr('data-tab');
        $('.xtab').removeClass('active');
        $('.xtab').css({"opacity": 0.1});
        setTimeout(function() {
            $('.xtab').css({"opacity": 1});
        }, 120);
        $(data_tab).addClass('active');

        if ($(e.target).hasClass('xtab-nav__open')) {
            var selector = $(this).attr('data-tab');
            $('html, body').animate({ scrollTop: $(selector).offset().top}, 1200);
        }

        return false;
    });

    $('[data-rows]').each(function() {
        var selector = $(this).attr('data-rows');
        console.log(selector);
        var count = parseInt($(this).attr('data-count'));
        var iter = 0;
        $(selector).each(function(){
            iter++;
            if (iter<(count+1)) {
                return;
            }
            $(this).wrapInner('<div class="hide" />')
            //$(this).addClass('hide');
        });
        if ($(selector).length < count){
            $(this).hide();
        }
    });

    $('[data-rows]').click(function(e) {
       e.preventDefault();
       var selector = $(this).attr('data-rows');
        $(selector+' .hide').slideDown(100, function(){
            var $set = $(this);
            $set.replaceWith($set.contents());
        });
        $(this).hide();
    });

    initGratefulSlider();

});

var slider_grateful = false;
initGratefulSlider  = function() {
    if (!slider_grateful) {
        $('.grateful-slider').slick({
            'autoplay': false,
            'arrows': true,
            'dots': false,
            'slidesToShow': 5,
            'slidesToScroll': 1,
            'adaptiveHeight': true,
            'responsive': [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        //arrows: false,
                        rows: 2,
                        slidesPerRow: 2
                    }
                }
            ]
        });
        slider_grateful = true;
    }
};


var doit;
$(window).resize(function(){
    clearTimeout(doit);
    doit = setTimeout(resizedw, 100);
});

function resizedw(){
    var width = $(window).width();
    printWidth();
    initGratefulSlider();
}


$(document).scroll(function(){
    //setFixedHeader();
});

printWidth = function() {
    var topline_width = parseInt($('.topline').width()) + 2;
    $('title').html($(window).width() + ' : ' + topline_width);
};