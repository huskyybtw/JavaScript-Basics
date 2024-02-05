let number = 0;
let test_number = 0;

const label = document.getElementById("counter");
const test = document.getElementById("test");

const bplus = document.getElementById("plus");
const bminus = document.getElementById("minus");
const breset = document.getElementById("reset");
const bget = document.getElementById("get");

bget.onclick = function(){
    test_number = label.textContent;
    test.textContent = test_number;
    test_number = 0;
    breset.onclick();
}

bplus.onclick = function(){
    number++;
    label.textContent = number;
}

bminus.onclick = function (){
    number--;
    label.textContent = number;
}

breset.onclick = function(){
    number=0;
    label.textContent = number;
}