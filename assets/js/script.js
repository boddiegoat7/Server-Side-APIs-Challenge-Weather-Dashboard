var inputCity = document.getElementById("inputCity");
var citySearched = document.getElementById("city-input");
let searchHistory = [];

var formSubmitHandler = (event) => {
  event.preventDefault();
  let citiesName = inputCity.value.trim();
  if (citiesName) {
    queryWeatherData(citiesName);
    citiesName.value = "";
  } else {
    alert("Enter a city name");
  }
  citySearched.reset();
};

