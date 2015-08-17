Meteor.startup( function() {
    Stripe.setPublishableKey('pk_test_HPEKBl7nQOepDTNYKb2YHPxW');

    var handler = StripeCheckout.configure({
        key: 'pk_test_HPEKBl7nQOepDTNYKb2YHPxW',
        token: function(token) {}
    });
});

Template.confirmation.events({
    'submit new-booking':function(event){
        event.preventDefault();

            theserviceName = event.target.pserviceName.value;
            thebookingdatetime = event.target.pbookingdatetime.value;
            thelocation = event.target.plocation.value;
            theserviceRepName = event.target.pserviceRepName.value;

        ccNum = event.target.pcardNumber.value;// $('#ccnum').val();
        cvc =  event.target.pcvc.value;//$('#cvc').val();
        expMo = event.target.pexpMo.value;// $('#exp-month').val();
        expYr =  event.target.pexpYr.value;//$('#exp-year').val();

        Stripe.card.createToken({
            number: ccNum,
            cvc: cvc,
            exp_month: expMo,
            exp_year: expYr,
        }, function(status, response) {
            stripeToken = response.id;
            console.log("stripe toke"  + status);
            Meteor.call('chargeCard', stripeToken);
        });


            //StripeCheckout.open({
            //    key: 'pk_test_HPEKBl7nQOepDTNYKb2YHPxW',
            //    amount: 5000, // this is equivalent to $50
            //    name: 'Meteor Tutorial',
            //    description: 'On how to use Stripe ($50.00)',
            //    panelLabel: 'Pay Now',
            //    token: function(res) {
            //        stripeToken = res.id;
            //        console.info(res);
            //        Meteor.call('chargeCard', stripeToken, thebookingdatetime,thelocation,theserviceName,theserviceRepName,Meteor.userI());
            //
            //    }
            //});
            }
    });
