let highScore = 0;
let gameSeq = [];
let userSeq = [];
let btnSeq = ["yellow", "green", "red", "purple"];
let start = false;
let level = 0;
let startBtn = document.querySelector(".start");
let allbtns = document.querySelectorAll(".btn");
let h2 = document.querySelector("h2");
const tap = new Audio("/storage/emulated/0/simon/mixkit-select-click-1109.wav");
const lose = new Audio("/storage/emulated/0/simon/falled-sound-effect-278635.mp3");
const correct = new Audio("/storage/emulated/0/simon/correct-356013.mp3");
startBtn.addEventListener("click", function(){
    if(start == false){
        start = true;
        
        levelup();
    }
});

for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function btnflash(btn){
    btn.classList.add("flash");
    tap.currentTime = 0;
    tap.play();
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 500);
}
function checkValue(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup, 500);
            setTimeout(function() {
            correct.currentTime = 0;
            correct.play();
            }, 70);
        }
    } else{
        h2.innerHTML = `Game Over! final score:<b>${level-1}</b>.<br> start again`;
        reset();
        lose.currentTime = 0;
        lose.play();
    } 
        
}
function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 3) ;
    let randClr = btnSeq[randIdx];
    let btn = document.querySelector(`.${randClr}`);
    gameSeq.push(randClr);
    btnflash(btn);
}
function btnpress(){
    let btn = this;
    let clr = btn.getAttribute("id");
    userSeq.push(clr);
    btnflash(btn);
    checkValue(userSeq.length-1);
}
    
function reset(){
    
    level = 0;
    gameSeq = [];
    userSeq = [];
    start = 0;
}    

