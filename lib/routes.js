var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function(pause) {
        if (!Meteor.userId()) {
            console.log("not logged in")
            this.render('login');
        }
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
//login -done
//profile - doneish
//service
//calendar - doneish
//search - doing calender date and time and service and location of user
//book
//proposal
//payment
//confirmation
//satisfaction

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

    this.route('calender', {
        path: '/calender/:serviceName',
        data: function(){
            return {serviceName: this.params.serviceName};
        }
    });

    this.route('search', {
        path: '/search/:serviceName',
        data: function(){
        return {serviceName: this.params.serviceName};
    }
    });

    this.route('confirmation', {
        path: '/confirmation/:serviceName',
        data: function(){
            return {serviceName: this.params.serviceName};
        }
    });
});

