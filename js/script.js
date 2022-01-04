const settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/weather/weather.php",
    "method": "GET",
    "headers": {}
  };
  
  $.ajax(settings).done(function (response) {
    reponse=JSON.parse(response);
    console.log(response.data[0]);
    console.log(response.data[0].city_name);
    console.log(response.data[0].sunrise);

    $('p.city span').text(response.data[0].city_name);
    $('p.second-column').text(response.data[0].city_name);
    $('p.city span').text(response.data[0].city_name);
  });