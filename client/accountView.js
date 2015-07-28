Template.login.events({
    'click .circle':function(event){
        Meteor.loginWithFacebook({ requestPermissions: ['email', 'public_profile']}, function(err){
            console.log(Meteor.user());
            console.log(Meteor.user().profile.name);
            //console.log(Meteor.user().services.facebook.accessToken);
            Router.go('/home');
        });
    }
});
