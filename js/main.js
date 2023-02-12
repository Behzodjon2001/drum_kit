let letters = document.querySelectorAll(".button").length;

for (let i = 0; i < letters; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function() {
        let thisLetter = this.innerHTML;
        sound(thisLetter);
        // animation(thisLetter);
    });
}


document.addEventListener("keypress", function(event) {
    sound(event.key);
    // animation(event.key);
});

function sound(key) {
    switch (key) {
        case "w":
            let auoduoW = new Audio("../sound/crash.mp3")
            auoduoW.play();
            break;
        case "a":
            let auoduoA = new Audio("../sound/kick-bass.mp3")
            auoduoA.play();
            break;
        case "s":
            let auoduoS = new Audio("../sound/snare.mp3")
            auoduoS.play();
            break;
        case "d":
            let auoduoD = new Audio("../sound/tom-1.mp3")
            auoduoD.play();
            break;
        case "j":
            let auoduoJ = new Audio("../sound/tom-2.mp3")
            auoduoJ.play();
            break;
        case "k":
            let auoduoK = new Audio("../sound/tom-3.mp3")
            auoduoK.play();
            break;
        case "l":
            let auoduoL = new Audio("../sound/tom-4.mp3")
            auoduoL.play();
            break;
        default:
            console.log("Something wrong")
    }
}
// var numberOfButtons = document.querySelectorAll(".button").length;

// for (var j = 0; j < numberOfButtons; j++) {

//     document.querySelectorAll(".button")[j]
//         .addEventListener("click", function() {
//             var buttonStyle = this.innerHTML;
//             sound(buttonStyle);
//             animation(buttonStyle);
//         });
// }

// document.addEventListener("keypress", function(event) {
//     sound(event.key);
//     animation(event.key);
// });

// function sound(key) {
//     switch (key) {
//         case "w":
//             var sound1 = new Audio("../sound/crash.mp3");
//             sound1.play();
//             break;

//         case "a":
//             var sound2 = new Audio("../sound/kick-bass.mp3");
//             sound2.play();
//             break;

//         case "s":
//             var sound3 = new Audio('../sound/snare.mp3');
//             sound3.play();
//             break;

//         case "d":
//             var sound4 = new Audio('../sound/tom-1.mp3');
//             sound4.play();
//             break;

//         case "j":
//             var sound5 = new Audio('../sound/tom-2.mp3');
//             sound5.play();
//             break;

//         case "k":
//             var sound6 = new Audio('../sound/tom-3.mp3');
//             sound6.play();
//             break;

//         case "l":
//             var sound7 = new Audio('../sound/tom-4.mp3');
//             sound7.play();
//             break;

//         default:
//             console.log(key);
//     }
// }

// function animation(currentKey) {
//     var activeButton = document.querySelector("." + currentKey);

//     activeButton.classList.add("animation");

//     setTimeout(function() {
//         activeButton.classList.remove("animation");
//     }, 100);
// }