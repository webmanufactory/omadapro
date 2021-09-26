$(document).ready(function () {

    let cardText = $('.card-body__text');
    let readMore = $('.card-body-btn');
    let reviewsCarousel = $(".reviews__cards");
    let reviewsButton = $(".reviews__btn");

    readMore.click(function (e) {
        e.preventDefault();
        let text = $(this).siblings(cardText);
        $(this).hide();
        text.css({ 'height': 'initial', 'overflow': 'initial', 'white-space': 'initial' });
    })

    reviewsCarousel.owlCarousel({
        loop: true,
        items: 3,
        margin: 20,
        navContainer: '.reviews-nav',
        autoPlay: true,
        autoplayTimeout: 1000,
        stopOnHover: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    reviewsButton.click(function () {
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

    $('.show-rus').click(function () {
        $('.english-brands').toggle();
        $('.russian-brands').toggle();
        $('.russian__wrap').toggle();
        $('.english__wrap').toggle();
    });

    $('.show-eng').click(function () {
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
    $('.filters-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({ filter: filterValue });
    });

    let copyLinkHeader = document.getElementById("copy__linkHeader");
    let tooltipHeader = document.getElementById("TooltipHeader");
    let copyTextHeader = document.getElementById("copy__inputHeader");

    // copyLinkHeader.addEventListener('click', function (event) {
    //     event.preventDefault();
    //     copyTextHeader.select();
    //     document.execCommand("copy");
    //     tooltipHeader.innerHTML = "Скопированно: " + copyTextHeader.value;
    // });
    // copyLinkHeader.addEventListener('mouseout', function (event) {
    //     tooltipHeader.innerHTML = "Нажать для копирования";
    // });

    if ($(window).width() < 767) {
        $(".contact-page__footer").slideUp();

        $(".contact-body__btn").click(function (e) {
            e.preventDefault();
            $(this).toggleClass("contact-body__btn-active");
            $(".contact-page__footer").slideToggle();
        })
    }

    let certificatesBtn = $('.certificates-body__btn');
    let certificatesGalleryOmada = $('.certificates-gallery__omada');
    let certificatesGalleryProduct = $('.certificates-gallery__product');
    certificatesGalleryProduct.hide();

    certificatesBtn.click(function () {
        certificatesBtn.removeClass('certificates-body__btn--active');
        $(this).addClass('certificates-body__btn--active');
        if ($(this).data('gallery') == 'omada') {
            certificatesGalleryProduct.hide();
            certificatesGalleryOmada.show();
        } else if ($(this).data('gallery') == 'product') {
            certificatesGalleryOmada.hide();
            certificatesGalleryProduct.show();
        }
    });

    let serviceBtn = $('.service-tab__btn');
    let serviceItemOne = $('.service-bottom__item-one');
    let serviceItemTwo = $('.service-bottom__item-two');
    serviceItemTwo.hide();

    serviceBtn.click(function () {
        serviceBtn.removeClass('service-tab__btn--active');
        $(this).addClass('service-tab__btn--active');
        if ($(this).data('service') == 'technomark') {
            serviceItemTwo.hide();
            serviceItemOne.show();
        } else if ($(this).data('service') == 'trumpf') {
            serviceItemOne.hide();
            serviceItemTwo.show();
        }
    });

    $('.tab-trigger').click(function () {
        var id = $(this).attr('data-tab'),
            content = $('.tab-content[data-tab="' + id + '"]');

        $('.tab-trigger.active').removeClass('active');
        $(this).addClass('active');

        $('.tab-content.active').removeClass('active');
        content.addClass('active');
    });

    $('.tab-trigger').click(function () {
        var id = $(this).attr('data-tab'),
            content = $('.tab-content[data-tab="' + id + '"]');

        $('.tab-trigger.active').removeClass('active');
        $(this).addClass('active');

        $('.tab-content.active').removeClass('active');
        content.addClass('active');
    });

    let blogBtnCategory = $('.blog-tab__btn-category');
    let blogBtnCalendar = $('.blog-tab__btn-calendar');
    let blogLinksLink = $('.blog-links__link');

    blogBtnCategory.click(function (e) {
        e.preventDefault();
        $('.blog-tab__btn-icon').toggleClass('active');
        $('.blog-top__category').toggleClass('active');
    });

    blogBtnCalendar.click(function (e) {
        e.preventDefault();
        $('.blog-tab__calendar').toggleClass('active');
    });

    blogLinksLink.click(function (e) {
        e.preventDefault();
        blogLinksLink.removeClass('active');
        $(this).addClass('active');
    });

    let cartRecomendItems = $('.cart-recomend__items');

    cartRecomendItems.owlCarousel({
        items: 5,
        margin: 15,
        nav: true,
        navigation: false,
        pagination: false,
        autoPlay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $(".cart-recomend__nav-prev").click(function () {
        cartRecomendItems.trigger("owl.prev");
        return false;
    });
    $(".cart-recomend__nav-next").click(function () {
        cartRecomendItems.trigger("owl.next");
        return false;
    });
    if (window.matchMedia('(max-width: 991px)').matches) {

        if (cartRecomendItems.hasClass("owl-carousel")) {
            cartRecomendItems.owlCarousel({
                touchDrag: false,
                mouseDrag: false
            });
            cartRecomendItems.data('owlCarousel').destroy();
            cartRecomendItems.removeClass('owl-carousel owl-loaded');
            cartRecomendItems.find('.owl-stage-outer').children().unwrap();
            cartRecomendItems.removeData();
        }
        $('.cart-recomend__nav').css('display', 'none');
    }

    var moreImagesSlider = $(".more-images-slider");
    if (moreImagesSlider) {
        $(".more-images-slider").owlCarousel({
            items: 4,
            autoHeight: false,
            pagination: false,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [1170, 3],
            itemsTablet: [968, 3],
            itemsTabletSmall: [768, 2],
            itemsMobile: [500, 2],
            paginationSpeed: 800,
            rewindSpeed: 1000,
            autoPlay: 10000,
            stopOnHover: true,
            center: true,
            loop: false,
            nav: true,
            navigation: false,
            afterInit: function () {
                $(".more-images").css("visibility", "visible");
            }
        });
    }
    $(".more-images__button-prev").click(function () {
        moreImagesSlider.trigger("owl.prev");
        return false;
    });
    $(".more-images__button-next").click(function () {
        moreImagesSlider.trigger("owl.next");
        return false;
    });

    $('.faq-item__body').slideUp();
    $('.faq-item__header').on('click', function () {
        $(this).siblings('.faq-item .faq-item__body').slideToggle();
        $(this).children('.faq-header__button').toggleClass('active');
    })

    let catalogueCards = $('.catalogue__cards');
    let cardSize = $('.catalogue__cards > .row > div');

    function changeType() {
        if (catalogueCards.hasClass('large')) {
            cardSize.removeClass();
            cardSize.addClass('col-xs-6 col-md-4');
        } else {
            cardSize.removeClass();
            cardSize.addClass('col-xs-12');
        }
    }
    $('.showtype a').on('click', function (e) {
        e.preventDefault();
        let filterType = $(this).attr('data-list');
        catalogueCards.removeClass();
        $('.showtype a').removeClass('active');
        $(this).addClass('active');
        catalogueCards.addClass('catalogue__cards');
        catalogueCards.addClass(filterType);
        changeType();
    })
    changeType();

    if (window.matchMedia('(max-width: 991px)').matches) {
        $('.filter-img').slideUp()
        $('.filter-show__btn').on('click', function () {
            $('.filter-img').slideToggle()
        })
    }
});