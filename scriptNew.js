var searchbutton = $("#searchbar")
  .val()
  .trim();
var key = "bf3bbf0ea22e7e35ceaa37777ebf0b82";

//call local storage here to retrieve data

// **1** Function to Handle Each row
function makeRow(city) {
  var r = $("<button>");
  r.addClass("searchCity");
  r.text(city);
  $("#citiesDiv").append(r);
}

function weatherResults(searchValue) {
  var proxy = "https://chriscastle.com/proxy/index.php?:proxy:";
  var searchURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    searchValue +
    "&appid=bf3bbf0ea22e7e35ceaa37777ebf0b82&units=imperial";
  console.log(searchURL);
  $.ajax({
    url: proxy + searchURL,
    dataType: "json",
    type: "GET"
  }).then(function(response) {
    console.log(response);
    var time = moment().format("L");
    var name = response.name;
    var temp = response.main.temp;
    var hum = response.main.humidity;
    var windSpeed = response.wind.speed;
    var icon = response.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    $("#cityName").empty();
    $("#temperature").empty();
    $("#humidity").empty();
    $("#windSpeed").empty();
    $("#cityName").append(name + " " + time + "<img src='" + iconUrl + "'>");
    $("#temperature").append("Temperature : " + temp + " " + "F");
    $("#humidity").append("Humidity : " + hum + "%");
    $("#windSpeed").append("Wind Speed : " + windSpeed + " " + "MPH");
  });
  var proxy = "https://chriscastle.com/proxy/index.php?:proxy:";
  var searchURL1 =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    searchValue +
    "&appid=bf3bbf0ea22e7e35ceaa37777ebf0b82&units=imperial";
  console.log(searchURL1);
  $.ajax({
    url: proxy + searchURL1,
    dataType: "json",
    type: "GET"
  })
    .then(function(response1) {
      console.log(response1);
      var date1 = response1.list[1].dt_txt;
      conDate1 = moment(date1).format("L");
      var icon1 = response1.list[1].weather[0].icon;
      var iconUrl1 = "http://openweathermap.org/img/w/" + icon1 + ".png";
      var temp1 = response1.list[1].main.temp;
      var hum1 = response1.list[1].main.humidity;
      var date2 = response1.list[8].dt_txt;
      conDate2 = moment(date2).format("L");
      var icon2 = response1.list[8].weather[0].icon;
      var iconUrl2 = "http://openweathermap.org/img/w/" + icon2 + ".png";
      var temp2 = response1.list[8].main.temp;
      var hum2 = response1.list[8].main.humidity;
      var date3 = response1.list[15].dt_txt;
      conDate3 = moment(date3).format("L");
      var icon3 = response1.list[15].weather[0].icon;
      var iconUrl3 = "http://openweathermap.org/img/w/" + icon3 + ".png";
      var temp3 = response1.list[15].main.temp;
      var hum3 = response1.list[15].main.humidity;
      var date4 = response1.list[23].dt_txt;
      conDate4 = moment(date4).format("L");
      var icon4 = response1.list[23].weather[0].icon;
      var iconUrl4 = "http://openweathermap.org/img/w/" + icon4 + ".png";
      var temp4 = response1.list[23].main.temp;
      var hum4 = response1.list[23].main.humidity;
      var date5 = response1.list[31].dt_txt;
      conDate5 = moment(date5).format("L");
      var icon5 = response1.list[31].weather[0].icon;
      var iconUrl5 = "http://openweathermap.org/img/w/" + icon5 + ".png";
      var temp5 = response1.list[31].main.temp;
      var hum5 = response1.list[31].main.humidity;

      $("#cityName1").empty();
      $("#date1").empty();
      $("#temperature1").empty();
      $("#humidity1").empty();
      $("#date1").append(conDate1);
      $(".icon1").html("<img src='" + iconUrl1 + "'>");
      $("#temperature1").append("Temp: " + temp1 + " " + "F");
      $("#humidity1").append("Humidity : " + hum1 + "%");

      $("#cityName2").empty();
      $("#date2").empty();
      $("#temperature2").empty();
      $("#humidity2").empty();
      $("#date2").append(conDate2);
      $(".icon2").html("<img src='" + iconUrl2 + "'>");
      $("#temperature2").append("Temp: " + temp2 + " " + "F");
      $("#humidity2").append("Humidity : " + hum2 + "%");

      $("#cityName3").empty();
      $("#date3").empty();
      $("#temperature3").empty();
      $("#humidity3").empty();
      $("#date3").append(conDate3);
      $(".icon3").html("<img src='" + iconUrl3 + "'>");
      $("#temperature3").append("Temp: " + temp3 + " " + "F");
      $("#humidity3").append("Humidity : " + hum3 + "%");

      $("#cityName4").empty();
      $("#date4").empty();
      $("#temperature4").empty();
      $("#humidity4").empty();
      $("#date4").append(conDate4);
      $(".icon4").html("<img src='" + iconUrl4 + "'>");
      $("#temperature4").append("Temp: " + temp4 + " " + "F");
      $("#humidity4").append("Humidity : " + hum4 + "%");

      $("#cityName5").empty();
      $("#date5").empty();
      $("#temperature5").empty();
      $("#humidity5").empty();
      $("#date5").append(conDate5);
      $(".icon5").html("<img src='" + iconUrl5 + "'>");
      $("#temperature5").append("Temp: " + temp5 + " " + "F");
      $("#humidity5").append("Humidity : " + hum5 + "%");

      //**3** see if city is in array of cities, if not update localstorage, loop through array
      if (cities.indexOf(response1.city.name) === -1) {
        $("#citiesDiv").empty();
        cities.push(response1.city.name);
        localStorage.setItem("cities", JSON.stringify(cities));
        for (var i = 0; i < cities.length; i++) {
          makeRow(cities[i]);
        }
      }
    })
    .fail(function(error) {
      alert("Can't Find That City");
    });
}
$("#searchbutton").on("click", function(event) {
  event.preventDefault();
  var value = $("#searchbar")
    .val()
    .trim();
  console.log(value);
  weatherResults(value);
});

$(document).on("click", ".searchCity", function(event) {
  event.preventDefault();
  var value1 = $(this).text();
  console.log(value1);
  weatherResults(value1);
});

//**2** get Cities From localStorage
var cities = [];
if (localStorage.getItem("cities")) {
  cities = JSON.parse(localStorage.getItem("cities"));
  for (var i = 0; i < cities.length; i++) {
    makeRow(cities[i]);
  }
}
