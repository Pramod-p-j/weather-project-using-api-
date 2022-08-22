const submitButton = document.querySelector('input[type="submit"]');
const input = document.querySelector('.text');
const nameValue = document.querySelector('.cityname');
const maxValue = document.querySelector('.max');
const minValue = document.querySelector('.min');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.speed');

function displayWeather(){

    function fetching(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=3f57d6d7e2864e67f4e1acd781da6291')
            .then(res => res.json())
            .then(data => {
                nameValue.textContent = data['name'] ;
                   
                maxValue.textContent = data['main']['temp_max'];
                minValue.textContent = data['main']['temp_min'];
                humidity.textContent = data['main']['humidity'];
                windSpeed.textContent = data['wind']['speed'];
                // console.log(nameValue , maxValue, minValue, humidity, windSpeed); 
            })
            
    
            .catch(err => alert("wrong city name"));
        }
        
        fetching();
}

    

submitButton.addEventListener('click', displayWeather);