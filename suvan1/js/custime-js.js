jQuery(document).ready(function ($) {

    Delete_Cookie('formfilled');

    $(".price-click").click(function () {
        $('#price-modal').modal('show');
    });

    $(".i-am").click(function () {
        $('#interested').modal('show');
    });

    $(".interested").click(function () {
        $('#interested').modal('show');
    });

    // $(".disc-btn").click(function () {
    //     $('#disclaimer').modal('show');
    // });

    $('.gallery-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 25,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ["<img src='images/left.png'>", "<img src='images/right.png'>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            }
        }
    });

    $('[data-fancybox="map"]').fancybox({
        //slide effect- zoom-in-out
        transitionEffect: "slide",
        loop: true,

        buttons: [
            //'slideShow',
            //'share',
            'zoom',
            'fullScreen',
            'close'
            //'download'
        ],
        thumbs: {
            autoStart: false
        }
    });

    $('[data-fancybox="general"]').fancybox({
        //slide effect- zoom-in-out
        transitionEffect: "slide",
        loop: true,

        buttons: [
            //'slideShow',
            //'share',
            'zoom',
            'fullScreen',
            'close'
            //'download'
        ],
        thumbs: {
            autoStart: false
        }
    });

    $('[data-fancybox="interior"]').fancybox({
        //slide effect- zoom-in-out
        transitionEffect: "slide",
        loop: true,

        buttons: [
            //'slideShow',
            //'share',
            'zoom',
            'fullScreen',
            'close'
            //'download'
        ],
        thumbs: {
            autoStart: false
        }
    });

    $('[data-fancybox="floor"]').fancybox({
        //slide effect- zoom-in-out
        transitionEffect: "slide",
        loop: true,

        buttons: [
            //'slideShow',
            //'share',
            'zoom',
            'fullScreen',
            'close'
            //'download'
        ],
        thumbs: {
            autoStart: false
        }
    });


    //Menu Smooth Scroll
    $(".m-link").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;
            });
        } // End if
    });

});