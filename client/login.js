Template.login.events({
    'click .circle':function(event){
        Meteor.loginWithFacebook({ requestPermissions: ['email', 'public_profile']}, function(err)
        {
            Router.go('/');
        });
    }
});

