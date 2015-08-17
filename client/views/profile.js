Template.profile.events({
    'click .button': function () {
        console.log(Meteor.userId())
        var phoneNumber = document.getElementById('inputPhoneNumber').value;
        var address = document.getElementById('inputAddress').value;
        var latLng = Geolocation.latLng();
        Meteor.users.update ({_id: Meteor.userId()},
            {$set: {"profile.address": address, "profile.phonenumber" : phoneNumber, "profile.location.lat" : latLng.lat, "profile.location.lon" : latLng.lng}});
        Router.go('home');
    },
    'click .inputbottom': function () {

        var latLng = Geolocation.latLng();

        $('input[name="locationinput"]').val(latLng.lat +',' + latLng.lng);
        console.log("input location: "+latLng.lat +',' + latLng.lng)
    }
});



Template.profile.onRendered(function () {
    var latLng = Geolocation.latLng();
});

