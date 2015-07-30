var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function(pause) {
        if (!Meteor.userId()) {
            console.log("not logged in")
            this.render('login');
        }
        //else if (Meteor.userId()) {
        //    console.log("logged in")
        //    this.render('home');
        //}
        else
        {
                this.next();
            }
    }
};
//
Router.onBeforeAction(OnBeforeActions.loginRequired, {
    only: ['home','main','profile']
});

Router.map( function () {
    this.route('profile', {
        path: '/'
    });

    this.route('home', {
        path: '/home'
    });

    this.route('main', {
        path: '/main'
    });
});

