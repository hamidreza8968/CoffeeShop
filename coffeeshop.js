const responsiveMenuEl = document.querySelector(".responsiveMenu");
responsiveMenuEl.addEventListener("click", function () {
    document.querySelector(".responsiveMenuOpen").classList.remove("display-none");
});


const closeButtonEl = document.querySelector(".closeIcon");
closeButtonEl.addEventListener("click", function () {
    document.querySelector(".responsiveMenuOpen").classList.toggle("display-none");
});


// let menuItemsEl = document.querySelectorAll(".menuItem");
// menuItemsEl.forEach(function (menuItem) {
//     menuItem.addEventListener("mouseover" , function () {
//         menuItem.classList.add("active");
//     });
// });


// const menuItemsEl = document.querySelectorAll(".main-nav-link");
// menuItemsEl.forEach(function (item) {
//     item.addEventListener("click" , function () {
//         document.querySelector(".header").classList.remove("nav-open");
//     })
// });


