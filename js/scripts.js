var link = document.querySelector(".feedback-btn");

var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("overlay-show");
    login.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {

        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});
