Template.profile.events({
    'click .button':function(event){
        console.log('clicked on submit');
        Router.go('home');
    }
});

Template.profile.rendered = function() {
    console.log("Hello");
}