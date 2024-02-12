const apikey = "f328268bfa06bc4013cdaa7555e20578"
// Form buttons
const submitButton = document.getElementById("submitCity")
const input = document.getElementById("cityForm")
// Temp info
const infoDIV = document.querySelector(".info")
const weatheremoji = document.getElementById("weatheremoji")
const temp = document.getElementById("temperature")
const cityName = document.getElementById("cityName")
const humidity = document.getElementById("humidity")
const windspeed = document.getElementById("windspeed")
// Card colors variable
const element = document.querySelector(".container")
const styles = getComputedStyle(element)
const startColor = styles.getPropertyValue('--start-color');
const endColor = styles.getPropertyValue('--end-color');

let ok = false;

submitButton.addEventListener("click",async ()=>{
        const city = input.value.trim();
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
        try{
        const response = await fetch(apiUrl)
        const data = await response.json()

            if (data.name === city){
                ok = true;
                showDiv(ok)
                updateInfo(data)
            }
            else{
                ok = false;
                showDiv(ok)
            }
        }catch (e){
            console.error("error",e)
        }
})

function showDiv(boolean){
    if(boolean){
        infoDIV.style.display = "flex";
    }
    else{
        infoDIV.style.display = "none"
    }
}

// Setup labels with proper data
function updateInfo(data){
    temperature = Math.floor(data.main.temp - 273.15)

    weatheremoji.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    temp.textContent = `${temperature}°C`
    cityName.textContent = data.name
    humidity.textContent = `${data.main.humidity}%`
    windspeed.textContent = `${data.wind.speed} m/s`

    changebackgroundCard(temperature)
}

//Changes background card color
function changebackgroundCard(temperature){
    if (temperature >= 25){
        element.style.setProperty('--start-color', 'rgb(201, 80, 24)');
        element.style.setProperty('--end-color', 'yellow');
    }
    if (temperature >= 10 && temperature < 24){
        element.style.setProperty('--start-color', 'cyan');
        element.style.setProperty('--end-color', 'lightsalmon');
    }
    if (temperature < 10){
        element.style.setProperty('--start-color', 'lightblue');
        element.style.setProperty('--end-color', 'grey');
    }
}