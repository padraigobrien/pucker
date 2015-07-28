var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function(pause) {
        if (!Meteor.userId()) {
            console.log("not logged in")
            this.render('login');
        }
        else if (Meteor.userId()) {
            console.log("logged in")
            this.render('home');
        }
        else
        {
                this.next();
            }
    }
};
//
Router.onBeforeAction(OnBeforeActions.loginRequired, {
    only: ['home']
});
//
//Router.route('/', function () {
//    this.render('home');
//    path: '/'
//});
//
//Router.route('/home', function () {
//    this.render('home');
//});


Router.map( function () {
    this.route('home', {
        path: '/'
    });

    this.route('/', {
        path: 'home'
    })
});

