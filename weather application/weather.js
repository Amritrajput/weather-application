document.addEventListener('DOMContentLoaded',()=>{
    const city = document.getElementById('city-input')
    const getWeatherBtn =  document.getElementById('get-weather-btn')
    const weatherInfo =  document.getElementById('weather-info')
    const citynamedisplay = document.getElementById('city-name')
    const tempreatureDisplay = document.getElementById('tempreature')
    const discriptionDisplay= document.getElementById('discription')
    const errormsg= document.getElementById('error-msg')
    const API_key = "6b278ecadef780ff67c979218f680750"
    getWeatherBtn.addEventListener('click', async () =>{
       const cityName =  city.value.trim()
       if(!cityName) return;
        try {
           const weatherData =  await fetchweatherdata(cityName )
           displayweatherdata(weatherData)
        } catch (error) {
            showerror()
        }



    })
    async function fetchweatherdata(city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`;
        const response = await fetch (url)
        console.log(typeof response);
        console.log(response);
        if(!response.ok){
            throw new Error ("City Not Found")
        }
        const data = await response.json()
        return data
    }
    function displayweatherdata(weatherdata){
         console.log(weatherdata);
        const { name, main, weather } = weatherdata;
        citynamedisplay.textContent=name
        
        weatherInfo.classList.remove('hidden')
        errormsg.classList.add('hidden')
        tempreatureDisplay.textContent=`Tempreature: ${main.temp}°C`
        discriptionDisplay.textContent=`Weather: ${weather[0].description}`
    }
    function showerror(error){
        weatherInfo.classList.remove('hidden')
        errormsg.classList.add('hidden')
    }
})