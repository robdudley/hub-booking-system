// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require moment 
//= require fullcalendar


$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
    		header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
	      },

				events: '/bookings.json',

	      selectable: true,
	      selectHelper: true,
	      editable: true,
	      eventLimit: true,



        //eventSources: [
        // your event source
        //{
        //    url: '/bookings.json', // use the `url` property
        //    color: 'pink',    // an option!
        //    textColor: 'black'  // an option!
        //}

        // any other sources...

    		//]






    })

});