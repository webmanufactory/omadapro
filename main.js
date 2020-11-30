$(document).ready(function(){
    let reviewsCarousel = $(".reviews__cards");
    let reviewsButton = $(".reviews__btn");
    reviewsCarousel.owlCarousel({
        loop: true,
        items: 3,
        margin: 20,
        navContainer: '.reviews-nav',
        autoPlay: true,
        autoplayTimeout: 1000,
        stopOnHover: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


    reviewsButton.click(function(){
        $(this).hide();
        if (reviewsCarousel.hasClass("owl-carousel")) {
            reviewsCarousel.owlCarousel({
                touchDrag: false,
                mouseDrag: false
            });
            reviewsCarousel.trigger('destroy.owl.carousel');
            reviewsCarousel.removeClass('owl-carousel owl-loaded');
            reviewsCarousel.find('.owl-stage-outer').children().unwrap();
            reviewsCarousel.removeData();
        }
        $('html, body').animate({ 
                  scrollTop: reviewsCarousel.offset().top - 100 
             }, 10);
             return false; 
    });
  });

