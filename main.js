$(document).ready(function(){
    let cardText = $('.card-body__text');
    let readMore = $('.card-body-btn');
    let reviewsCarousel = $(".reviews__cards");
    let reviewsButton = $(".reviews__btn");

    readMore.click(function(e){
        e.preventDefault();
        let text = $(this).siblings(cardText);
        $(this).hide();
        text.css({'height': 'initial', 'overflow': 'initial', 'white-space': 'initial'});
    })

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

    $('.russian-brands').hide();
      $('.russian__wrap').hide();

      $('.show-rus').click(function(){
          $('.english-brands').toggle();
          $('.russian-brands').toggle();
          $('.russian__wrap').toggle();
          $('.english__wrap').toggle();
      });

      $('.show-eng').click(function(){
        $('.russian-brands').toggle();
        $('.english-brands').toggle();
        $('.russian__wrap').toggle();
        $('.english__wrap').toggle();
      });

    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        transitionDuration: 0,
        percentPosition: true
      });
      var filterFns = {};
      $('.filters-button-group').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
      });

        let copyLinkHeader = document.getElementById("copy__linkHeader");
        let tooltipHeader = document.getElementById("TooltipHeader");
        let copyTextHeader = document.getElementById("copy__inputHeader");
        
        copyLinkHeader.addEventListener('click', function (event) {
            event.preventDefault();
            copyTextHeader.select();
            document.execCommand("copy");
            tooltipHeader.innerHTML = "Скопированно: " + copyTextHeader.value;
        });
        copyLinkHeader.addEventListener('mouseout', function (event) {
            tooltipHeader.innerHTML = "Нажать для копирования";
        });

        if  ($(window).width() < 767) {
            $(".contact-page__footer").slideUp();

            $(".contact-body__btn").click(function(e){
                e.preventDefault();
                $(this).toggleClass("contact-body__btn-active");
                $(".contact-page__footer").slideToggle();
            })
        }
  });