Meteor.publish("allServices", function() {
    return services.find();
});