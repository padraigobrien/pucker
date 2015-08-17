UI.body.rendered = function(){
    $('body').hammer();
}

Template.login.events({
    'click .circle':function(){
        console.log("clicked login")
        Meteor.loginWithFacebook({ requestPermissions: ['email', 'public_profile']}, function(err)
        {
            Router.go('/');
        });
    },
    'tap .circle': function(event){
        event.stopPropagation();
        alert("Working on our mobile version please visit using desktop!");
    }
});

