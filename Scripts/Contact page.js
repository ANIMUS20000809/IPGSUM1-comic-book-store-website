 //function for initializing the google map object
function initMap() { 
    //checking if the browser supports the geolocation api
    if (navigator.geolocation) {

        alert("Your browser does support location services");

        navigator.geolocation.getCurrentPosition(function (position) {
            var location = { lat: position.coords.latitude, long: position.coords.longitude };
            alert("Lat: " + location.lat + " Long: " + location.long);

        });
    }
    else {
        alert("Your browser does not support location services");
    }

}

initMap();
