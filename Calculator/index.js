const numbers = document.querySelectorAll(".numbers")
const operations = document.querySelectorAll(".operations")
const display = document.getElementById("output")

let digit = 10
let output_number = false
let dot_track = false

let output1 = 0
let output2 = 0
let final = 0

let operation = "null"

for (let i=0 ; i<=9 ;i++){
    numbers[i].addEventListener("click",()=>{
        if(!output_number){
            if(!dot_track){
                output1 = (output1 * digit) + i
                display.textContent = output1
            }
            else{
                output1 = output1 + (i*digit)
                digit = digit *0.1
                display.textContent = output1
            }
        }
        else{
            if(!dot_track){
                output2 = (output2 * digit) + i
                display.textContent = output2
            }
            else{
                output2 = output2 + (i*digit)
                digit = digit *0.1
                display.textContent = output2
            }
        }
    })
}

const dot = document.getElementById("dot")
dot.addEventListener("click",()=>{
    digit = 0.1
    dot_track = true;
})

const equals = document.getElementById("equals")
equals.addEventListener("click",()=>{
    switch(operation){
        case "+":
            final = parseFloat(output1) + parseFloat(output2);
            break;
        case "-":
            final = parseFloat(output1) - parseFloat(output2);
            break;
        case "*":
            final = parseFloat(output1) * parseFloat(output2);
            break;
        case "/":
            final = parseFloat(output1) / parseFloat(output2);
            break;    
    }
    display.textContent = final
    dot_track = false
    output_number = false;
    digit = 10
    output1=final
    output2=0
    final=0
})

const clearb = document.getElementById("clear")
clearb.addEventListener("click",clear)

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

const back = document.getElementById("back")
back.addEventListener("click",()=>{
    switch(output_number){
        case false:
            if(output1 != 0){
                output1 = output1 - (output1 % 10)
                display.textContent = output1
            }
            break;
        case true:
            if(output2 != 0){
                output2 = output2 - (output2 % 10)
                display.textContent = output2
            }
            break;
    }
})


operations.forEach(self =>{
    self.addEventListener("click",()=>{
        dot_track = false;
        output_number = true;
        digit = 10

        operation=self.textContent
    })
})

function clear (){
    dot_track = false
    output_number = false
    digit = 10
    output1=0
    output2=0
    final=0
    display.textContent = 0
}

