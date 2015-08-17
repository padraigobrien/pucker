Template.calender.onRendered(function() {
    this.$('.datetimepicker').datetimepicker({
        format: 'DD/MM/YYYY hh:mm A',
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
    'submit .new-appointment':function(event){
        event.preventDefault();
        bookingdatetime = event.target.datepicker.value;
        Router.go('search', {serviceName: this.serviceName}, {query: 'bookingdatetime='+bookingdatetime});
    }
});