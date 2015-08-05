Template.calender.onRendered(function() {
    this.$('.datetimepicker').datetimepicker({
        inline: true,
        sideBySide: true
    });
    $('.set-due-date').focus(function () {
        $('.datetimepicker').data("DateTimePicker").show();
    });
});

Template.calender.events({
    'click .button':function(event){
        console.log('clicked on search');
        Router.go('search');
    }
});