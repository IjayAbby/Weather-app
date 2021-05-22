// Get All Values
const inputTxt = document.querySelector('.inputTxt');
const button = document.querySelector('.btn');
const showData = document.querySelector('.showData');

// Get API Key By Login To OpenWeather.org
const API_Key = 'b24f12482ae022808ab6a8025ba5f5a4';

// Now Add Event Listener
button.addEventListener('click', () => {
  // Get Input Value
  const cityInput = inputTxt.value;
  // console.log(cityInput);

  // Now Fetch Through Get API
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_Key}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      // When Fill Input Field Then Clear Input Field
      inputTxt.value = ' ';

      // Now Show All Data Value
      showData.innerHTML = `
                                <ul>
                                    <li class="desc">${data.weather[0].description}</li>
                                    <li class="city">${data.name}</li>
                                    <li class="temp">${data.main.temp}°c</li>
                                </ul>
                                `;
    });
});
