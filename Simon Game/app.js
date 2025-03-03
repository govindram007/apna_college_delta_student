let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let btns = ["red", "purple", "green", "yellow"];

let h2 = document.querySelector("h2");
let para = document.querySelector(".para")

let hide = document.querySelector(".hide");
let newScore = document.querySelector("ul");


document.addEventListener("keypress", function(){
    if(started == false){
        // console.log("game is started");
        started = true;
        levelUp();
        hide.classList.add("hide")
    } else {
        reset();
    }
});

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 100)
}


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 100)
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    //random btn choose
    let randIdx = Math.floor(Math.random() * 4);
    randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    gameFlash(randBtn);
};


function checkAns(idx){
    // let idx = level -1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
           setTimeout(levelUp, 500)
        }
    }else{
        h2.innerText = "Game Over! press any key to start";
        para.innerHTML = `<b>New High Score is: ${level}</b>`;
        para.style.color = "green"
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
        }, 50)
        hide.classList.remove("hide")
        let score = document.createElement("li")
        score.innerText = `Score is: ${level}`;
        newScore.append(score);
    };
}

function btnPress (){
    // console.log("button was pressed");
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length-1);
};

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = []
    userSeq = [];
    level = 0;
}