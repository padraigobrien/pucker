var Fiber = Npm.require('fibers');

Meteor.methods({
        'chargeCard': function(stripeToken) {
            var Stripe = StripeAPI('sk_test_9PMQPkuNxI0qSczM7DYPMvtU');

            Stripe.charges.create({
                amount: 5000,
                currency: 'EUR',
                source: stripeToken
            }, function(err, charge) {
                console.log(err, charge);
            });
        }
        //'chargeCard': function(stripeToken) {
        //    //thebookingdatetime,thelocation,theserviceName,theserviceRepName,theuserID
        //    check(stripeToken, String);
        //    var Stripe = StripeAPI('sk_test_9PMQPkuNxI0qSczM7DYPMvtU');
        //
        //
        //    Stripe.charges.create({
        //        source: stripeToken,
        //        amount: 5000, // this is equivalent to $50
        //        currency: 'eur'
        //    }, function(err, charge) {
        //        console.log(err, charge);
        //
        //        Fiber(function() {
        //            PaymentsRef = Payments.insert(charge);
                    //Bookings.insert({
                    //    userID: theuserID,
                    //    bookingDate : thebookingdatetime,
                    //    location: thelocation,
                    //    serviceName: theserviceName,
                    //    serviceRepresentative: theserviceRepName,
                    //    paymentReference: PaymentsRef
                    //})
        //            Router.go('congratulations');
        //        }).run();
        //
        //
        //    });
        //}
    });
