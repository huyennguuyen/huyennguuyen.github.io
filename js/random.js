




window.onload = () => {

    let picture = ["./images/me-bike.jpg", "./images/mj.jpg", "./images/me-boba.jpg", "./images/me-park.jpg", "./images/me-chicken.jpg", "./images/mj.jpg", "./images/me-comp.jpg"]
    random = Math.floor(Math.random() * picture.length);
    let pic = document.querySelector(".me-post").src = picture[random];
    console.log(pic)
}

// let random = 0;



// const currentPic = () => {
//     random = Math.floor(Math.random() * picture.length);
//     let pic = document.querySelector(".me-post").src = picture[random];

//     console.log("THIS IS RANDOM", random)
//     console.log("THIS IS PIC", pic)

//     // newNumber()
// }

// const newNumber = () => {
//     random++;
//     if (random === picture.length) {
//         random = 0 ;
//     }
//     let pic = document.querySelector(".me-post").src = picture[random]

//     // setTimeout(newNumber, 2 * 1000);

//     console.log(pic)
// }

// window.onload = currentPic;

