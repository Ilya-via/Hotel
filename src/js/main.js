//= other.js
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

function selectionButton() {
    $('.btn-scrollUp').css("boxShadow", 'inset 0 0 10px 4px rgba(0, 0, 0, 0.822)');
    $('.btn-scrollUp>a').css("backgroundImage", 'url("../img/scrollUpPush.png")');
    scaleTransform();
}
function noselectionButton() {
    $('.btn-scrollUp').css("boxShadow", '0 0 0 0 rgba(0, 0, 0, 0)');
    $('.btn-scrollUp>a').css("backgroundImage", 'url("../img/scrollUp.png")');
    unscaleTransform();
}

function scaleTransform() {
    $('.btn-scrollUp').css("-o-transform", 'scale(1.2, 1.2)');
    $('.btn-scrollUp').css("-ms-transform", 'scale(1.2, 1.2)');
    $('.btn-scrollUp').css("-moz-transform", 'scale(1.2, 1.2)');
    $('.btn-scrollUp').css("-webkit-transform", 'scale(1.2, 1.2)');
    $('.btn-scrollUp').css("transform", 'scale(1.2, 1.2)');
}
function unscaleTransform() {
    $('.btn-scrollUp').css("-o-transform", 'scale(1.0, 1.0)');
    $('.btn-scrollUp').css("-ms-transform", 'scale(1.0, 1.0)');
    $('.btn-scrollUp').css("-moz-transform", 'scale(1.0, 1.0)');
    $('.btn-scrollUp').css("-webkit-transform", 'scale(1.0, 1.0)');
    $('.btn-scrollUp').css("transform", 'scale(1.0, 1.0)');
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


window.onscroll = function () { myFunction() };
function myFunction() {
debugger
    var header = document.getElementsByClassName('container-for-header');
    var sticky = header.offsetTop;
    if (window.pageYOffset >= sticky) {
        $('.container-for-header').addClass("sticky");
    } else {
        $('.container-for-header').removeClass("sticky");
    }
}