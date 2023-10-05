jQuery(document).ready(function ($) {
    $('.ess-dashboard-2 .popover-trigger').popover({
        html : true,
        content: function() {
            return $($(this).data('id')).html();
        }
    });
    $('.ess-dashboard-2 .widget-control-toggle').click(function () {
        $('.ess-dashboard-2').toggleClass('widget-control-enabled');
    });
    $(document).on('click', function () {
        $('#input-annual-leave-balance').parent().find('input').datetimepicker('hide');
    });

    $('#input-annual-leave-balance').on('click', function () {
        console.log($(this).parent().find('input'))
        $(this).parent().find('input').datetimepicker('toggle');
        return false;
    });

    $('.datetimepicker-input').datetimepicker();
    let calendarEl = document.getElementById('team-leaves');

    let calendar = new FullCalendar.Calendar(calendarEl, {
        contentHeight: 'auto',
        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
        now: '2023-01-07',
        aspectRatio: 1.8,
        scrollTime: '00:00',
        headerToolbar: {
            left: '',
            center: '',
            right: ''
        },
        initialView: 'resourceTimelineMonth',
        views: {
        },
        resourceLabelContent: function (resourceApi) {
            // console.log(resourceApi.resource);
            const markup = $('#team-leaves-markup .resource').html();
            const html = markup
                .replace('|AVATAR|',resourceApi.resource.extendedProps.avatar)
                .replace('|NAME|',resourceApi.resource.title)
                .replaceAll('|PROFILE|',resourceApi.resource.extendedProps.profile);
            return { html: html };
        },
        eventClick: function(info) {
            $('#example-show-holiday').modal('show')
            console.log('Event: ' + info.event.id);
        },
        navLinks: true,
        resourceAreaWidth: '25%',
        resourceAreaHeaderContent: '',
        resources: [
            { id: 'a', title: 'Ahmed Safaa',avatar: 'https://cdn.sage.hr/cupcake/images/53h_28154.jpg', profile: 'https://google.com' },
            { id: 'b', title: 'Rasha Abdel Hameed',avatar: 'https://cdn.sage.hr/cupcake/images/53h_28154.jpg', profile: '#' },
            { id: 'c', title: 'Rasha Abdel Hameed',avatar: 'https://cdn.sage.hr/cupcake/images/53h_28154.jpg', profile: '#' },
        ],
        events: [
            { id: '1', resourceId: 'a', start: '2023-01-07', end: '2023-01-07', title: 'Sick Leave', color: '#d5761b' },
            { id: '2', resourceId: 'b', start: '2023-01-16', end: '2023-01-20', title: 'Holiday', color: '#3a7dd8' },
            { id: '3', resourceId: 'a', start: '2023-01-02', end: '2023-01-05', title: 'Holiday', color: '#3a7dd8' },
            { id: '4', resourceId: 'b', start: '2023-01-11', end: '2023-01-14', title: 'Sick Leave', color: '#d5761b' },
            { id: '5', resourceId: 'a', start: '2023-01-09', end: '2023-01-10', title: 'Hajj', color: '#98231b' }
        ]
    });
    calendar.render();
});