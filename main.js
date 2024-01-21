const faBars = document.getElementsByClassName("fa-bars")[0];
const sideBar = document.getElementsByClassName("sidebar")[0];
const close = document.getElementsByClassName("fa-xmark")[0];
faBars.addEventListener('click', function (e) {
    sideBar.style.right = "0px";
})
close.addEventListener('click', function(e) {
    sideBar.style.right = "100%"
})


document.addEventListener("DOMContentLoaded", function () {
    const slidesContainer = document.querySelector(".third_cont_cards");
    const slides = document.querySelectorAll(".cont_carousel");
    const dots = document.querySelectorAll(".dot");
    let currentSlide = 0;

    function showSlide(index) {
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    function updateDots() {
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentSlide);
        });
    }

    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
        updateDots();
    }

    // Initial setup
    showSlide(currentSlide);
    updateDots();

    // Add event listeners for dots
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            goToSlide(i);
        });
    });
});


    

    const productContainers = document.querySelectorAll(".featured_txts");

productContainers.forEach((container) => {
    const stars = container.querySelectorAll(".fa-star");

    stars.forEach((star, index1) => {
        star.addEventListener('click', function () {
            stars.forEach((s, index2) => {
                index1 >= index2 ? s.classList.add("active_o1") : s.classList.remove("active_o1");
            });
        });
    });
});

   

  