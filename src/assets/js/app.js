/*global jQuery*/
(function ($, window) {

    "use strict";

    // custom namespace
    var profile = profile || {};

    // global variables
    var windowSmall   =  $(window).width() < 768,
    	windowMed	  =  $(window).width() >= 768 && $(window).width() < 1024,
    	windowLarge	  =  $(window).width() >= 1024;

    var $name = $('#firstName'),
        $lastName = $('#lastName'),
        $user = $('#username'),
        $mail = $('#mail'),
        $pass = $('#pass');


    profile.global = {

    	init: function(){
  			$(document).foundation();
            this.enableSign();
            this.secondStep();
            this.passwordPattern();
    	},

        enableSign: function() {
            $('#tinySwitch').on('change', function(event) {
                event.preventDefault();
                /* Act on the event */

                if ($(this).is(':checked')) {
                    $('.button').removeClass('disabled').prop('disabled', false);
                }else{
                    $('.button').addClass('disabled').prop('disabled', true);
                }
            });            
        },

        secondStep: function() {
            $(document).on("submit", function(event) {
                event.preventDefault();

                $('#modal').addClass('is-active');
            });
        },

        passwordPattern: function() {
            // Set paramaters
            Foundation.Abide.defaults.patterns['pass'] = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        }
    }



    //initialize
    profile.global.init();

    $(window).on('resize',  function(event) {
        event.preventDefault();
        windowSmall   =  $(window).width() < 768;
        windowMed     =  $(window).width() >= 768 && $(window).width() < 1024;
        windowLarge   =  $(window).width() >= 1024;
    });

}(jQuery, this));
//end scope.


