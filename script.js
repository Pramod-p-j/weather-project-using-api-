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
            // .then(data => console.log(data))
            .then(data => {
                nameValue.textContent = data['name'] ;
                   
                maxValue.textContent = `Max Temperature - ${data['main']['temp_max']}`;
                minValue.textContent = `Min Temperature - ${data['main']['temp_min']}`;
                humidity.textContent = `Humidity - ${data['main']['humidity']}`;
                windSpeed.textContent = `Wind Speed - ${data['wind']['speed']}`;
                // console.log(nameValue , maxValue, minValue, humidity, windSpeed); 
            })
            
    
            .catch(err => alert("wrong city name"));
        }
        
        fetching();
}

    

submitButton.addEventListener('click', displayWeather);