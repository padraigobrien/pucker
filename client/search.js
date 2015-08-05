Markers = new Mongo.Collection('markers');

if (Meteor.isClient) {
    Template.search.onCreated(function() {
        GoogleMaps.ready('map', function(map) {
            //google.maps.event.addListener(map.instance, 'click', function(event) {
            //    Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng() });
            //});

            function addInfoWindow(marker, message) {

                var infoWindow = new google.maps.InfoWindow({
                    content: message
                });
                google.maps.event.addListener(marker, 'click', function () {
                        infoWindow.open(map.instance, marker);
                });
            }

            var markers = {};

            Markers.find().observe({
                added: function (document) {
                    var marker = new google.maps.Marker({
                        draggable: true,
                        animation: google.maps.Animation.DROP,
                        position: new google.maps.LatLng(document.lat, document.lng),
                        map: map.instance,
                        id: document._id,
                        icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                    });

                    var contentString = "<p>Hellow world </p>";




                    google.maps.event.addListener(marker, 'dragend', function(event) {
                        Markers.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() }});
                    });

                    addInfoWindow(marker, "<a href='{{pathFor 'calender' serviceName=name }}'> Name:" + document.name + "<br>Title:" + document.title + "</a>");
                    //google.maps.event.addListener(marker, 'click', function() {
                    //    console.log("clicked infowindow")
                    //    infowindow.open(map,marker);
                    //});

                    markers[document._id] = marker;
                },
                changed: function (newDocument, oldDocument) {
                    markers[newDocument._id].setPosition({ lat: newDocument.lat, lng: newDocument.lng });
                },
                removed: function (oldDocument) {
                    markers[oldDocument._id].setMap(null);
                    google.maps.event.clearInstanceListeners(markers[oldDocument._id]);
                    delete markers[oldDocument._id];
                }

            });

        });
    });

    Meteor.startup(function() {
        GoogleMaps.load();
    });

    Template.search.helpers({

        mapOptions: function() {

            if (GoogleMaps.loaded()) {
                var latLng = Geolocation.latLng();
                return {
                    center: new google.maps.LatLng(latLng.lat, latLng.lng),
                    zoom: 15
                };
            }
        }
    });
}