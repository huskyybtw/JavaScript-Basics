const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#status");
const Brestart = document.getElementById("reset");

const winCondition = [
    // rows
    [0,1,2],
    [3,4,7],
    [6,7,8],
    // columns
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diag
    [0,4,8],
    [2,4,6]
];

let options = new Array(9);
let currentplayer = "X";
let running = false;

startgame();

function startgame(){
    // GAME SETUP
    for(let i=0; i<options.length; i++){
        options[i] = "";
    }

    cells.forEach(cell => {
        cell.textContent = "";
    })

    running = true;


    // LISTINERS
    cells.forEach(cell => cell.addEventListener("click",cellClicked))
    Brestart.addEventListener("click",resetgame)
}
function cellClicked(){
    const cellindex = this.getAttribute("index");
    if (options[cellindex] != "" || !running){
        return;
    }

    updatecell(this,cellindex);
    changeplayer();
    checkwin();
}

function changeplayer(){
    if(currentplayer){
        statusText.textContent = "O TURN";
        currentplayer = false;
    }
    else {
        statusText.textContent = "X TURN";
        currentplayer = true;
    }
}

function updatecell(cell,index){
    if (currentplayer){
        options[index] = "X";
        cell.textContent = "X";
    }
    else{
        options[index] = "O";
        cell.textContent = "O"
    }
}

function checkwin(){

    for (let i= 0 ; i<winCondition.length ; i++){
        const condition = winCondition[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA !== ""){
            if (cellA == cellB && cellA == cellC && cellB == cellC){
                if(cellA === "X"){
                    resetgame();
                    statusText.textContent = "X WON";
                }
                else{
                    resetgame();
                    statusText.textContent = "O WON";
                }
            }
        }
    }


    let filled = 0;
    for (let i= 0 ; i< options.length ; i++){
        if (options[i] !== ""){
            filled++
        }
        if(filled === 9){
            startgame();
            statusText.textContent = "draw";
        }
    }
}


function resetgame(){
    statusText.textContent = "game restared";

    startgame();
}