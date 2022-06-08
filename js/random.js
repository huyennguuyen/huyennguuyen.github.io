


// let random = 0;
let picture = ["./images/dayton-1.jpg", "./images/dayton-2.jpg", "./images/dayton-3.jpg", "./images/dayton-4.jpg"]



const currentPic = () => {
    random = Math.floor(Math.random() * picture.length);
    let pic = document.querySelector(".me-post").src = picture[random];

    console.log("THIS IS RANDOM", random)
    console.log("THIS IS PIC", pic)

    // newNumber()
}

// const newNumber = () => {
//     random++;
//     if (random === picture.length) {
//         random = 0 ;
//     }
//     let pic = document.querySelector(".me-post").src = picture[random]

//     // setTimeout(newNumber, 2 * 1000);

//     console.log(pic)
// }

window.onload = currentPic;

