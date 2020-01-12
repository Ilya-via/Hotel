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

// Плавный якорь.
$(document).ready(function () {
    $(".anchor").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
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



// form
$(function () {
    $('#save').click(function () {
        var formValid = true;
        $('input').each(function () {
            var formGroup = $(this).parents('.form-group');
            var glyphicon = formGroup.find('.form-control-feedback');
            if (this.checkValidity()) {
                formGroup.addClass('has-success').removeClass('has-error');
                glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');
            } else {
                formGroup.addClass('has-error').removeClass('has-success');
                glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
                formValid = false;
            }
        });

        if (formValid && isDataChanged()) {
            $('#myModal').modal('hide');
            messageVisible();
            setTimeout(function () {
                messageUnvisible();
            }, 1500);

            someFunc();
            formData.turn++;
            sendTelegram();
        }
    });
});

function checkValueForm(a) {
    a.value = a.value
        .replace(/_/g, "-")
        .replace(/[^\w.-]|[A-Z]|[/^\d+$/]|^[.-]/g, "")
    a.value = a.value.replace(/[.-]$/, "")
}

function checkValueOnlyNumber(a) {
    a.value = a.value.replace(/\+/g, "")
    a.value = a.value.replace(/[^+\d]/g, "")
}



function messageVisible() {
    var elem = document.querySelector("#success-alert");
    var massiveClass = elem.classList;
    var existenceClass = massiveClass.contains("hidden");
    if (existenceClass == true) {
        massiveClass.remove("hidden");
    }
    setTimeout(function () {
        massiveClass.remove("success-alert-opacityNone");
    }, 50);
}

function messageUnvisible() {
    var elem = document.querySelector("#success-alert");
    var massiveClass = elem.classList;
    massiveClass.add("success-alert-opacityNone");
    elem.addEventListener("transitionend", addHiddenClass(), false);
}
function addHiddenClass() {
    setTimeout(function () {
        var elem = document.querySelector("#success-alert");
        var massiveClass = elem.classList;
        massiveClass.add("hidden");
    }, 1500);
}



// Проверка для даты заезда и выезда.
function checkNowDate() {
    var nowDate = {
        date: '',
        day: '',
        month: '',
        year: ''
    };
    nowDate.date = new Date();
    nowDate.day = nowDate.date.getDate();
    nowDate.month = nowDate.date.getMonth() + 1;
    // Без добавления "0" ограничение выбора даты не работает.
    if ((nowDate.date.getMonth() + 1) < 10) {
        nowDate.month = "0" + (nowDate.date.getMonth() + 1);
    }
    nowDate.year = nowDate.date.getFullYear();
    document.getElementById('inputDataOne').setAttribute('min', nowDate.year + "-" + nowDate.month + "-" + nowDate.day);
    document.getElementById('inputDataTwo').setAttribute('min', nowDate.year + "-" + nowDate.month + "-" + nowDate.day);
}
function setMinDateinputDataTwo() {
    document.getElementById('inputDataTwo').setAttribute('min', document.getElementById('inputDataOne').value);
}

// Проверка на одинаковые данные. Если данные одинаковые не делать отправку на сервер.
function isDataChanged() {
    if (!(formData.turn === 0)) {
        if (formData.Firstname == document.getElementById("inputFirstname").value && formData.Secondname == document.getElementById("inputSecondname").value && formData.DataOne == document.getElementById("inputDataOne").value && formData.DataTwo == document.getElementById("inputDataTwo").value && formData.Tel == document.getElementById("inputTel").value && formData.Email == document.getElementById("inputEmail").value && formData.Roomclass == document.getElementById("inputRoomclass").value && formData.Room == document.getElementById("inputRoom").value) {
            return false
        } else return true
    } else return true
}
var formData = {
    Firstname: '',
    Secondname: '',
    DataOne: '',
    DataTwo: '',
    Tel: '',
    Email: '',
    Roomclass: '',
    Room: '',
    commentForm: '',
    turn: 0
};

function someFunc() {
    formData.Firstname = document.getElementById("inputFirstname").value;
    formData.Secondname = document.getElementById("inputSecondname").value;
    formData.DataOne = document.getElementById("inputDataOne").value;
    formData.DataTwo = document.getElementById("inputDataTwo").value;
    formData.Tel = document.getElementById("inputTel").value;
    formData.Email = document.getElementById("inputEmail").value;
    formData.Roomclass = document.getElementById("inputRoomclass").value;
    formData.Room = document.getElementById("inputRoom").value;
    formData.commentForm = document.getElementById("commentForm").value;
}

function sendTelegram() {
    var firstname = 'First name:%20' + formData.Firstname,
        secondname = 'Second name:%20' + formData.Secondname,
        dataOne = 'Data One:%20' + formData.DataOne,
        dataTwo = 'Data Two:%20' + formData.DataTwo,
        tel = 'Tel:%20' + formData.Tel,
        email = 'Email:%20' + formData.Email,
        roomClass = 'Room Class:%20' + formData.Roomclass,
        room = 'Room:%20' + formData.Room,
        commentForm = 'Comment Form:%20' + formData.commentForm,
        space = '%0A',

        text = firstname + space + secondname + space + dataOne + space + dataTwo + space + tel + space + email + space + roomClass + space + room + space + commentForm,
        api_chat = 'https://api.telegram.org/bot956233939:AAFdyoux_dArRc0iQb_Nd1Mv6c8BOvZA2Ck/sendMessage?chat_id=832304539&text=',
        message = api_chat + text,
        xhr = new XMLHttpRequest();

    xhr.open('post', message, true);
    xhr.send(message);
    xhr.onreadystatechange = function () {
        if (this.readyState != 4) return;
        if (this.status != 200) {
            // обработать ошибку
            alert('ошибка: ' + (this.status ? this.statusText : 'запрос не удался'));
            return;
        }
        // получить результат из this.responseText или this.responseXML
    }
}