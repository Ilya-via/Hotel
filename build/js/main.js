$(window).on("load",function(){$preloader=$(".loaderArea"),$loader=$preloader.find(".loader"),$loader.fadeOut(),$preloader.delay(500).fadeOut("slow")});var eventObj={appended:""};function selectionScrollButton(){scaleTransform(".btn-scrollUp")}function noselectionScrollButton(){unscaleTransform(".btn-scrollUp")}function selectionButtonHamburger(){scaleTransform("#icon-hamburger"),$("#icon-hamburger").css("backgroundColor","rgba(46, 6, 39, 0.137)"),$("#icon-hamburger").css("borderRadius","8px")}function noselectionButtonHamburger(){unscaleTransform("#icon-hamburger"),$("#icon-hamburger").css("backgroundColor","rgba(46, 6, 39, 0)"),$("#icon-hamburger").css("borderRadius","0")}function scaleTransform(e){$(e).css("-o-transform","scale(1.2, 1.2)"),$(e).css("-ms-transform","scale(1.2, 1.2)"),$(e).css("-moz-transform","scale(1.2, 1.2)"),$(e).css("-webkit-transform","scale(1.2, 1.2)"),$(e).css("transform","scale(1.2, 1.2)"),$(e).css("boxShadow","inset 0 0 10px 4px rgba(0, 0, 0, 0.822)")}function unscaleTransform(e){$(e).css("-o-transform","scale(1.0, 1.0)"),$(e).css("-ms-transform","scale(1.0, 1.0)"),$(e).css("-moz-transform","scale(1.0, 1.0)"),$(e).css("-webkit-transform","scale(1.0, 1.0)"),$(e).css("transform","scale(1.0, 1.0)"),$(e).css("boxShadow","0 0 0 0 rgba(0, 0, 0, 0)")}function messageVisible(){var e=document.querySelector("#success-alert").classList;1==e.contains("hidden")&&e.remove("hidden"),setTimeout(function(){e.remove("success-alert-opacityNone")},50)}function messageUnvisible(){var e=document.querySelector("#success-alert");e.classList.add("success-alert-opacityNone"),e.addEventListener("transitionend",addHiddenClass(),!1)}function addHiddenClass(){setTimeout(function(){document.querySelector("#success-alert").classList.add("hidden")},1500)}function checkNowDate(){var e={date:"",day:"",month:"",year:""};e.date=new Date,e.day=e.date.getDate(),e.month=e.date.getMonth()+1,e.date.getMonth()+1<10&&(e.month="0"+(e.date.getMonth()+1)),e.year=e.date.getFullYear(),document.getElementById("inputDataOne").setAttribute("min",e.year+"-"+e.month+"-"+e.day),document.getElementById("inputDataTwo").setAttribute("min",e.year+"-"+e.month+"-"+e.day)}function setMinDateinputDataTwo(){document.getElementById("inputDataTwo").setAttribute("min",document.getElementById("inputDataOne").value)}function isDataChanged(){return 0===formData.turn||(formData.Firstname!=document.getElementById("inputFirstname").value||formData.Secondname!=document.getElementById("inputSecondname").value||formData.DataOne!=document.getElementById("inputDataOne").value||formData.DataTwo!=document.getElementById("inputDataTwo").value||formData.Tel!=document.getElementById("inputTel").value||formData.Email!=document.getElementById("inputEmail").value||formData.Roomclass!=document.getElementById("inputRoomclass").value||formData.Room!=document.getElementById("inputRoom").value||formData.commentForm!=document.getElementById("commentForm").value)}$(window).scroll(function(){1<$(document).scrollTop()?(""==eventObj.appended&&(eventObj.appended=!1),eventObj.appended||($(".btn-scrollUp").removeClass("none"),setTimeout(function(){$(".btn-scrollUp").removeClass("opacityNone"),eventObj.appended=!0},50))):eventObj.appended&&($(".btn-scrollUp").addClass("opacityNone"),setTimeout(function(){$(".btn-scrollUp").addClass("none"),eventObj.appended=!1},250))}),$(document).ready(function(){$(".btn-scrollUp").click(function(){$("html, body").animate({scrollTop:0},150)})}),$(document).ready(function(){$(".anchor").click(function(){var e=$(this).attr("href"),t=$(e).offset().top;return $("html:not(:animated),body:not(:animated)").animate({scrollTop:t},800),!1})}),$(function(){$("#save").click(function(){var a=!0;$("input").each(function(){var e=$(this).parents(".form-group"),t=e.find(".form-control-feedback");this.checkValidity()?(e.addClass("has-success").removeClass("has-error"),t.addClass("glyphicon-ok").removeClass("glyphicon-remove")):(e.addClass("has-error").removeClass("has-success"),t.addClass("glyphicon-remove").removeClass("glyphicon-ok"),a=!1)}),a&&isDataChanged()&&($("#myModal").modal("hide"),messageVisible(),setTimeout(function(){messageUnvisible()},1500),someFunc(),formData.turn++,sendTelegram())})}),$(document).ready(function(){var e=document.getElementById("inputTel");new IMask(e,{mask:"+375(00)000-00-00",lazy:!1})});var formData={Firstname:"",Secondname:"",DataOne:"",DataTwo:"",Tel:"",Email:"",Roomclass:"",Room:"",commentForm:"",turn:0};function someFunc(){formData.Firstname=document.getElementById("inputFirstname").value,formData.Secondname=document.getElementById("inputSecondname").value,formData.DataOne=document.getElementById("inputDataOne").value,formData.DataTwo=document.getElementById("inputDataTwo").value,formData.Tel=document.getElementById("inputTel").value,formData.Email=document.getElementById("inputEmail").value,formData.Roomclass=document.getElementById("inputRoomclass").value,formData.Room=document.getElementById("inputRoom").value,formData.commentForm=document.getElementById("commentForm").value}function sendTelegram(){var e="%0A",t="https://api.telegram.org/bot956233939:AAFdyoux_dArRc0iQb_Nd1Mv6c8BOvZA2Ck/sendMessage?chat_id=832304539&text="+("First name:%20"+formData.Firstname+e+("Second name:%20"+formData.Secondname)+e+("Data One:%20"+formData.DataOne)+e+("Data Two:%20"+formData.DataTwo)+e+("Tel:%20%2b"+formData.Tel)+e+("Email:%20"+formData.Email)+e+("Room Class:%20"+formData.Roomclass)+e+("Room:%20"+formData.Room)+e+("Comment Form:%20"+formData.commentForm)),a=new XMLHttpRequest;a.open("post",t,!0),a.send(t),a.onreadystatechange=function(){4==this.readyState&&(200==this.status||alert("ошибка: "+(this.status?this.statusText:"запрос не удался")))}}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsIm9uIiwiJHByZWxvYWRlciIsIiRsb2FkZXIiLCJmaW5kIiwiZmFkZU91dCIsImRlbGF5IiwiZXZlbnRPYmoiLCJhcHBlbmRlZCIsInNlbGVjdGlvblNjcm9sbEJ1dHRvbiIsInNjYWxlVHJhbnNmb3JtIiwibm9zZWxlY3Rpb25TY3JvbGxCdXR0b24iLCJ1bnNjYWxlVHJhbnNmb3JtIiwic2VsZWN0aW9uQnV0dG9uSGFtYnVyZ2VyIiwiY3NzIiwibm9zZWxlY3Rpb25CdXR0b25IYW1idXJnZXIiLCJ2YWx1ZSIsIm1lc3NhZ2VWaXNpYmxlIiwibWFzc2l2ZUNsYXNzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJzZXRUaW1lb3V0IiwibWVzc2FnZVVudmlzaWJsZSIsImVsZW0iLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSGlkZGVuQ2xhc3MiLCJjaGVja05vd0RhdGUiLCJub3dEYXRlIiwiZGF0ZSIsImRheSIsIm1vbnRoIiwieWVhciIsIkRhdGUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwic2V0TWluRGF0ZWlucHV0RGF0YVR3byIsImlzRGF0YUNoYW5nZWQiLCJmb3JtRGF0YSIsInR1cm4iLCJGaXJzdG5hbWUiLCJTZWNvbmRuYW1lIiwiRGF0YU9uZSIsIkRhdGFUd28iLCJUZWwiLCJFbWFpbCIsIlJvb21jbGFzcyIsIlJvb20iLCJjb21tZW50Rm9ybSIsInNjcm9sbCIsInNjcm9sbFRvcCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJyZWFkeSIsImNsaWNrIiwiYW5pbWF0ZSIsImVsZW1lbnRDbGljayIsInRoaXMiLCJhdHRyIiwiZGVzdGluYXRpb24iLCJvZmZzZXQiLCJ0b3AiLCJmb3JtVmFsaWQiLCJlYWNoIiwiZm9ybUdyb3VwIiwicGFyZW50cyIsImdseXBoaWNvbiIsImNoZWNrVmFsaWRpdHkiLCJtb2RhbCIsInNvbWVGdW5jIiwic2VuZFRlbGVncmFtIiwiZWxlbWVudCIsIklNYXNrIiwibWFzayIsImxhenkiLCJzcGFjZSIsIm1lc3NhZ2UiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsImFsZXJ0Iiwic3RhdHVzVGV4dCJdLCJtYXBwaW5ncyI6IkFBRUFBLEVBQUVDLFFBQVFDLEdBQUcsT0FBUSxXQUNqQkMsV0FBYUgsRUFBRSxlQUNYSSxRQUFVRCxXQUFXRSxLQUFLLFdBQzlCRCxRQUFRRSxVQUNSSCxXQUFXSSxNQUFNLEtBQUtELFFBQVEsVUFHbEMsSUFBSUUsU0FBVyxDQUNYQyxTQUFVLElBNkNkLFNBQVNDLHdCQUNMQyxlQUFlLGlCQUVuQixTQUFTQywwQkFDTEMsaUJBQWlCLGlCQUdyQixTQUFTQywyQkFDTEgsZUFBZSxtQkFDZlgsRUFBRSxtQkFBbUJlLElBQUksa0JBQW1CLDBCQUM1Q2YsRUFBRSxtQkFBbUJlLElBQUksZUFBZ0IsT0FHN0MsU0FBU0MsNkJBQ0xILGlCQUFpQixtQkFDakJiLEVBQUUsbUJBQW1CZSxJQUFJLGtCQUFtQixzQkFDNUNmLEVBQUUsbUJBQW1CZSxJQUFJLGVBQWdCLEtBRzdDLFNBQVNKLGVBQWVNLEdBQ3BCakIsRUFBRWlCLEdBQU9GLElBQUksZUFBZ0IsbUJBQzdCZixFQUFFaUIsR0FBT0YsSUFBSSxnQkFBaUIsbUJBQzlCZixFQUFFaUIsR0FBT0YsSUFBSSxpQkFBa0IsbUJBQy9CZixFQUFFaUIsR0FBT0YsSUFBSSxvQkFBcUIsbUJBQ2xDZixFQUFFaUIsR0FBT0YsSUFBSSxZQUFhLG1CQUMxQmYsRUFBRWlCLEdBQU9GLElBQUksWUFBYSwyQ0FFOUIsU0FBU0YsaUJBQWlCSSxHQUN0QmpCLEVBQUVpQixHQUFPRixJQUFJLGVBQWdCLG1CQUM3QmYsRUFBRWlCLEdBQU9GLElBQUksZ0JBQWlC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LFlBQVl4QixNQUNuRDRCLFNBQVNPLE1BQVFoQyxTQUFTcUIsZUFBZSxjQUFjeEIsTUFDdkQ0QixTQUFTUSxVQUFZakMsU0FBU3FCLGVBQWUsa0JBQWtCeEIsTUFDL0Q0QixTQUFTUyxLQUFPbEMsU0FBU3FCLGVBQWUsYUFBYXhCLE1BQ3JENEIsU0FBU1UsWUFBY25DLFNBQVNxQixlQUFlLGVBQWV4QixNQUdsRSxTQUFTNEQsZUFDTCxJQVNJSyxFQUFRLE1BSVJDLEVBRFcsaUhBWkMsaUJBQW1CdEMsU0FBU0UsVUFXckJtQyxHQVZOLGtCQUFvQnJDLFNBQVNHLFlBVUZrQyxHQVQ5QixlQUFpQnJDLFNBQVNJLFNBU3NCaUMsR0FSaEQsZUFBaUJyQyxTQUFTSyxTQVF3Q2dDLEdBUHRFLGFBQWVyQyxTQUFTTSxLQU80RCtCLEdBTmxGLFlBQWNyQyxTQUFTTyxPQU0yRThCLEdBTDlGLGlCQUFtQnJDLFNBQVNRLFdBS3NGNkIsR0FKdkgsV0FBYXJDLFNBQVNTLE1BSWdINEIsR0FIL0gsbUJBQXFCckMsU0FBU1UsY0FNNUM2QixFQUFNLElBQUlDLGVBRWRELEVBQUlFLEtBQUssT0FBUUgsR0FBUyxHQUMxQkMsRUFBSUcsS0FBS0osR0FDVEMsRUFBSUksbUJBQXFCLFdBQ0UsR0FBbkJ4QixLQUFLeUIsYUFDVSxLQUFmekIsS0FBSzBCLFFBRUxDLE1BQU0sWUFBYzNCLEtBQUswQixPQUFTMUIsS0FBSzRCLFdBQWEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vL1BSRUxPQURFUlxyXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkcHJlbG9hZGVyID0gJCgnLmxvYWRlckFyZWEnKSxcclxuICAgICAgICAkbG9hZGVyID0gJHByZWxvYWRlci5maW5kKCcubG9hZGVyJyk7XHJcbiAgICAkbG9hZGVyLmZhZGVPdXQoKTtcclxuICAgICRwcmVsb2FkZXIuZGVsYXkoNTAwKS5mYWRlT3V0KCdzbG93Jyk7XHJcbn0pO1xyXG5cclxudmFyIGV2ZW50T2JqID0ge1xyXG4gICAgYXBwZW5kZWQ6IFwiXCJcclxufTtcclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2Nyb2xsID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XHJcbiAgICBpZiAoc2Nyb2xsID4gMSkge1xyXG4gICAgICAgIGlmIChldmVudE9iai5hcHBlbmRlZCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGV2ZW50T2JqLmFwcGVuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZXZlbnRPYmouYXBwZW5kZWQpIHtcclxuICAgICAgICAgICAgJCgnLmJ0bi1zY3JvbGxVcCcpLnJlbW92ZUNsYXNzKCdub25lJyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmJ0bi1zY3JvbGxVcCcpLnJlbW92ZUNsYXNzKFwib3BhY2l0eU5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICBldmVudE9iai5hcHBlbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIGlmIChldmVudE9iai5hcHBlbmRlZCkge1xyXG4gICAgICAgICQoJy5idG4tc2Nyb2xsVXAnKS5hZGRDbGFzcyhcIm9wYWNpdHlOb25lXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcuYnRuLXNjcm9sbFVwJykuYWRkQ2xhc3MoXCJub25lXCIpO1xyXG4gICAgICAgICAgICBldmVudE9iai5hcHBlbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDI1MCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLmJ0bi1zY3JvbGxVcCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgIH0sIDE1MClcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vINCf0LvQsNCy0L3Ri9C5INGP0LrQvtGA0YwuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIuYW5jaG9yXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbWVudENsaWNrID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKVxyXG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9ICQoZWxlbWVudENsaWNrKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgJChcImh0bWw6bm90KDphbmltYXRlZCksYm9keTpub3QoOmFuaW1hdGVkKVwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiBkZXN0aW5hdGlvblxyXG4gICAgICAgIH0sIDgwMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0aW9uU2Nyb2xsQnV0dG9uKCkge1xyXG4gICAgc2NhbGVUcmFuc2Zvcm0oJy5idG4tc2Nyb2xsVXAnKTtcclxufVxyXG5mdW5jdGlvbiBub3NlbGVjdGlvblNjcm9sbEJ1dHRvbigpIHtcclxuICAgIHVuc2NhbGVUcmFuc2Zvcm0oJy5idG4tc2Nyb2xsVXAnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0aW9uQnV0dG9uSGFtYnVyZ2VyKCkge1xyXG4gICAgc2NhbGVUcmFuc2Zvcm0oJyNpY29uLWhhbWJ1cmdlcicpO1xyXG4gICAgJCgnI2ljb24taGFtYnVyZ2VyJykuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIsICdyZ2JhKDQ2LCA2LCAzOSwgMC4xMzcpJyk7XHJcbiAgICAkKCcjaWNvbi1oYW1idXJnZXInKS5jc3MoXCJib3JkZXJSYWRpdXNcIiwgJzhweCcpO1xyXG5cclxufVxyXG5mdW5jdGlvbiBub3NlbGVjdGlvbkJ1dHRvbkhhbWJ1cmdlcigpIHtcclxuICAgIHVuc2NhbGVUcmFuc2Zvcm0oJyNpY29uLWhhbWJ1cmdlcicpO1xyXG4gICAgJCgnI2ljb24taGFtYnVyZ2VyJykuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIsICdyZ2JhKDQ2LCA2LCAzOSwgMCknKTtcclxuICAgICQoJyNpY29uLWhhbWJ1cmdlcicpLmNzcyhcImJvcmRlclJhZGl1c1wiLCAnMCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzY2FsZVRyYW5zZm9ybSh2YWx1ZSkge1xyXG4gICAgJCh2YWx1ZSkuY3NzKFwiLW8tdHJhbnNmb3JtXCIsICdzY2FsZSgxLjIsIDEuMiknKTtcclxuICAgICQodmFsdWUpLmNzcyhcIi1tcy10cmFuc2Zvcm1cIiwgJ3NjYWxlKDEuMiwgMS4yKScpO1xyXG4gICAgJCh2YWx1ZSkuY3NzKFwiLW1vei10cmFuc2Zvcm1cIiwgJ3NjYWxlKDEuMiwgMS4yKScpO1xyXG4gICAgJCh2YWx1ZSkuY3NzKFwiLXdlYmtpdC10cmFuc2Zvcm1cIiwgJ3NjYWxlKDEuMiwgMS4yKScpO1xyXG4gICAgJCh2YWx1ZSkuY3NzKFwidHJhbnNmb3JtXCIsICdzY2FsZSgxLjIsIDEuMiknKTtcclxuICAgICQodmFsdWUpLmNzcyhcImJveFNoYWRvd1wiLCAnaW5zZXQgMCAwIDEwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC44MjIpJyk7XHJcbn1cclxuZnVuY3Rpb24gdW5zY2FsZVRyYW5zZm9ybSh2YWx1ZSkge1xyXG4gICAgJCh2YWx1ZSkuY3NzKFwiLW8tdHJhbnNmb3JtXCIsICdzY2FsZSgxLjAsIDEuMCknKTtcclxuICAgICQodmFsdWUpLmNzcyhcIi1tcy10cmFuc2Zvcm1cIiwgJ3NjYWxlKDEuMCwgMS4wKScpO1xyXG4gICAgJCh2YWx1ZSkuY3NzKFwiLW1vei10cmFuc2Zvcm1cIiwgJ3NjYWxlKDEuMCwgMS4wKScpO1xyXG4gICAgJCh2YWx1ZSkuY3NzKFwiLXdlYmtpdC10cmFuc2Zvcm1cIiwgJ3NjYWxlKDEuMCwgMS4wKScpO1xyXG4gICAgJCh2YWx1ZSkuY3NzKFwidHJhbnNmb3JtXCIsICdzY2FsZSgxLjAsIDEuMCknKTtcclxuICAgICQodmFsdWUpLmNzcyhcImJveFNoYWRvd1wiLCAnMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApJyk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gZm9ybVxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNzYXZlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBmb3JtVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICQoJ2lucHV0JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBmb3JtR3JvdXAgPSAkKHRoaXMpLnBhcmVudHMoJy5mb3JtLWdyb3VwJyk7XHJcbiAgICAgICAgICAgIHZhciBnbHlwaGljb24gPSBmb3JtR3JvdXAuZmluZCgnLmZvcm0tY29udHJvbC1mZWVkYmFjaycpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1Hcm91cC5hZGRDbGFzcygnaGFzLXN1Y2Nlc3MnKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICBnbHlwaGljb24uYWRkQ2xhc3MoJ2dseXBoaWNvbi1vaycpLnJlbW92ZUNsYXNzKCdnbHlwaGljb24tcmVtb3ZlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtR3JvdXAuYWRkQ2xhc3MoJ2hhcy1lcnJvcicpLnJlbW92ZUNsYXNzKCdoYXMtc3VjY2VzcycpO1xyXG4gICAgICAgICAgICAgICAgZ2x5cGhpY29uLmFkZENsYXNzKCdnbHlwaGljb24tcmVtb3ZlJykucmVtb3ZlQ2xhc3MoJ2dseXBoaWNvbi1vaycpO1xyXG4gICAgICAgICAgICAgICAgZm9ybVZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGZvcm1WYWxpZCAmJiBpc0RhdGFDaGFuZ2VkKCkpIHtcclxuICAgICAgICAgICAgJCgnI215TW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICBtZXNzYWdlVmlzaWJsZSgpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VVbnZpc2libGUoKTtcclxuICAgICAgICAgICAgfSwgMTUwMCk7XHJcblxyXG4gICAgICAgICAgICBzb21lRnVuYygpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS50dXJuKys7XHJcbiAgICAgICAgICAgIHNlbmRUZWxlZ3JhbSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vIEZvcm0gbWFza1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFRlbCcpO1xyXG4gICAgdmFyIG1hc2tPcHRpb25zID0ge1xyXG4gICAgICAgIG1hc2s6ICcrMzc1KDAwKTAwMC0wMC0wMCcsXHJcbiAgICAgICAgbGF6eTogZmFsc2VcclxuICAgIH1cclxuICAgIHZhciBtYXNrID0gbmV3IElNYXNrKGVsZW1lbnQsIG1hc2tPcHRpb25zKTtcclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gbWVzc2FnZVZpc2libGUoKSB7XHJcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VjY2Vzcy1hbGVydFwiKTtcclxuICAgIHZhciBtYXNzaXZlQ2xhc3MgPSBlbGVtLmNsYXNzTGlzdDtcclxuICAgIHZhciBleGlzdGVuY2VDbGFzcyA9IG1hc3NpdmVDbGFzcy5jb250YWlucyhcImhpZGRlblwiKTtcclxuICAgIGlmIChleGlzdGVuY2VDbGFzcyA9PSB0cnVlKSB7XHJcbiAgICAgICAgbWFzc2l2ZUNsYXNzLnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1hc3NpdmVDbGFzcy5yZW1vdmUoXCJzdWNjZXNzLWFsZXJ0LW9wYWNpdHlOb25lXCIpO1xyXG4gICAgfSwgNTApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtZXNzYWdlVW52aXNpYmxlKCkge1xyXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Y2Nlc3MtYWxlcnRcIik7XHJcbiAgICB2YXIgbWFzc2l2ZUNsYXNzID0gZWxlbS5jbGFzc0xpc3Q7XHJcbiAgICBtYXNzaXZlQ2xhc3MuYWRkKFwic3VjY2Vzcy1hbGVydC1vcGFjaXR5Tm9uZVwiKTtcclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgYWRkSGlkZGVuQ2xhc3MoKSwgZmFsc2UpO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEhpZGRlbkNsYXNzKCkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Y2Nlc3MtYWxlcnRcIik7XHJcbiAgICAgICAgdmFyIG1hc3NpdmVDbGFzcyA9IGVsZW0uY2xhc3NMaXN0O1xyXG4gICAgICAgIG1hc3NpdmVDbGFzcy5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICB9LCAxNTAwKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyDQn9GA0L7QstC10YDQutCwINC00LvRjyDQtNCw0YLRiyDQt9Cw0LXQt9C00LAg0Lgg0LLRi9C10LfQtNCwLlxyXG5mdW5jdGlvbiBjaGVja05vd0RhdGUoKSB7XHJcbiAgICB2YXIgbm93RGF0ZSA9IHtcclxuICAgICAgICBkYXRlOiAnJyxcclxuICAgICAgICBkYXk6ICcnLFxyXG4gICAgICAgIG1vbnRoOiAnJyxcclxuICAgICAgICB5ZWFyOiAnJ1xyXG4gICAgfTtcclxuICAgIG5vd0RhdGUuZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBub3dEYXRlLmRheSA9IG5vd0RhdGUuZGF0ZS5nZXREYXRlKCk7XHJcbiAgICBub3dEYXRlLm1vbnRoID0gbm93RGF0ZS5kYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgLy8g0JHQtdC3INC00L7QsdCw0LLQu9C10L3QuNGPIFwiMFwiINC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0LLRi9Cx0L7RgNCwINC00LDRgtGLINC90LUg0YDQsNCx0L7RgtCw0LXRgi5cclxuICAgIGlmICgobm93RGF0ZS5kYXRlLmdldE1vbnRoKCkgKyAxKSA8IDEwKSB7XHJcbiAgICAgICAgbm93RGF0ZS5tb250aCA9IFwiMFwiICsgKG5vd0RhdGUuZGF0ZS5nZXRNb250aCgpICsgMSk7XHJcbiAgICB9XHJcbiAgICBub3dEYXRlLnllYXIgPSBub3dEYXRlLmRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dERhdGFPbmUnKS5zZXRBdHRyaWJ1dGUoJ21pbicsIG5vd0RhdGUueWVhciArIFwiLVwiICsgbm93RGF0ZS5tb250aCArIFwiLVwiICsgbm93RGF0ZS5kYXkpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0RGF0YVR3bycpLnNldEF0dHJpYnV0ZSgnbWluJywgbm93RGF0ZS55ZWFyICsgXCItXCIgKyBub3dEYXRlLm1vbnRoICsgXCItXCIgKyBub3dEYXRlLmRheSk7XHJcbn1cclxuZnVuY3Rpb24gc2V0TWluRGF0ZWlucHV0RGF0YVR3bygpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dERhdGFUd28nKS5zZXRBdHRyaWJ1dGUoJ21pbicsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dERhdGFPbmUnKS52YWx1ZSk7XHJcbn1cclxuXHJcbi8vINCf0YDQvtCy0LXRgNC60LAg0L3QsCDQvtC00LjQvdCw0LrQvtCy0YvQtSDQtNCw0L3QvdGL0LUuINCV0YHQu9C4INC00LDQvdC90YvQtSDQvtC00LjQvdCw0LrQvtCy0YvQtSDQvdC1INC00LXQu9Cw0YLRjCDQvtGC0L/RgNCw0LLQutGDINC90LAg0YHQtdGA0LLQtdGALlxyXG5mdW5jdGlvbiBpc0RhdGFDaGFuZ2VkKCkge1xyXG4gICAgaWYgKCEoZm9ybURhdGEudHVybiA9PT0gMCkpIHtcclxuICAgICAgICBpZiAoZm9ybURhdGEuRmlyc3RuYW1lID09IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRGaXJzdG5hbWVcIikudmFsdWUgJiYgZm9ybURhdGEuU2Vjb25kbmFtZSA9PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0U2Vjb25kbmFtZVwiKS52YWx1ZSAmJiBmb3JtRGF0YS5EYXRhT25lID09IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXREYXRhT25lXCIpLnZhbHVlICYmIGZvcm1EYXRhLkRhdGFUd28gPT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dERhdGFUd29cIikudmFsdWUgJiYgZm9ybURhdGEuVGVsID09IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRUZWxcIikudmFsdWUgJiYgZm9ybURhdGEuRW1haWwgPT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEVtYWlsXCIpLnZhbHVlICYmIGZvcm1EYXRhLlJvb21jbGFzcyA9PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0Um9vbWNsYXNzXCIpLnZhbHVlICYmIGZvcm1EYXRhLlJvb20gPT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFJvb21cIikudmFsdWUgJiYgZm9ybURhdGEuY29tbWVudEZvcm0gPT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21tZW50Rm9ybVwiKS52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIHRydWVcclxuICAgIH0gZWxzZSByZXR1cm4gdHJ1ZVxyXG59XHJcbnZhciBmb3JtRGF0YSA9IHtcclxuICAgIEZpcnN0bmFtZTogJycsXHJcbiAgICBTZWNvbmRuYW1lOiAnJyxcclxuICAgIERhdGFPbmU6ICcnLFxyXG4gICAgRGF0YVR3bzogJycsXHJcbiAgICBUZWw6ICcnLFxyXG4gICAgRW1haWw6ICcnLFxyXG4gICAgUm9vbWNsYXNzOiAnJyxcclxuICAgIFJvb206ICcnLFxyXG4gICAgY29tbWVudEZvcm06ICcnLFxyXG4gICAgdHVybjogMFxyXG59O1xyXG5cclxuZnVuY3Rpb24gc29tZUZ1bmMoKSB7XHJcbiAgICBmb3JtRGF0YS5GaXJzdG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0Rmlyc3RuYW1lXCIpLnZhbHVlO1xyXG4gICAgZm9ybURhdGEuU2Vjb25kbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRTZWNvbmRuYW1lXCIpLnZhbHVlO1xyXG4gICAgZm9ybURhdGEuRGF0YU9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXREYXRhT25lXCIpLnZhbHVlO1xyXG4gICAgZm9ybURhdGEuRGF0YVR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXREYXRhVHdvXCIpLnZhbHVlO1xyXG4gICAgZm9ybURhdGEuVGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFRlbFwiKS52YWx1ZTtcclxuICAgIGZvcm1EYXRhLkVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEVtYWlsXCIpLnZhbHVlO1xyXG4gICAgZm9ybURhdGEuUm9vbWNsYXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFJvb21jbGFzc1wiKS52YWx1ZTtcclxuICAgIGZvcm1EYXRhLlJvb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0Um9vbVwiKS52YWx1ZTtcclxuICAgIGZvcm1EYXRhLmNvbW1lbnRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21tZW50Rm9ybVwiKS52YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZFRlbGVncmFtKCkge1xyXG4gICAgdmFyIGZpcnN0bmFtZSA9ICdGaXJzdCBuYW1lOiUyMCcgKyBmb3JtRGF0YS5GaXJzdG5hbWUsXHJcbiAgICAgICAgc2Vjb25kbmFtZSA9ICdTZWNvbmQgbmFtZTolMjAnICsgZm9ybURhdGEuU2Vjb25kbmFtZSxcclxuICAgICAgICBkYXRhT25lID0gJ0RhdGEgT25lOiUyMCcgKyBmb3JtRGF0YS5EYXRhT25lLFxyXG4gICAgICAgIGRhdGFUd28gPSAnRGF0YSBUd286JTIwJyArIGZvcm1EYXRhLkRhdGFUd28sXHJcbiAgICAgICAgdGVsID0gJ1RlbDolMjAlMmInICsgZm9ybURhdGEuVGVsLFxyXG4gICAgICAgIGVtYWlsID0gJ0VtYWlsOiUyMCcgKyBmb3JtRGF0YS5FbWFpbCxcclxuICAgICAgICByb29tQ2xhc3MgPSAnUm9vbSBDbGFzczolMjAnICsgZm9ybURhdGEuUm9vbWNsYXNzLFxyXG4gICAgICAgIHJvb20gPSAnUm9vbTolMjAnICsgZm9ybURhdGEuUm9vbSxcclxuICAgICAgICBjb21tZW50Rm9ybSA9ICdDb21tZW50IEZvcm06JTIwJyArIGZvcm1EYXRhLmNvbW1lbnRGb3JtLFxyXG4gICAgICAgIHNwYWNlID0gJyUwQScsXHJcblxyXG4gICAgICAgIHRleHQgPSBmaXJzdG5hbWUgKyBzcGFjZSArIHNlY29uZG5hbWUgKyBzcGFjZSArIGRhdGFPbmUgKyBzcGFjZSArIGRhdGFUd28gKyBzcGFjZSArIHRlbCArIHNwYWNlICsgZW1haWwgKyBzcGFjZSArIHJvb21DbGFzcyArIHNwYWNlICsgcm9vbSArIHNwYWNlICsgY29tbWVudEZvcm0sXHJcbiAgICAgICAgYXBpX2NoYXQgPSAnaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDk1NjIzMzkzOTpBQUZkeW91eF9kQXJSYzBpUWJfTmQxTXY2YzhCT3ZaQTJDay9zZW5kTWVzc2FnZT9jaGF0X2lkPTgzMjMwNDUzOSZ0ZXh0PScsXHJcbiAgICAgICAgbWVzc2FnZSA9IGFwaV9jaGF0ICsgdGV4dCxcclxuICAgICAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICB4aHIub3BlbigncG9zdCcsIG1lc3NhZ2UsIHRydWUpO1xyXG4gICAgeGhyLnNlbmQobWVzc2FnZSk7XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgIT0gNCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyAhPSAyMDApIHtcclxuICAgICAgICAgICAgLy8g0L7QsdGA0LDQsdC+0YLQsNGC0Ywg0L7RiNC40LHQutGDXHJcbiAgICAgICAgICAgIGFsZXJ0KCfQvtGI0LjQsdC60LA6ICcgKyAodGhpcy5zdGF0dXMgPyB0aGlzLnN0YXR1c1RleHQgOiAn0LfQsNC/0YDQvtGBINC90LUg0YPQtNCw0LvRgdGPJykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vINC/0L7Qu9GD0YfQuNGC0Ywg0YDQtdC30YPQu9GM0YLQsNGCINC40LcgdGhpcy5yZXNwb25zZVRleHQg0LjQu9C4IHRoaXMucmVzcG9uc2VYTUxcclxuICAgIH1cclxufSJdfQ==
