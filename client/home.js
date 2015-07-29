Template.home.events({
    'click .button':function(event){
        console.log('clicked on button');
        Router.go('main');
    }
});
