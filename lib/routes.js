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
//calendar - done
//search - done
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
        return {
            serviceName: this.params.serviceName,
            bookingdatetime: this.params.query.bookingdatetime
        };
    }
    });

    this.route('confirmation', {
        path: '/confirmation/:serviceName',
        data: function(){
            return {
                serviceName: this.params.serviceName,
                serviceRepName: this.params.query.serviceRepName,
                serviceRepLocation: this.params.query.serviceRepLocation,
                bookingdatetime: this.params.query.bookingdatetime
            };
        }
    });

    this.route('congratulations', {
        path: '/congratulations'
    });

    this.route('history', {
        path: '/history'
    });

    this.route('news', {
        path: '/news'
    });
});

