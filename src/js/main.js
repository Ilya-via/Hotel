//= other.js

//PRELOADER
$(window).on('load', function () {
    $preloader = $('.loaderArea'),
        $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});

var eventObj = {
    appended: ""
};
$(window).scroll(function () {
    var scroll = $(document).scrollTop();
    if (scroll > 1) {
        if (eventObj.appended == "") {
            eventObj.appended = false;
        }
        if (!eventObj.appended) {
            $('.btn-scrollUp').removeClass('none');
            setTimeout(function () {
                $('.btn-scrollUp').removeClass("opacityNone");
                eventObj.appended = true;
            }, 50);
        }

    } else if (eventObj.appended) {
        $('.btn-scrollUp').addClass("opacityNone");
        setTimeout(function () {
            $('.btn-scrollUp').addClass("none");
            eventObj.appended = false;
        }, 250);
    }
});

$(document).ready(function () {
    $('.btn-scrollUp').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 150)
    });
});

function selectionScrollButton() {
    $('.btn-scrollUp>a').css("backgroundImage", 'url("../img/scrollUpPush.png")');
    scaleTransform('.btn-scrollUp');
}
function noselectionScrollButton() {
    $('.btn-scrollUp>a').css("backgroundImage", 'url("../img/scrollUp.png")');
    unscaleTransform('.btn-scrollUp');
}

function selectionButtonHamburger() {
    scaleTransform('#icon-hamburger');
    $('#icon-hamburger').css("backgroundColor", 'rgba(46, 6, 39, 0.137)');
    $('#icon-hamburger').css("borderRadius", '8px');

}
function noselectionButtonHamburger() {
    unscaleTransform('#icon-hamburger');
    $('#icon-hamburger').css("backgroundColor", 'rgba(46, 6, 39, 0)');
    $('#icon-hamburger').css("borderRadius", '0');
}

function scaleTransform(value) {
    $(value).css("-o-transform", 'scale(1.2, 1.2)');
    $(value).css("-ms-transform", 'scale(1.2, 1.2)');
    $(value).css("-moz-transform", 'scale(1.2, 1.2)');
    $(value).css("-webkit-transform", 'scale(1.2, 1.2)');
    $(value).css("transform", 'scale(1.2, 1.2)');
    $(value).css("boxShadow", 'inset 0 0 10px 4px rgba(0, 0, 0, 0.822)');
}
function unscaleTransform(value) {
    $(value).css("-o-transform", 'scale(1.0, 1.0)');
    $(value).css("-ms-transform", 'scale(1.0, 1.0)');
    $(value).css("-moz-transform", 'scale(1.0, 1.0)');
    $(value).css("-webkit-transform", 'scale(1.0, 1.0)');
    $(value).css("transform", 'scale(1.0, 1.0)');
    $(value).css("boxShadow", '0 0 0 0 rgba(0, 0, 0, 0)');
}



// Фиксированный header.
// var header = document.getElementsByClassName('container-for-header');
// var sticky = header.offsetTop;
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         $('.container-for-header').addClass("sticky");
//     } else {
//         $('.container-for-header').removeClass("sticky");
//     }
// }



// function myFunction() {
//     var header = document.getElementsByClassName("navbar-inverse");
//     var sticky = header.offset;
//     if (window.pageYOffset >= sticky) {
//         header.classList.addClass("sticky");
//     } else {
//         header.classList.removeClass("sticky");
//     }
// }


// window.onscroll = function () { myFunction() };
// function myFunction() {
//     debugger
//     var header = document.getElementsByClassName('container-for-header');
//     var sticky = header.offsetTop;
//     if (window.pageYOffset >= sticky) {
//         $('.container-for-header').addClass("sticky");
//     } else {
//         $('.container-for-header').removeClass("sticky");
//     }
// }