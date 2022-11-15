var latitude ;
var longitude;
var distance = Infinity;
function myMap() {


  var mapProp= {
    center:new google.maps.LatLng(42.352271,-71.05524200000001),
    zoom:12,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  


/*   var firstLat = new google.maps.LatLng(42.3453,	-71.0464);
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
  car6.setMap(map); */

  navigator.geolocation.getCurrentPosition(showLocation);




  function showLocation(position) {
     latitude = position.coords.latitude;
     longitude = position.coords.longitude;
     var myLocation = new google.maps.Marker({});
     var myLatLng = new google.maps.LatLng(latitude,	longitude);
     var minLocation = new google.maps.LatLng(latitude,	longitude);;
     myLocation.setPosition(myLatLng);
     myLocation.setMap(map);
     var  distance = BigInt(9007199254740991);
     console.log(latitude,longitude);

     var xhttp = new XMLHttpRequest();
     var url = 'https://gentle-atoll-32585.herokuapp.com/rides';
     var params = "username=DaPLuvLU&lat=" + latitude + "&lng=" + longitude;
     xhttp.open('POST', url, true);
    
    //Send the proper header information along with the request
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    console.log(params);
    
    xhttp.onreadystatechange = function() {//Call a function when the state changes.
      if(xhttp.readyState == 4 && xhttp.status == 200) {
        console.log("request successful");
          var cars =  JSON.parse(xhttp.responseText);
          console.log("request successful");
          console.log(cars);

          

          for (let i = 0; i < cars.length; i++) {
            var secLAt = new google.maps.LatLng(cars[i].lat, cars[i].lng);
            //var minLocation = BigInt(9007199254740991);
            console.log(secLAt.lat(), secLAt.lng());
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(secLAt),
              map: map,
              icon:'car.png'
            });
            
            if (google.maps.geometry.spherical.computeDistanceBetween(myLatLng, secLAt) < distance )
            { distance =  google.maps.geometry.spherical.computeDistanceBetween(myLatLng, secLAt);
              minLocation =  new google.maps.LatLng(secLAt);
            }

          }
          
          
      };
      const infowindow = new google.maps.InfoWindow({
        content: "Closest Vehich is " + distance + " miles away at " + minLocation.lat() + ", " + minLocation.lng(),
        ariaLabel: "Uluru",
      }); 

      const flightPath = new google.maps.Polyline({
        path: [{lat:latitude, lng:longitude}, {lat:minLocation.lat(), lng:minLocation.lng()}],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });



      myLocation.addListener("click", () => {
        infowindow.open({
          anchor: myLocation,
          map,
        });
        flightPath.setMap(map);
      });
      console.log(minLocation.lat(), minLocation.lng());


    }
    xhttp.send();
    
 }
 
 



  }


