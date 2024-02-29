console.log("Welcome to My first Game")
let music = new Audio("BG.mp3")
let audioTurn = new Audio("tapsound.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"

// function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}

// function to check for a win
const checkWin = () =>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,15,-10,90],
        [3, 4, 5, 15, -1, 90],
        [6, 7, 8, 15, 10, 90],
        [0, 3, 6, 4, 0, 0],
        [1,4,7,14,0,0],
        [2,5,8,25,0,0],
        [0,4,8,15,-1,45],
        [2,4,6,14,0,136],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            // document.querySelector(".line").style.width = "2vw";
            // document.querySelector(".line").style.transform = `tanslate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            //  function myFunction(x) {
            //      if (x.matches) { // If media query matches
            //          document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            //      } else {
            //          document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "400px"
            //      }
            //    }
              
            //    // Create a MediaQueryList object
            //    var x = window.matchMedia("(max-width: 800px)")
              
            //    // Call listener function at run time
            //    myFunction(x);
              
            // //     Attach listener function on state changes
            //     x.addEventListener("change", function() {
            //       myFunction(x);
            //     });
                  
        }
        
    })
}

// Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            music.play();
            audioTurn.play();
            checkWin();
            if(!isgameover){
             document.getElementsByClassName(info)[0].innerText = "Turn for" + turn;
            }
        }
    })
})

//add Onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Let's see" ;//+ turn
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})