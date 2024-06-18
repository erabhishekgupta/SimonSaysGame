let gameSeq=[];
let userSeq =[];
let colors = ["yellow" , "red" ,"orange" , "blue"];
let started = false;
let level =0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function (){
    if(started==false){
    console.log("game started");
    started=true;}
    levelUp();
});

function gameflash(btn){
  btn.classList.add("flash");
  setTimeout(function (){
    btn.classList.remove("flash") }, 350
  );
}

function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(function (){
    btn.classList.remove("userflash") }, 350
  );
}

function levelUp(){
  userSeq =[];
  level++;
  h2.innerText = `Level ${level}`;

//   //random btn choose
  let ranIdx = Math.floor(Math.random()*3);
  let ranColor = colors[ranIdx];
  let ranbtn = document.querySelector(`.${ranColor}`);
  // console.log(ranIdx);
  // console.log(ranColor);
  // console.log(ranbtn);
  gameSeq.push(ranColor);
  console.log(gameSeq);
  gameflash(ranbtn);
}

function checkAns(idx){
  // console.log("curr level : " + level);
  // let idx = level-1;
  if(gameSeq[idx]===userSeq[idx]){
    if(gameSeq.length==userSeq.length){
     setTimeout(levelUp ,1200);
    }
    // console.log("same value");
  }
  else{
    h2.innerHTML = `GAMEOVER! Your score was <b>${level}</b> <br>Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
    },150);
    reset();
  }
}

function btnPress(){
  let btn = this ;
  userflash(btn);
  // console.log(this);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);
  // console.log(userColor);
  checkAns(userSeq.length-1);
  
}
let altbtns = document.querySelectorAll(".btn");
for(btn of altbtns){
  btn.addEventListener("click" , btnPress);
}

function reset(){
  gameSeq=[];
  started = false;
  userSeq=[];
  level=0;
}