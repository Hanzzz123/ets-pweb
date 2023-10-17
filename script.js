//callback function step 1 button click
$(document).ready(function(){
    performSearch();
    });

//api request
function performSearch(){
    let request;
    document.preventDefault();
    //asynchronous call

    request = $.ajax({
        url:'http://159.223.51.203:81/api/bio',
        type: "GET",
    });

    // step 3
    request.done(function (response){
        formatSearch(response);
    });

}

function formatSearch(jsonObject){
    let name_1 = jsonObject[0].name;
    let id_1 = jsonObject[0].id;


//     var date2 = jsonObject.list[1].dt_txt;
//     var city_name2 = jsonObject.city.name;
//     var city_weather2 = jsonObject.list[1].weather[0].main;
//     var city_temp2 = jsonObject.list[1].main.temp;
//     var iconcode2 = jsonObject.list[1].weather[0].icon;
//     var iconurl2 = "https://openweathermap.org/img/wn/" + iconcode2 + "@4x.png";
//
//
//     var date3 = jsonObject.list[2].dt_txt;
//     var city_name3 = jsonObject.city.name;
//     var city_weather3 = jsonObject.list[2].weather[0].main;
//     var city_temp3 = jsonObject.list[2].main.temp
//     var iconcode3 = jsonObject.list[2].weather[0].icon;
//     var iconurl3 = "https://openweathermap.org/img/wn/" + iconcode3 + "@4x.png";
//
//
//     var date4 = jsonObject.list[3].dt_txt;
//     var city_name4 = jsonObject.city.name;
//     var city_weather4 = jsonObject.list[3].weather[0].main;
//     var city_temp4 = jsonObject.list[3].main.temp
//     var iconcode4 = jsonObject.list[3].weather[0].icon;
//     var iconurl4 = "https://openweathermap.org/img/wn/" + iconcode4 + "@4x.png";
//
//

    $("#name1").text(name_1);
    $("#id1").text(id_1);

//
//     $("#date2").text(date2);
//     $("#city-name2").text(city_name2);
//     $("#city-weather2").text(city_weather2);
//     $("#city-temp2").text(city_temp2 + " Celsius");
//     $('#icon2').attr('src', iconurl2);
//
//     $("#date3").text(date3);
//     $("#city-name3").text(city_name3);
//     $("#city-weather3").text(city_weather3);
//     $("#city-temp3").text(city_temp3 + " Celsius");
//     $('#icon3').attr('src', iconurl3);
//
//     $("#date4").text(date4);
//     $("#city-name4").text(city_name4);
//     $("#city-weather4").text(city_weather4);
//     $("#city-temp4").text(city_temp4 + " Celsius");
//     $('#icon4').attr('src', iconurl4);
//
// }



}