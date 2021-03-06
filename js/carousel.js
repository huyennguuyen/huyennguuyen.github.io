
const track = document.querySelector(".carousel-track");

const slides = Array.from(track.children);


const rightButton = document.querySelector(".arrow-right");

const leftButton = document.querySelector(".arrow-left");

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

    // slides.forEach((slide) => {
    //     // console.log("THIS IS CURRENT----", current)
    //     // console.log("THIS IS TARGET------", target)

    //     if (target === slide[0]) {
    //         leftButton.disabled = true
           
    //     } else if (target === slide[slides.length -1]) {
    //        rightButton.disabled = true
    //     } else {
    //         rightButton.disabled = false
    //         leftButton.disabled = false
    //     }
    // })

}

const hidingArrows = (slides, leftButton, rightButton, index) => {
    
    if (index === 0) {
        leftButton.classList.add("is-hidden");
        rightButton.classList.remove("is-hidden");
    } else if (index === slides.length-1) {
        leftButton.classList.remove("is-hidden");
        rightButton.classList.add("is-hidden");
    } else {
        leftButton.classList.remove("is-hidden");
        rightButton.classList.remove("is-hidden");
    }
    
}

leftButton.addEventListener("click", e => {
    const current = track.querySelector(".current-slide");
    const prev = current.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prev)

    moveSlide(track, current, prev);
    hidingArrows(slides, leftButton, rightButton, prevIndex);
    // console.log("hi")
    // const current = track.querySelector(".current-slide");
    // const next = current.nextElementSibling;

    // moveSlide(track, current, next)

})

rightButton.addEventListener("click", e => {
    const current = track.querySelector(".current-slide");
    const next = current.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === next);

    moveSlide(track, current, next);
    hidingArrows(slides, leftButton, rightButton, nextIndex);

})



// console.log(slides);