//Function for getting client's location information

//checking if the browser supports the geolocation api
function getLocation() {
    if (navigator.geolocation) {

        //alerting browser support
        alert("Your browser supports location services");

        // getting the location information
        navigator.geolocation.getCurrentPosition(function (position) {
            var location = { lat: position.coords.latitude, long: position.coords.longitude };
            alert("Lat: " + location.lat + " Long: " + location.long);
        });


    }
    else {
        // alerting no browser support
        alert("Your browser does not support location services");
    }

}