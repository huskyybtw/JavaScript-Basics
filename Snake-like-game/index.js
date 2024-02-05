const snake = document.getElementById("snake");
const button = document.getElementById("playbutton");;
const score_count = document.getElementById("score_count");
const border= document.getElementById("gamebox");

const food = document.querySelectorAll(".food")
const food_amount = 4

let snakeX = 150
let snakeY = 150
let snake_size = 1;
let score = 0;

button.addEventListener("click",(event) =>{
    snake.textContent = "S"
    score_count.textContent = 0;
    snake.focus();

    for (let i=0;i < food_amount ; i++){
        spawnfood(i);
    }

    document.addEventListener("keydown",(event) =>{
        switch(event.key){
            case "w":
                if (checkBorder(snakeX,snakeY-10)){
                    snakeY = snakeY-10
                    snake.style.transform += "translateY(-10px)"
                }
                break;
            case "s":
                if (checkBorder(snakeX,snakeY+10)){
                    snakeY = snakeY+10
                    snake.style.transform += "translateY(+10px)"
                }
                break;
            case "a":
                if (checkBorder(snakeX-10,snakeY)){
                    snakeX = snakeX-10
                    snake.style.transform += "translateX(-10px)"
                }
                break;
            case "d":
                if (checkBorder(snakeX+10,snakeY)){
                    snakeX = snakeX+10
                    snake.style.transform += "translateX(+10px)"
                }
                break;            
        }

        eatfood();
    });
});

function rotate(x,y){

}

function checkBorder(x,y){
    if (x < 150 || x > 1400){
        return false;
    }
    if ( y < 140 || y > 900){
        return false;
    }
    return true;
}

function eatfood(){
    for (let i=0; i< food_amount ;i++){
        let check = food[i]
        if(snake.getBoundingClientRect().left === check.getBoundingClientRect().left 
            && snake.getBoundingClientRect().top === check.getBoundingClientRect().top){
            
            score += 1
            score_count.textContent = score;

            snake_size++
            snake.textContent = snake.textContent + "S"
            spawnfood(i);
        }
    }
}

function spawnfood(index){
    foodX = getRandomInt(160,1400)
    foodY = getRandomInt(140,900)

    food[index].style.left=`${foodX}px`;
    food[index].style.top=`${foodY}px`;
}

function getRandomInt(min, max) {
    min = Math.ceil(min / 10);
    max = Math.floor(max / 10); 
    return Math.floor(Math.random() * (max - min) + min) * 10;
}    

