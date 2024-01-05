console.log("Welcome to Tic Tac Toe")

// let music = new Audio()
let audioTurn = new Audio("ting.mp3")
// console.log(turn)
// let gameOver = new Audio()

let next = "X";
let gameover = false;

// function to change the turn 
const changeTurn = () =>{
    return next === "X"?"0":"X"
}

// function to check for a win
const checkWin = () =>{
  let boxtexts = document.getElementsByClassName('boxtext') 
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  wins.forEach(e => {
    if((boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML) && (boxtexts[e[2]].innerHTML === boxtexts[e[1]].innerHTML) &&(boxtexts[e[0]].innerHTML !== "")){
       document.querySelector('.info').innerHTML = boxtexts[e[0]].innerHTML + " Won";
       gameover = true;
       document.querySelector(".imagebox").getElementsByTagName("img")[0].style.width = "200px";
    }
  })
}

// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(elemet =>{
    let boxtext = elemet.querySelector(".boxtext");
    elemet.addEventListener("click", ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = next;
            next = changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerHTML = "Turn for" + next;

            }
        }
    })
})

// reset
reset = document.querySelector("#rest");
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element =>{
        element.innerHTML = "";
    });
    next = "X";
    gameover = false
    document.getElementsByClassName("info")[0].innerHTML = "Turn for" + next;
    document.querySelector(".imagebox").getElementsByTagName("img")[0].style.width = "0px";
})