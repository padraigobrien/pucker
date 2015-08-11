Template.calender.onRendered(function() {
    this.$('.datetimepicker').datetimepicker({
        inline: true,
        sideBySide: true,
        keepOpen: true,
        debug:true
    });
    $('.set-due-date').focus(function () {
        $('.datetimepicker').datetimepicker('show');
    });
});

Template.calender.events({
    'click .button':function(event){
        console.log(this);
        Router.go('search', {serviceName: "nails"});
    }
});