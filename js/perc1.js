$( document ).ready(function() {

    $("#calc1").click(calc1);
    $("#calc2").click(calc2);
    $("#calc3").click(calc3);

});


function val1() {
    validateForm();
}

function calc1(){
    var p1 = getValue("#p11");
    var p2 = getValue("#p12");
    var result=((p1/100)*p2).toFixed(2);
    console.log(result)

    $("#result1").val(parseFloat(result)); // ParseFloat trims zeros
    $("#result1").animateHighlight("#FFFF00", 1000);
    return false;
}

function calc2(){
    console.log("calc2")
    return false;
}

function calc3(){
    console.log("calc3")
    return false;
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Returns value of input or placeholder value
 * @param id
 */
function getValue(id) {
    var val = $(id).val();
    if (val == "") {
        val = $(id).attr('placeholder');
    }
    return val;
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