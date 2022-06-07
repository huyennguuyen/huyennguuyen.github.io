
const track = document.querySelector(".carousel-track");

const slides = Array.from(track.children);


const rightButton = document.querySelector(".arrow-right");
console.log(rightButton)

const leftButton = document.querySelector(".arrow-left");
console.log(leftButton)

const slideWidth = slides[0].getBoundingClientRect().width;

// slides[0].style.left = 0;
// slides[1].style.left = slideWidth + "px";
// slides[2].style.left =

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
}

slides.forEach(setSlidePosition);

const moveSlide = (track, current, target) => {

    track.style.transform = "translateX(-" + target.style.left + ")";
    current.classList.remove("current-slide");
    target.classList.add("current-slide");

    slides.forEach((slide) => {
        // console.log("THIS IS CURRENT----", current)
        // console.log("THIS IS TARGET------", target)

        if (target === slide[0] || target === slide[slides.length-1]) {
           current.classList.add("is-hidden")
        } else {
           current.classList.remove("is-hidden")
        }
    })

}

leftButton.addEventListener("click", e => {
    console.log("hi")
    const current = track.querySelector(".current-slide");
    const prev = current.previousElementSibling;

    moveSlide(track, current, prev)
    // console.log("hi")
    // const current = track.querySelector(".current-slide");
    // const next = current.nextElementSibling;

    // moveSlide(track, current, next)

})

rightButton.addEventListener("click", e => {
    console.log("hi")
    const current = track.querySelector(".current-slide");
    const next = current.nextElementSibling;

    moveSlide(track, current, next)

})



// console.log(slides);