const responsiveMenuEl = document.querySelector(".responsiveMenu");
responsiveMenuEl.addEventListener("click", function () {
    document.querySelector(".responsiveMenuOpen").classList.remove("display-none");
});


const closeButtonEl = document.querySelector("body");
closeButtonEl.addEventListener("click", function (e) {
    if (e.target !== document.querySelector(".responsiveMenu")){
        document.querySelector(".responsiveMenuOpen").classList.add("display-none");
    }
});





let isTextToggled = false;
const moreLinkEl = document.querySelector(".ourStory .moreLink");
moreLinkEl.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(".ourStory .text").classList.toggle("hideMore");
    if (isTextToggled){
       moreLinkEl.textContent = "More";
        isTextToggled = false;
    }else {
        moreLinkEl.textContent = "Close";
        isTextToggled = true;
    }
});




//first carousel
let currentIndex = 0;
let slides = document.querySelectorAll('.recommendFlexItem');

function showSlide(index) {
    slides.forEach(function(slide) {
        slide.style.display = 'none';
    });

    slides[index].style.display = 'block';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

showSlide(currentIndex);




//second carousel
let currentIndexCustomer = 0;
let slidesCustomer = document.querySelectorAll('.customerFlexItem');

function showSlideCustomer(index) {
    slidesCustomer.forEach(function(slide) {
        slide.style.display = 'none';
    });

    slidesCustomer[index].style.display = 'block';
}

function nextSlideCustomer() {
    currentIndexCustomer = (currentIndexCustomer + 1) % slidesCustomer.length;
    showSlideCustomer(currentIndexCustomer);
}

function prevSlideCustomer() {
    currentIndexCustomer = (currentIndexCustomer - 1 + slidesCustomer.length) % slidesCustomer.length;
    showSlideCustomer(currentIndexCustomer);
}

// Show the initial slide
showSlideCustomer(currentIndexCustomer);



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


