const mobileBtn = document.querySelector(".menu-icon-wrapper");
const headerRow = document.querySelector(".header-top__row");

mobileBtn.addEventListener("click", function () {
    headerRow.classList.toggle("header-top__row--mobile");
    document.querySelector(".menu-icon").classList.toggle("menu-icon-active");
    if (document.querySelector(".menu-icon").classList.contains("menu-icon-active")) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "scroll";
    }
});

/* Phone Mask */

mask("[data-tel-input]");

let phoneInputs = document.querySelectorAll("[data-tel-input]");

phoneInputs.forEach((input) => {
    input.addEventListener("input", function (event) {
        if (this.value == "+") this.value = "";
    });

    input.addEventListener("blur", function (event) {
        if (this.value == "+") this.value = "";
    });
});
