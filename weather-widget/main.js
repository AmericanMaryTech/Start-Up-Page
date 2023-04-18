$(document).ready(function(){
    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getWeather);
        }else{
            alert("Geolocation not supported by this browser");
        }
    }

    function getWeather(position){
        let zip = '98105';
        let API_KEY = '16fdf1a72c2b264daae4a0475ec3ffba';
        let baseURL = `https://api.openweathermap.org/data/2.5/weather?zip={zip},us&appid={API_KEY}`;

        $.get(baseURL,function(res){
            let data = res.current;
            let temp = Math.floor(data.temp - 273);
            let condition = data.weather[0].description;

            $('#temp-main').html(`${temp}°`);
            $('#condition').html(condition);
        })
        
    }

    getLocation();
})
