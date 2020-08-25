// JavaScript Document
jQuery(document).ready(function($) {

	'use strict';

    $(window).scroll(function(){
         $('.header').toggleClass('scrolled', $(this).scrollTop() > 1);
     });


});
