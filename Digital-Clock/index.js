
function updateClock(){
    let now = new Date();
    let h = now.getHours().toString().padStart(2,0);
    let m = now.getMinutes().toString().padStart(2,0);
    let s = now.getSeconds().toString().padStart(2,0);

    let timestring = `${h}:${m}:${s}`
    document.getElementById("clock").textContent=timestring;
}

const loop = setInterval(updateClock,1000)