// require('dotenv').config();
let searchInp = document.querySelector('.weather__search');
let city=document.querySelector('.weather__city');
let day=document.querySelector('.weather__day');
let humidity=document.querySelector('.weather__indicator--humidity>.value');
let wind=document.querySelector('.weather__indicator--wind>.value');
let pressure=document.querySelector('.weather__indicator--pressure>.value');
let image = document.querySelector('.weather__image');
let temperature = document.querySelector('.weather__temperature>.value');
// let d1=document.querySelector('weather__forecast__day1');
// let d2=document.querySelector('weather__forecast__day2');
// let d3=document.querySelector('weather__forecast__day3');
// let d4=document.querySelector('weather__forecast__day4');
// let d5=document.querySelector('weather__forecast__day5');
let APIKey='e3264a81f8389e1f902c3bedd830f6c3';
let WeatherBaseEndpoint='https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+ APIKey;
// let WeatherForecastBaseEndpoint="https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+APIKey+"units=metric";

let getWeatherByCityName = async(city) => {
    let endpoint = WeatherBaseEndpoint + '&q='+city;
    let response = await fetch(endpoint);
    let weather = await response.json();
    return weather;
}
// let getWeatherForecastByCityName = async(city) => {
//     let response = await fetch(WeatherForecastBaseEndpoint);
//     let weatherForecast= await response.json();
//     return weatherForecast;
// }
// let updateCurrentForecast=(data)=>{
//     d1.textContent=data.list[0].main.temp;
// }
// searchInp.addEventListener('keydown', async(e)=>{
//     if(e.keyCode === 13){
//        let weatherForecast = await getWeatherForecastByCityName(searchInp.value);
//        updateCurrentForecast(weatherForecast);
//     }
// })


searchInp.addEventListener('keydown', async(e)=>{
    if(e.keyCode === 13){
       let weather = await getWeatherByCityName(searchInp.value);
       updateCurrentWeather(weather);
    //    let weatherForecast = await getWeatherForecastByCityName(searchInp.value);
    //    updateCurrentForecast(weatherForecast);
    }
})

let updateCurrentWeather = (data) =>{
    console.log(data);
    city.textContent = data.name + ', '+data.sys.country;
    humidity.textContent =data.main.humidity;
    pressure.textContent=data.main.pressure;
    let windDirection;
    let deg = data.wind.deg;
    if(deg > 45 && deg <= 135){
        windDirection = 'East';
    } else if(deg > 135 && deg <=225){
        windDirection = 'South';
    } else if(deg > 225 && deg <=135){
        windDirection = 'West';
    }else{
        windDirection='North';
    }
    wind.textContent= windDirection+", "+data.wind.speed;
    temperature.textContent=data.main.temp > 0 ? '+' + Math.round(data.main.temp) : Math.round(data.min.temp);

}

// function GetInfo(){
//     const city=document.querySelector(".weather__city");
// }

// fetch("api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+APIKey+"units=metric")
// .then(response => response.json())
// .then(data =>{
//     for(i=0;i<5;i++){
//         document.getElementById("day"+(i+1)).innerText=data.list[i].main.temp;
//     }
// })

// const d=new Date();
// const weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// function Checkday(day){
//     if(day+d.getDay()>6){
//         return day+d.getDay()-7;
//     }else{
//         return day + d.getDay();
//     }
// }
// for(i=0;i<5;i++){
//     document.querySelector(".weather__forecast__day"+(i+1)).innerText=weekday[Checkday];
// }

