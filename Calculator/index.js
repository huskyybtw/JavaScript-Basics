const numbers = document.querySelectorAll(".numbers")
const operations = document.querySelectorAll(".operations")
const display = document.getElementById("output")

let digit = 1
let number_multiplayer = 10
let output_number = false

let output1 = 0
let output2 = 0
let final = 0

let operation = "null"

const dot = document.getElementById("dot")
dot.addEventListener("click",()=>{
    digit = 0.1
    number_multiplayer = 0.1
})

const equals = document.getElementById("equals")
equals.addEventListener("click",()=>{
    switch(operation){
        case "+":
            final = output1+output2
            break;
        case "-":
            final = output1-output2
            break;        
        case "*":
            final = output1*output2
            break;
        case "/":
            final = output1/output2
            break;
        case "%":
            final = output1 % output2
            break;          
    }
    console.log(operation,final)
    display.textContent = final
    output_number = false;
    digit = 1
    number_multiplayer = 10
    output1=final
    output2=0
    final=0
})

const clearb = document.getElementById("clear")
clearb.addEventListener("click",clear())

const plusminus = document.getElementById("plusminus")
plusminus.addEventListener("click",()=>{
    if(!output_number){
        output1=output1*-1
        display.textContent = output1
    }
    else{
        output2=output2*-1
        display.textContent = output2
    }
})

operations.forEach(self =>{
    self.addEventListener("click",()=>{
        output_number = true;
        digit = 1;
        number_multiplier = 10;

        operation=self.textContent
    })
})

operations.forEach(self =>{
    self.addEventListener("click",()=>{
        output_number = true;
        digit = 1;
        number_multiplier = 10;

        operation=self.textContent
    })
})

function clear (){
    output_number = false;
    digit = 1
    number_multiplayer = 10
    output1=0
    output2=0
    final=0
    display.textContent = 0
}

