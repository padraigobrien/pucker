Markers = new Mongo.Collection('markers');


    Template.search.onCreated(function() {
        GoogleMaps.ready('map', function(map) {
            //google.maps.event.addListener(map.instance, 'click', function(event) {
            //    Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng() });
            //});

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

                    google.maps.event.addListener(marker, 'dragend', function(event) {
                        Markers.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() }});
                    });

                    google.maps.event.addListener(marker, 'click', function () {
                        Session.set('serviceRepName', document.name);
                        Session.set('serviceRepLocation', document.lat + ' ' + document.lng);
                    });

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
        Session.setDefault('serviceRepName', '');
        Session.setDefault('serviceRepLocation','');
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
        },

        serviceRepName: function() {
            return Session.get('serviceRepName');
        },

        serviceRepLocation: function() {
            return Session.get('serviceRepLocation');
        }
    });

    Template.search.events({
        'click .rsvp-buttons':function(event){
            Router.go('confirmation', {serviceName: this.serviceName}, {query: 'serviceRepName='+Session.get('serviceRepName')+'&serviceRepLocation='+Session.get('serviceRepLocation')+'&bookingdatetime='+bookingdatetime});
        }
    })

