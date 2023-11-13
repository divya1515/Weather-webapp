const apikey="5b85577260be27b3895eada96f71f8d7";
const url="https://api.openweathermap.org/data/2.5/weather?&units=metric";
async function weather(city){
    try{
        const response=await fetch(url+`&appid=${apikey}`+`&q=${city}`);
        const data=await response.json();
        document.querySelector("h1").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector("h2").innerHTML=data.name;
        document.querySelector(".humid").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
        const a =document.getElementById("Img");
        if(data.weather[0].main=="Haze" || data.weather[0].main=="Clear")
        a.src="images/clear.png";
        if(data.weather[0].main=="Clouds")
        a.src="images/clouds.png";
        if(data.weather[0].main=="Drizzle")
        a.src="images/drizzle.png";
        if(data.weather[0].main=="Humidity")
        a.src="images/humidity.png";
        if(data.weather[0].main=="Mist")
        a.src="images/mist.png";
        if(data.weather[0].main=="Rain")
        a.src="images/rain.png";
        if(data.weather[0].main=="snow")
        a.src="images/snow.png";
    }
    catch(error){
       alert("Write valid city name");
       document.getElementById("cityname").value="";
    }
}

document.querySelector("i").addEventListener('click',function(){
    const city=document.getElementById("cityname").value;
    weather(city);
})
