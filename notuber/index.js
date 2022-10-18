function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(42.352271,-71.05524200000001),
    zoom:12,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var firstLat = new google.maps.LatLng(42.3453,	-71.0464);
  var secLAt   = new google.maps.LatLng(42.3662,	-71.0621);
  var thirdLat = new google.maps.LatLng(42.3603,	-71.0547);
  var forthLat = new google.maps.LatLng(42.3472,	-71.0802);
  var fifthLat = new google.maps.LatLng(42.3663,	-71.0544);
  var sixthLat = new google.maps.LatLng(42.3542,	-71.0704);

  var car1 = new google.maps.Marker({
    icon:'car.png'
  });

  car1.setPosition(firstLat)
  car1.setMap(map);


  var car2 = new google.maps.Marker({
    icon:'car.png'
  });

  car2.setPosition(secLAt)
  car2.setMap(map);

  var car3= new google.maps.Marker({
    icon:'car.png'
  });

  car3.setPosition(thirdLat)
  car3.setMap(map);

  var car4= new google.maps.Marker({
    icon:'car.png'
  });

  car4.setPosition(forthLat)
  car4.setMap(map);

  var car5= new google.maps.Marker({
    icon:'car.png'
  });

  car5.setPosition(fifthLat)
  car5.setMap(map);

  var car6= new google.maps.Marker({
    icon:'car.png'
  });

  car6.setPosition(sixthLat)
  car6.setMap(map);



  }

