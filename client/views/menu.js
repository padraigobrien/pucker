Template.menu.events({
    'click #open': function () {
        $("#my-menu").trigger("open.mm");
    },
    'click #close': function () {
        $("#my-menu").trigger("close.mm");
    }
});

Template.menu.onRendered(function () {
    $("#my-menu").mmenu({
        classes: "mm-black",
        // mm-white mm-black mm-light
        header: true,
        buttonbar: "Buttonbar",
        counters: true,
        footer: {
            footer: {
                add: true,
                content: "(c) 2015"
            }
        },
        offCanvas: {
            position: "left",
            zposition: "back"
        },
        onClick: {
            blockUI: true,
            close: true,
            preventDefault: false,
            setSelected: true
        }
    }, {
        transitionDuration: 100  // does not seem to work
    });
});
