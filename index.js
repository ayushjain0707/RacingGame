let blueCar = document.querySelector(".blueCar");
let redCar = document.querySelector(".redCar");
let sound = document.getElementById("sound");
let sound2 = document.getElementById("sound2");
let result = document.querySelector(".result");
let gameovers = document.querySelector(".gameover");
let container = document.querySelector(".container");
let score = 0;

blueCar.addEventListener('animationiteration', ()=>{
    let num = (Math.floor(Math.random() * 4)) * 130;
    blueCar.style.left = num + "px";
    score++;
});

window.addEventListener("keydown", (e)=>{
if(e.keyCode == "39"){
    let demo = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"));
    if(demo < 390){
        redCar.style.left = (demo + 130) + "px";
        sound.play();
    }
}
if(e.keyCode == "37"){
    let demo = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"));
    if(demo > 0){
        redCar.style.left = (demo - 130) + "px";
        sound.play();
    }
}
if(e.keyCode == "38"){
    let tops = parseInt(window.getComputedStyle(redCar).getPropertyValue("top"));
    console.log(tops);
    if(tops > 0){
        redCar.style.top = (tops - 150) + "px";
        sound.play();
    }
}
if(e.keyCode == "40"){
    let tops = parseInt(window.getComputedStyle(redCar).getPropertyValue("top"));
    console.log(tops);
    if(tops < 450){
        redCar.style.top = (tops + 150) + "px";
        sound.play();
    }
}
});
setInterval(function gameover(){
    let blueCarLeft = parseInt(getComputedStyle(blueCar).getPropertyValue("left"));
    let blueCarTop = parseInt(getComputedStyle(blueCar).getPropertyValue("top"));
    let redCarLeft = parseInt(getComputedStyle(redCar).getPropertyValue("left"));
    if((blueCarLeft == redCarLeft) && (blueCarTop > 364) && (blueCarTop < 554)){
        sound2.play();
        result.innerText = score;
        gameovers.style.display = "block";
        container.style.display = "none";
        score = 0;
    }
}, 10);

// let demoo = parseInt(getComputedStyle(container).getPropertyValue("animation-duration"));
// demoo.style.animationDuration = demoo - 5;
// console.log(demoo);
// function increase(){
//     count++;
//     let demoo = parseInt(getComputedStyle(container).getPropertyValue("animation-duration"));
//     let animationbluecar = parseInt(getComputedStyle(blueCar).getPropertyValue("animation-duration"));
//     container.style.animationDuration = demoo + count + "s";
//     blueCar.style.animationDuration = animationbluecar + count + "s";
// }
// function decrease(){
//     count++;
//     let demoo = parseInt(getComputedStyle(container).getPropertyValue("animation-duration"));
//     let animationbluecar = parseInt(getComputedStyle(blueCar).getPropertyValue("animation-duration"));
//     container.style.animationDuration = demoo - count + "s";
//     blueCar.style.animationDuration = animationbluecar - count + "s";
// }
let count = 0.5;
setInterval(()=>{
    let demoo = parseInt(getComputedStyle(container).getPropertyValue("animation-duration"));
    let animationbluecar = parseInt(getComputedStyle(blueCar).getPropertyValue("animation-duration"));
    container.style.animationDuration = demoo - count + "s";
    blueCar.style.animationDuration = animationbluecar - count + "s";
},10000);


