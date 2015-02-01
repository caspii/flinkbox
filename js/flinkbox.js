// LOADING

$(function() {
  $("footer").load("addthis.html");
});





// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-47294774-1', 'flinkbox.de');
ga('send', 'pageview');

// Avoid `console` errors in browsers that lack a console.
// deactivated for debugging
/*
(function() {

  var method;
  var noop = function () {};
  var methods = [
  'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
  'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
  'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
  'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
*/

function addValidation(){
  /*
  * Translated default messages for the jQuery validation plugin.
  * Locale: DE (German, Deutsch)
  */
  (function ($) {
    $.extend($.validator.messages, {
      required: "Dieses Feld ist ein Pflichtfeld.",
      maxlength: $.validator.format("Geben Sie bitte maximal {0} Zeichen ein."),
      minlength: $.validator.format("Geben Sie bitte mindestens {0} Zeichen ein."),
      rangelength: $.validator.format("Geben Sie bitte mindestens {0} und maximal {1} Zeichen ein."),
      email: "Geben Sie bitte eine gültige E-Mail Adresse ein.",
      url: "Geben Sie bitte eine gültige URL ein.",
      date: "Bitte geben Sie ein gültiges Datum ein.",
      number: "Geben Sie bitte eine Nummer ein.",
      digits: "Geben Sie bitte nur Ziffern ein.",
      equalTo: "Bitte denselben Wert wiederholen.",
      range: $.validator.format("Geben Sie bitte einen Wert zwischen {0} und {1} ein."),
      max: $.validator.format("Geben Sie bitte einen Wert kleiner oder gleich {0} ein."),
      min: $.validator.format("Geben Sie bitte einen Wert größer oder gleich {0} ein."),
      creditcard: "Geben Sie bitte eine gültige Kreditkarten-Nummer ein."
    });
  }(jQuery));
}


/**
* Extend JQuery method with animation function (Uses Color Plugin)
* @param highlightColor
* @param duration
*/
$.fn.animateHighlight = function(highlightColor, duration) {
  var highlightBg = highlightColor || "#FFFF9C";
  var animateMs = duration || 1500;
  var originalBg = "#adafae" // Original background of input
  this.stop().css("background-color", highlightBg).animate({backgroundColor: originalBg}, animateMs);
};
