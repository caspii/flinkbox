$( document ).ready(function() {
    var myLatlng;


    $.getJSON( "http://smart-ip.net/geoip-json?callback=?",
        function(data){
            $("#ip-address").text(data.host);
            myLatlng = new google.maps.LatLng(data.latitude,data.longitude);
        }
    );


    function initialize() {
        var mapOptions = {
            center: myLatlng,
            disableDefaultUI: true,
            zoom: 5,
            draggable: false,
            scrollwheel: false,
            panControl: false
        };

        // Create map
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        // Create marker
        var marker = new google.maps.Marker({
            position: myLatlng,
            title:"Hello World!"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);

    }
    google.maps.event.addDomListener(window, 'load', initialize);

});

